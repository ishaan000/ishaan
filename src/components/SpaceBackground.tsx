"use client";
import React, { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Background stars
    const stars: Star[] = [];
    const numStars = Math.floor(canvas.width * canvas.height / 800); // Adjust density
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

    // Shooting stars
    const shootingStars: ShootingStar[] = [];
    const maxShootingStars = 15; // Maximum number of shooting stars at once

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

    // Create nebula effect
    const createNebula = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.8, 
        canvas.height * 0.2, 
        0, 
        canvas.width * 0.8, 
        canvas.height * 0.2, 
        canvas.width * 0.6
      );
      
      gradient.addColorStop(0, 'rgba(255, 100, 50, 0.1)');
      gradient.addColorStop(0.5, 'rgba(50, 100, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Second nebula
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.2, 
        canvas.height * 0.8, 
        0, 
        canvas.width * 0.2, 
        canvas.height * 0.8, 
        canvas.width * 0.4
      );
      
      gradient2.addColorStop(0, 'rgba(50, 200, 100, 0.1)');
      gradient2.addColorStop(0.5, 'rgba(100, 50, 200, 0.05)');
      gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    let animationFrameId: number;
    let lastShootingStarTime = 0;

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = 'rgb(5, 5, 15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
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
      
      // Create new shooting stars randomly
      if (timestamp - lastShootingStarTime > 800 && Math.random() < 0.05) {
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
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default SpaceBackground;
