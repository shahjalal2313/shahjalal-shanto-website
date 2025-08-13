'use client';

import { useState } from 'react';

interface Method {
  name: string;
  accuracy: number;
  cost: number;
  color: string;
}

interface EnergyDiagramProps {
  methods: Method[];
  title?: string;
}

export default function EnergyDiagram({ methods, title }: EnergyDiagramProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'accuracy' | 'cost' | 'efficiency'>('efficiency');

  const getEfficiencyScore = (method: Method) => {
    // Simple efficiency metric: accuracy/cost ratio scaled to 0-100
    return (method.accuracy / method.cost) * 10;
  };

  const getBarHeight = (method: Method) => {
    switch (viewMode) {
      case 'accuracy':
        return method.accuracy;
      case 'cost':
        return method.cost;
      case 'efficiency':
        return getEfficiencyScore(method);
      default:
        return method.accuracy;
    }
  };

  const getYAxisLabel = () => {
    switch (viewMode) {
      case 'accuracy':
        return 'Accuracy (%)';
      case 'cost':
        return 'Computational Cost (%)';
      case 'efficiency':
        return 'Efficiency Score';
      default:
        return 'Value';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-sans font-semibold text-foreground">
          {title || 'Computational Method Comparison'}
        </h3>
        
        <div className="flex gap-2">
          {['accuracy', 'cost', 'efficiency'].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode as 'accuracy' | 'cost' | 'efficiency')}
              className={`px-3 py-1 rounded text-sm capitalize transition-colors ${
                viewMode === mode
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted border border-border hover:bg-card'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="relative mb-6">
        <svg viewBox="0 0 600 300" className="w-full h-64 border border-border rounded bg-background">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(percentage => {
            const y = 250 - (percentage * 2);
            return (
              <g key={percentage}>
                <line x1="60" y1={y} x2="540" y2={y} stroke="#333" strokeWidth="0.5" opacity="0.3" />
                <text x="50" y={y + 3} textAnchor="end" fill="#666" fontSize="10">
                  {percentage}
                </text>
              </g>
            );
          })}
          
          {/* Bars */}
          {methods.map((method, index) => {
            const barWidth = 80;
            const barSpacing = 120;
            const x = 80 + (index * barSpacing);
            const barHeight = getBarHeight(method) * 2; // Scale to fit chart
            const y = 250 - barHeight;
            const isSelected = selectedMethod === method.name;
            
            return (
              <g key={method.name}>
                {/* Bar */}
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={method.color}
                  opacity={isSelected ? 0.8 : 0.6}
                  stroke={isSelected ? '#fff' : 'none'}
                  strokeWidth={isSelected ? 2 : 0}
                  className="cursor-pointer transition-all duration-200 hover:opacity-80"
                  onClick={() => setSelectedMethod(selectedMethod === method.name ? null : method.name)}
                />
                
                {/* Value label on bar */}
                <text
                  x={x + barWidth / 2}
                  y={y - 5}
                  textAnchor="middle"
                  fill="#666"
                  fontSize="10"
                  className="font-semibold"
                >
                  {getBarHeight(method).toFixed(1)}
                </text>
                
                {/* Method name */}
                <text
                  x={x + barWidth / 2}
                  y={270}
                  textAnchor="middle"
                  fill="#666"
                  fontSize="11"
                  className="font-semibold"
                >
                  {method.name}
                </text>
                
                {/* Detailed info on hover/selection */}
                {isSelected && (
                  <g>
                    <rect
                      x={x - 20}
                      y={y - 60}
                      width={barWidth + 40}
                      height="50"
                      fill="rgba(0,0,0,0.8)"
                      rx="4"
                    />
                    <text x={x + barWidth / 2} y={y - 45} textAnchor="middle" fill="white" fontSize="9">
                      Accuracy: {method.accuracy}%
                    </text>
                    <text x={x + barWidth / 2} y={y - 35} textAnchor="middle" fill="white" fontSize="9">
                      Cost: {method.cost}%
                    </text>
                    <text x={x + barWidth / 2} y={y - 25} textAnchor="middle" fill="white" fontSize="9">
                      Efficiency: {getEfficiencyScore(method).toFixed(1)}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
          
          {/* Axes */}
          <line x1="60" y1="250" x2="540" y2="250" stroke="#666" strokeWidth="1" />
          <line x1="60" y1="50" x2="60" y2="250" stroke="#666" strokeWidth="1" />
          
          {/* Y-axis label */}
          <text x="25" y="150" textAnchor="middle" fill="#666" fontSize="11" transform="rotate(-90 25 150)">
            {getYAxisLabel()}
          </text>
        </svg>
      </div>

      {/* Method details table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 font-sans font-semibold text-foreground">Method</th>
              <th className="text-right py-2 font-sans font-semibold text-foreground">Accuracy</th>
              <th className="text-right py-2 font-sans font-semibold text-foreground">Cost</th>
              <th className="text-right py-2 font-sans font-semibold text-foreground">Efficiency</th>
              <th className="text-center py-2 font-sans font-semibold text-foreground">Best For</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((method) => (
              <tr 
                key={method.name}
                className={`border-b border-border/50 hover:bg-background/50 cursor-pointer transition-colors ${
                  selectedMethod === method.name ? 'bg-primary/5' : ''
                }`}
                onClick={() => setSelectedMethod(selectedMethod === method.name ? null : method.name)}
              >
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: method.color }}
                    />
                    <span className="font-medium">{method.name}</span>
                  </div>
                </td>
                <td className="text-right py-3 text-muted">{method.accuracy}%</td>
                <td className="text-right py-3 text-muted">{method.cost}%</td>
                <td className="text-right py-3 text-muted">{getEfficiencyScore(method).toFixed(1)}</td>
                <td className="text-center py-3 text-muted">
                  {getBestUseCase(method)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommendations */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <h4 className="font-sans font-semibold text-foreground mb-2">Recommendations</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted">
              <strong>For routine calculations:</strong> Start with DFT methods for good balance 
              of accuracy and computational efficiency.
            </p>
          </div>
          <div>
            <p className="text-muted">
              <strong>For high accuracy:</strong> Use post-HF methods like CCSD(T) for benchmark 
              quality results when computational cost is acceptable.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive legend */}
      <div className="flex justify-center gap-4 mt-4">
        <div className="text-xs text-muted">
          Click bars or table rows for details
        </div>
      </div>
    </div>
  );
}

function getBestUseCase(method: Method): string {
  const { name, accuracy, cost } = method;
  
  if (accuracy > 95 && cost > 90) return 'Benchmarks';
  if (accuracy > 85 && cost < 50) return 'Routine';
  if (accuracy < 70 && cost < 30) return 'Screening';
  if (name.includes('DFT')) return 'General';
  
  return 'Specialized';
}