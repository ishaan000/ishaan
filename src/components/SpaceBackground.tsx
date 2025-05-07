"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  tail: number;
  opacity: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  size: number;
  color: string;
  opacity: number;
  trail: Array<{ x: number; y: number }>;
  active: boolean;
}

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track device performance capability
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);

  useEffect(() => {
    // Check if device is likely low performance (mobile or older device)
    const checkDevicePerformance = () => {
      // Check if it's a mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Additional performance check - if available in browser
      const hasSlowProcessor = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
      
      return isMobile || hasSlowProcessor;
    };
    
    setIsLowPerfDevice(checkDevicePerformance());
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    
    // Enable image smoothing for better quality
    ctx.imageSmoothingEnabled = true;

    // Set canvas to full screen with device pixel ratio consideration
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Set display size (css pixels)
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Set actual size in memory (scaled to account for extra pixel density)
      // Using a slightly lower scale for better performance on high-DPI displays
      const scale = isLowPerfDevice ? 1 : Math.min(pixelRatio, 2);
      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);
      
      // Normalize coordinate system to use css pixels
      ctx.scale(scale, scale);
    };

    // Handle window resize with debounce for performance
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    };
    
    window.addEventListener('resize', handleResize);
    resizeCanvas();

    // Background stars - adjust density based on device performance
    const stars: Star[] = [];
    const baseDensity = isLowPerfDevice ? 1600 : 800; // Lower density for low-perf devices
    const numStars = Math.floor((window.innerWidth * window.innerHeight) / baseDensity);
    const colorPalette = ['#ffffff', '#f8f8ff', '#e6e6fa', '#b0e0e6', '#87cefa'];

    // Create background stars
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 1.5;
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const speed = 0.05 + Math.random() * 0.1;
      const tail = 0;
      const opacity = 0.5 + Math.random() * 0.5;
      
      stars.push({ x, y, size, color, speed, tail, opacity });
    }

    // Shooting stars - adjust based on device performance and screen size
    const shootingStars: ShootingStar[] = [];
    const maxShootingStars = isLowPerfDevice ? 5 : (window.innerWidth < 768 ? 8 : 15); // Fewer on mobile/low-perf

    // Create a shooting star
    const createShootingStar = () => {
      // Only create if we're under the maximum
      if (shootingStars.filter(s => s.active).length < maxShootingStars) {
        // Random starting position on the top half of the screen
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.5);
        const length = 50 + Math.random() * 80; // Length of the shooting star
        const speed = 3 + Math.random() * 5;
        const size = 1 + Math.random() * 2;
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        const opacity = 0.7 + Math.random() * 0.3;
        const trail: Array<{ x: number; y: number }> = []; // Trail points
        const active = true;

        shootingStars.push({ x, y, length, speed, size, color, opacity, trail, active });
      }
    };

    // Create nebula effect - responsive to screen dimensions
    const createNebula = () => {
      // Use window dimensions instead of canvas dimensions for consistent positioning
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // First nebula - positioned relative to viewport
      const gradient = ctx.createRadialGradient(
        width * 0.8, 
        height * 0.2, 
        0, 
        width * 0.8, 
        height * 0.2, 
        Math.min(width, height) * 0.6 // Use the smaller dimension for better mobile appearance
      );
      
      // Adjust opacity based on device performance
      const baseOpacity = isLowPerfDevice ? 0.07 : 0.1;
      gradient.addColorStop(0, `rgba(255, 100, 50, ${baseOpacity})`);
      gradient.addColorStop(0.5, `rgba(50, 100, 255, ${baseOpacity/2})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Second nebula - only render on medium+ screens or if not low performance
      if (!isLowPerfDevice || width >= 768) {
        const gradient2 = ctx.createRadialGradient(
          width * 0.2, 
          height * 0.8, 
          0, 
          width * 0.2, 
          height * 0.8, 
          Math.min(width, height) * 0.4
        );
        
        gradient2.addColorStop(0, `rgba(50, 200, 100, ${baseOpacity})`);
        gradient2.addColorStop(0.5, `rgba(100, 50, 200, ${baseOpacity/2})`);
        gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, width, height);
      }
    };

    // Animation loop with performance optimizations
    let animationFrameId: number;
    let lastShootingStarTime = 0;
    let lastFrameTime = 0;
    const targetFPS = isLowPerfDevice ? 30 : 60; // Lower target FPS for low-perf devices
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp: number) => {
      // Skip frames to maintain target FPS
      const elapsed = timestamp - lastFrameTime;
      if (elapsed < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = timestamp - (elapsed % frameInterval);
      
      // Get current dimensions for responsive rendering
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw background
      ctx.fillStyle = 'rgb(5, 5, 15)';
      ctx.fillRect(0, 0, width, height);
      
      // Draw nebula
      createNebula();
      
      // Draw and update background stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Twinkle effect
        star.opacity = 0.5 + (Math.sin(timestamp * 0.001 * star.speed) + 1) * 0.25;
      });
      
      // Create new shooting stars randomly - adjusted frequency based on device
      const shootingStarInterval = isLowPerfDevice ? 1500 : 800;
      const shootingStarProbability = isLowPerfDevice ? 0.03 : 0.05;
      
      if (timestamp - lastShootingStarTime > shootingStarInterval && Math.random() < shootingStarProbability) {
        createShootingStar();
        lastShootingStarTime = timestamp;
      }
      
      // Draw and update shooting stars
      shootingStars.forEach(star => {
        if (!star.active) return;
        
        // Update position
        star.x += star.speed;
        star.y += star.speed;
        
        // Add current position to trail
        star.trail.unshift({ x: star.x, y: star.y });
        
        // Limit trail length
        if (star.trail.length > 20) {
          star.trail.pop();
        }
        
        // Draw shooting star
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        
        // Draw the main shooting star
        ctx.lineTo(star.x - star.length, star.y - star.length);
        ctx.lineWidth = star.size;
        ctx.strokeStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.stroke();
        ctx.globalAlpha = 1;
        
        // Draw the trail with gradient
        if (star.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(star.trail[0].x, star.trail[0].y);
          
          for (let i = 1; i < star.trail.length; i++) {
            ctx.lineTo(star.trail[i].x, star.trail[i].y);
          }
          
          const gradient = ctx.createLinearGradient(
            star.trail[0].x, star.trail[0].y,
            star.trail[star.trail.length - 1].x, star.trail[star.trail.length - 1].y
          );
          
          gradient.addColorStop(0, star.color);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = star.size * 0.6;
          ctx.globalAlpha = star.opacity * 0.3;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        
        // Deactivate if off screen
        if (star.x > canvas.width + star.length || star.y > canvas.height + star.length) {
          star.active = false;
        }
      });
      
      // Clean up inactive shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        if (!shootingStars[i].active) {
          shootingStars.splice(i, 1);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate(0);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLowPerfDevice]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        willChange: 'transform', // Hardware acceleration hint
        transform: 'translateZ(0)', // Force GPU acceleration
        pointerEvents: 'none'
      }}
    />
  );
};

export default SpaceBackground;
