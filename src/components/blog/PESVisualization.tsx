'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface PESVisualizationProps {
  type: 'simple' | 'applications';
  molecule?: string;
  description?: string;
  examples?: Array<{
    field: string;
    reaction?: string;
    molecule?: string;
    surface?: string;
    barriers?: number[];
    conformations?: number;
    binding_sites?: number;
  }>;
}

const calculatePESEnergy = (x: number, y: number, angle: number): number => {
  // Simplified PES function with rotation effect
  const rotX = x * Math.cos(angle * Math.PI / 180) - y * Math.sin(angle * Math.PI / 180);
  const rotY = x * Math.sin(angle * Math.PI / 180) + y * Math.cos(angle * Math.PI / 180);
  
  // Two-well potential with transition state
  const well1 = Math.exp(-((rotX + 80) ** 2 + (rotY - 50) ** 2) / 2000);
  const well2 = Math.exp(-((rotX - 80) ** 2 + (rotY + 50) ** 2) / 2000);
  const barrier = Math.exp(-((rotX) ** 2 + (rotY) ** 2) / 1500) * 0.7;
  
  return 1 - well1 - well2 + barrier;
};

const getEnergyColor = (energy: number): string => {
  // Color mapping from blue (low energy) to red (high energy)
  const normalized = Math.min(Math.max(energy, 0), 1);
  const r = Math.floor(255 * normalized);
  const g = Math.floor(255 * (1 - normalized) * 0.5);
  const b = Math.floor(255 * (1 - normalized));
  
  return `rgb(${r}, ${g}, ${b})`;
};

const drawCriticalPoints = (ctx: CanvasRenderingContext2D) => {
  // Draw minima (stable points)
  ctx.fillStyle = '#00ff00';
  ctx.beginPath();
  ctx.arc(-80, 50, 8, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(80, -50, 8, 0, 2 * Math.PI);
  ctx.fill();
  
  // Draw transition state
  ctx.fillStyle = '#ffff00';
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fill();
  
  // Labels
  ctx.fillStyle = '#ffffff';
  ctx.font = '12px Arial';
  ctx.fillText('Reactant', -110, 40);
  ctx.fillText('Product', 50, -40);
  ctx.fillText('TS', -10, -15);
};

export default function PESVisualization({ type, molecule, description, examples }: PESVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const drawPES = useCallback((ctx: CanvasRenderingContext2D, angle: number) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    
    // Clear canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);
    
    // Create 3D-like PES visualization
    ctx.save();
    ctx.translate(width / 2, height / 2);
    
    // Draw grid
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 0.5;
    
    for (let i = -200; i <= 200; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, -150);
      ctx.lineTo(i, 150);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-200, i);
      ctx.lineTo(200, i);
      ctx.stroke();
    }
    
    // Draw PES surface with perspective effect
    const gridSize = 20;
    for (let x = -200; x <= 180; x += gridSize) {
      for (let y = -150; y <= 130; y += gridSize) {
        const energy = calculatePESEnergy(x, y, angle);
        const color = getEnergyColor(energy);
        
        ctx.fillStyle = color;
        ctx.fillRect(x, y, gridSize, gridSize);
      }
    }
    
    // Draw critical points
    drawCriticalPoints(ctx);
    
    ctx.restore();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;
    
    drawPES(ctx, rotationAngle);
  }, [rotationAngle, drawPES]);

  useEffect(() => {
    if (isRotating) {
      const interval = setInterval(() => {
        setRotationAngle(prev => (prev + 2) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRotating]);

  if (type === 'applications' && examples) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="text-xl font-sans font-semibold text-foreground mb-4">
          PES Applications in Research
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div key={index} className="bg-background p-4 rounded-lg border border-border">
              <h4 className="font-sans font-semibold text-foreground mb-2">
                {example.field}
              </h4>
              {example.reaction && (
                <p className="text-sm text-muted mb-2">
                  <strong>Reaction:</strong> {example.reaction}
                </p>
              )}
              {example.molecule && (
                <p className="text-sm text-muted mb-2">
                  <strong>Molecule:</strong> {example.molecule}
                </p>
              )}
              {example.surface && (
                <p className="text-sm text-muted mb-2">
                  <strong>Surface:</strong> {example.surface}
                </p>
              )}
              {example.barriers && (
                <div className="text-sm text-muted">
                  <strong>Energy Barriers:</strong>
                  <div className="flex gap-2 mt-1">
                    {example.barriers.map((barrier, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded">
                        {barrier} kcal/mol
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-sans font-semibold text-foreground">
          Interactive PES Visualization {molecule && `- ${molecule}`}
        </h3>
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {isRotating ? 'Stop' : 'Rotate'}
        </button>
      </div>
      
      <div className="flex flex-col items-center">
        <canvas
          ref={canvasRef}
          className="border border-border rounded-lg"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        
        <div className="mt-4 text-center">
          <p className="text-sm text-muted font-serif">
            {description || 'Interactive 3D visualization of potential energy surface showing energy minima (green), transition states (yellow), and energy landscape.'}
          </p>
          
          <div className="flex justify-center items-center gap-6 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-xs text-muted">Minima</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-xs text-muted">Transition State</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
              <span className="text-xs text-muted">Energy Scale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}