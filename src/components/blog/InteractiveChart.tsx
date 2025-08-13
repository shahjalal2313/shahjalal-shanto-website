'use client';

import { useState } from 'react';

interface ChartData {
  [key: string]: unknown;
}

interface MLMetrics {
  accuracy: number;
  speed: number;
  scalability: number;
}

interface InteractiveChartProps {
  type: 'hessian-eigenvalues' | 'irc-profile' | 'tunneling-comparison' | 'ml-comparison' | 'code-visualization';
  data?: ChartData;
  title?: string;
  xAxis?: string;
  yAxis?: string;
  code?: {
    language: string;
    content: string;
  };
}

export default function InteractiveChart({ 
  type, 
  data, 
  title, 
  xAxis, 
  yAxis,
  code 
}: InteractiveChartProps) {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [showCode, setShowCode] = useState(false);

  if (type === 'code-visualization' && code) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-sans font-semibold text-foreground">
            Interactive Code Example
          </h3>
          <button
            onClick={() => setShowCode(!showCode)}
            className="px-3 py-1 bg-primary/10 text-primary rounded text-sm hover:bg-primary/20 transition-colors"
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>
        
        {showCode && (
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{code.content.trim()}</code>
            </pre>
          </div>
        )}
        
        <div className="mt-4 p-4 bg-background rounded-lg border border-border">
          <p className="text-sm text-muted">
            This example shows how to create interactive 3D PES visualizations using Python libraries.
            The code demonstrates surface generation, data processing, and interactive plotting capabilities.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'hessian-eigenvalues' && data) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-sans font-semibold text-foreground mb-4">
          {title || 'Hessian Eigenvalue Analysis'}
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(data).map(([type, values]) => (
            <div key={type} className="bg-background p-4 rounded-lg border border-border">
              <h4 className="font-sans font-medium text-foreground mb-3 capitalize">
                {type.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              
              <div className="space-y-2">
                {(values as { eigenvalues: number[] }).eigenvalues.map((val: number, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-muted">Mode {index + 1}</span>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-12 h-2 rounded ${
                          val < 0 ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{
                          width: `${Math.min(Math.abs(val) / 10, 40)}px`
                        }}
                      />
                      <span className={`text-sm font-mono ${
                        val < 0 ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-border text-xs text-muted">
                Negative eigenvalues: {(values as { eigenvalues: number[] }).eigenvalues.filter((v: number) => v < 0).length}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-sm text-muted">
            <strong>Analysis:</strong> Local minima have all positive eigenvalues, while transition states 
            have exactly one negative eigenvalue. Higher-order saddle points have multiple negative eigenvalues.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'irc-profile' && data && Array.isArray(data.points)) {
    const maxEnergy = Math.max(...(data.points as { energy: number }[]).map(p => p.energy));
    const minEnergy = Math.min(...(data.points as { energy: number }[]).map(p => p.energy));
    const energyRange = maxEnergy - minEnergy;

    return (
      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-sans font-semibold text-foreground mb-4">
          {title || 'Reaction Profile'}
        </h3>
        
        <div className="relative">
          {/* SVG Chart */}
          <svg viewBox="0 0 600 300" className="w-full h-64 border border-border rounded">
            {/* Grid lines */}
            {[0, 50, 100, 150, 200, 250].map(y => (
              <line key={y} x1="50" y1={y + 25} x2="550" y2={y + 25} stroke="#333" strokeWidth="0.5" />
            ))}
            
            {/* Axes */}
            <line x1="50" y1="275" x2="550" y2="275" stroke="#666" strokeWidth="2" />
            <line x1="50" y1="25" x2="50" y2="275" stroke="#666" strokeWidth="2" />
            
            {/* Energy profile curve */}
            <path
              d={`M ${(data.points as { energy: number }[]).map((p, i: number) => 
                `${50 + (i * 500 / ((data.points as unknown[]).length - 1))},${275 - ((p.energy - minEnergy) / energyRange * 250)}`
              ).join(' L ')}`}
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
            />
            
            {/* Data points */}
            {(data.points as { label: string; energy: number; s?: number }[]).map((point, index: number) => {
              const x = 50 + (index * 500 / ((data.points as unknown[]).length - 1));
              const y = 275 - ((point.energy - minEnergy) / energyRange * 250);
              
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill={point.label === 'Transition State' ? '#ef4444' : '#22c55e'}
                    stroke="#fff"
                    strokeWidth="2"
                    className="cursor-pointer"
                    onClick={() => setSelectedPoint(selectedPoint === index ? null : index)}
                  />
                  {selectedPoint === index && (
                    <g>
                      <rect x={x - 40} y={y - 35} width="80" height="25" fill="rgba(0,0,0,0.8)" rx="4" />
                      <text x={x} y={y - 20} textAnchor="middle" fill="white" fontSize="10">
                        {point.label}
                      </text>
                      <text x={x} y={y - 8} textAnchor="middle" fill="white" fontSize="10">
                        {point.energy.toFixed(1)} kcal/mol
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
            
            {/* Axis labels */}
            <text x="300" y="295" textAnchor="middle" fill="#666" fontSize="12">
              {xAxis || 'Reaction Coordinate'}
            </text>
            <text x="30" y="150" textAnchor="middle" fill="#666" fontSize="12" transform="rotate(-90 30 150)">
              {yAxis || 'Energy'}
            </text>
          </svg>
        </div>
        
        <div className="mt-4 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-muted">Stable States</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-xs text-muted">Transition State</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ml-comparison' && data) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-sans font-semibold text-foreground mb-6">
          {title || 'Method Comparison'}
        </h3>
        
        <div className="space-y-6">
          {Object.entries(data).map(([method, metrics]) => (
            <div key={method} className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-sans font-medium text-foreground capitalize">
                  {method.replace('_', ' ')}
                </h4>
                <div className="flex gap-4 text-sm">
                  <span className="text-muted">Acc: {(metrics as MLMetrics).accuracy}%</span>
                  <span className="text-muted">Speed: {(metrics as MLMetrics).speed}x</span>
                  <span className="text-muted">Scale: {(metrics as MLMetrics).scalability}%</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted w-16">Accuracy</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(metrics as MLMetrics).accuracy}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted w-8">{(metrics as MLMetrics).accuracy}%</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted w-16">Speed</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((metrics as MLMetrics).speed / 10, 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted w-8">{(metrics as MLMetrics).speed}x</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted w-16">Scale</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(metrics as MLMetrics).scalability}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted w-8">{(metrics as MLMetrics).scalability}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-8">
      <h3 className="text-lg font-sans font-semibold text-foreground mb-4">
        Interactive Chart Component
      </h3>
      <p className="text-muted">Chart type &quot;{type}&quot; not implemented yet.</p>
    </div>
  );
}