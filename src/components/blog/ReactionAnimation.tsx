'use client';

import { useState, useEffect } from 'react';

interface ReactionAnimationProps {
  reaction: string;
  reactants: string;
  products: string;
  transitionState: string;
  coordinates: Array<{
    name: string;
    energy: number;
    geometry: string;
  }>;
}

export default function ReactionAnimation({
  reaction,
  reactants,
  products,
  transitionState,
  coordinates
}: ReactionAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1000);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % coordinates.length);
      }, animationSpeed);
      
      return () => clearInterval(interval);
    }
  }, [isAnimating, animationSpeed, coordinates.length]);

  const maxEnergy = Math.max(...coordinates.map(c => c.energy));
  const minEnergy = Math.min(...coordinates.map(c => c.energy));
  const energyRange = maxEnergy - minEnergy;

  const getEnergyHeight = (energy: number) => {
    if (energyRange === 0) return 50;
    return 200 - ((energy - minEnergy) / energyRange * 150);
  };

  const getMoleculeRepresentation = (geometry: string, step: number) => {
    // Simple molecular representation based on geometry
    switch (geometry) {
      case 'separate':
        return step < coordinates.length / 2 
          ? '🔴—⚪ + 🟢⁻' 
          : '🔴—⚪—🟢 + ⚪⁻';
      case 'linear':
        return '🟢⁻···🔴—⚪···⚪⁻';
      default:
        return '🔴—⚪—🟢';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-sans font-semibold text-foreground">
          {reaction} Reaction Animation
        </h3>
        <div className="flex items-center gap-4">
          <select
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
            className="px-2 py-1 bg-background border border-border rounded text-sm"
          >
            <option value={2000}>Slow</option>
            <option value={1000}>Normal</option>
            <option value={500}>Fast</option>
          </select>
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {isAnimating ? 'Stop' : 'Animate'}
          </button>
        </div>
      </div>

      {/* Reaction equation */}
      <div className="text-center mb-6 p-4 bg-background rounded-lg border border-border">
        <div className="text-lg font-mono">
          {reactants} → {transitionState} → {products}
        </div>
      </div>

      {/* Energy diagram */}
      <div className="relative mb-6">
        <svg viewBox="0 0 800 250" className="w-full h-48 border border-border rounded bg-background">
          {/* Grid lines */}
          {[0, 50, 100, 150, 200].map(y => (
            <line key={y} x1="50" y1={y + 25} x2="750" y2={y + 25} stroke="#333" strokeWidth="0.5" opacity="0.3" />
          ))}
          
          {/* Energy profile curve */}
          <path
            d={`M ${coordinates.map((coord, i) => 
              `${50 + (i * 700 / (coordinates.length - 1))},${getEnergyHeight(coord.energy) + 25}`
            ).join(' L ')}`}
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Data points */}
          {coordinates.map((coord, index) => {
            const x = 50 + (index * 700 / (coordinates.length - 1));
            const y = getEnergyHeight(coord.energy) + 25;
            const isCurrent = index === currentStep;
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r={isCurrent ? "8" : "5"}
                  fill={isCurrent ? "#ef4444" : index === Math.floor(coordinates.length / 2) ? "#fbbf24" : "#22c55e"}
                  stroke="#fff"
                  strokeWidth="2"
                  className={isCurrent ? "animate-pulse" : ""}
                />
                
                {/* Labels */}
                <text
                  x={x}
                  y={y + 20}
                  textAnchor="middle"
                  fill="#666"
                  fontSize="10"
                  className="font-sans"
                >
                  {coord.name}
                </text>
                
                <text
                  x={x}
                  y={y - 10}
                  textAnchor="middle"
                  fill="#666"
                  fontSize="9"
                >
                  {coord.energy > 0 ? '+' : ''}{coord.energy}
                </text>
              </g>
            );
          })}
          
          {/* Current step indicator */}
          {isAnimating && (
            <line
              x1={50 + (currentStep * 700 / (coordinates.length - 1))}
              y1="25"
              x2={50 + (currentStep * 700 / (coordinates.length - 1))}
              y2="225"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="4,4"
              opacity="0.7"
            />
          )}
          
          {/* Axes */}
          <line x1="50" y1="225" x2="750" y2="225" stroke="#666" strokeWidth="1" />
          <line x1="50" y1="25" x2="50" y2="225" stroke="#666" strokeWidth="1" />
          
          {/* Axis labels */}
          <text x="400" y="245" textAnchor="middle" fill="#666" fontSize="12">
            Reaction Coordinate
          </text>
          <text x="25" y="125" textAnchor="middle" fill="#666" fontSize="12" transform="rotate(-90 25 125)">
            Energy (kcal/mol)
          </text>
        </svg>
      </div>

      {/* Current molecular structure */}
      <div className="text-center mb-6">
        <div className="bg-background p-6 rounded-lg border border-border">
          <h4 className="text-md font-sans font-semibold text-foreground mb-3">
            Current Structure: {coordinates[currentStep]?.name}
          </h4>
          <div className="text-3xl mb-3">
            {getMoleculeRepresentation(coordinates[currentStep]?.geometry, currentStep)}
          </div>
          <div className="text-sm text-muted">
            Energy: {coordinates[currentStep]?.energy > 0 ? '+' : ''}{coordinates[currentStep]?.energy} kcal/mol
          </div>
        </div>
      </div>

      {/* Manual step controls */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-3 py-1 bg-secondary text-secondary-foreground rounded disabled:opacity-50"
        >
          ← Previous
        </button>
        
        <span className="text-sm text-muted">
          Step {currentStep + 1} of {coordinates.length}
        </span>
        
        <button
          onClick={() => setCurrentStep(Math.min(coordinates.length - 1, currentStep + 1))}
          disabled={currentStep === coordinates.length - 1}
          className="px-3 py-1 bg-secondary text-secondary-foreground rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>

      {/* Reaction details */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <h5 className="font-sans font-semibold text-green-800 mb-1">Reactants</h5>
          <p className="text-sm text-green-700">{reactants}</p>
          <p className="text-xs text-green-600 mt-1">
            Energy: {coordinates[0]?.energy} kcal/mol
          </p>
        </div>
        
        <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
          <h5 className="font-sans font-semibold text-yellow-800 mb-1">Transition State</h5>
          <p className="text-sm text-yellow-700">{transitionState}</p>
          <p className="text-xs text-yellow-600 mt-1">
            Energy: {Math.max(...coordinates.map(c => c.energy))} kcal/mol
          </p>
        </div>
        
        <div className="bg-blue-50 p-3 rounded border border-blue-200">
          <h5 className="font-sans font-semibold text-blue-800 mb-1">Products</h5>
          <p className="text-sm text-blue-700">{products}</p>
          <p className="text-xs text-blue-600 mt-1">
            Energy: {coordinates[coordinates.length - 1]?.energy} kcal/mol
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-muted">Stable States</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-xs text-muted">Transition State</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-muted">Current Position</span>
        </div>
      </div>
    </div>
  );
}