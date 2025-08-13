'use client';

import { useEffect, useRef } from 'react';

interface MathEquationProps {
  children: string;
  inline?: boolean;
  label?: string;
}

export default function MathEquation({ children, inline = false, label }: MathEquationProps) {
  const equationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real implementation, you would use a library like KaTeX or MathJax
    // For now, we'll create a styled representation
    if (equationRef.current) {
      // This is a simplified version - in production, use proper math rendering
      equationRef.current.innerHTML = formatMathString(children);
    }
  }, [children]);

  const formatMathString = (math: string): string => {
    // Simple formatting for mathematical expressions
    // In production, replace with proper LaTeX/MathML rendering
    return math
      .replace(/\^([a-zA-Z0-9]+)/g, '<sup>$1</sup>')
      .replace(/_([a-zA-Z0-9]+)/g, '<sub>$1</sub>')
      .replace(/\\sum/g, '∑')
      .replace(/\\int/g, '∫')
      .replace(/\\partial/g, '∂')
      .replace(/\\nabla/g, '∇')
      .replace(/\\pi/g, 'π')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\gamma/g, 'γ')
      .replace(/\\delta/g, 'δ')
      .replace(/\\epsilon/g, 'ε')
      .replace(/\\theta/g, 'θ')
      .replace(/\\lambda/g, 'λ')
      .replace(/\\mu/g, 'μ')
      .replace(/\\sigma/g, 'σ')
      .replace(/\\omega/g, 'ω')
      .replace(/\\Psi/g, 'Ψ')
      .replace(/\\hbar/g, 'ℏ')
      .replace(/\\infty/g, '∞')
      .replace(/\\rightarrow/g, '→')
      .replace(/\\leftarrow/g, '←')
      .replace(/\\equiv/g, '≡')
      .replace(/\\approx/g, '≈')
      .replace(/\\leq/g, '≤')
      .replace(/\\geq/g, '≥')
      .replace(/\\neq/g, '≠')
      .replace(/\\pm/g, '±')
      .replace(/\\times/g, '×')
      .replace(/\\div/g, '÷');
  };

  if (inline) {
    return (
      <span 
        ref={equationRef}
        className="inline-block font-mono text-primary bg-primary/5 px-2 py-1 rounded border border-primary/20"
        style={{ fontFamily: 'KaTeX_Math, serif' }}
      />
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-6">
      <div className="text-center">
        <div 
          ref={equationRef}
          className="text-xl font-mono text-foreground bg-background p-4 rounded border border-border inline-block"
          style={{ 
            fontFamily: 'KaTeX_Math, serif',
            fontSize: '1.2em',
            lineHeight: '1.5'
          }}
        />
        {label && (
          <div className="mt-2 text-sm text-muted font-sans">
            {label}
          </div>
        )}
      </div>
      
      {/* Mathematical context or explanation could be added here */}
      <div className="mt-4 text-center">
        <button 
          className="text-xs text-primary hover:underline"
          onClick={() => {
            // Copy equation to clipboard (implementation needed)
            navigator.clipboard.writeText(children);
          }}
        >
          Copy LaTeX
        </button>
      </div>
    </div>
  );
}

// Alternative component for more complex equations with multiple lines
interface MathBlockProps {
  equations: Array<{
    equation: string;
    description?: string;
  }>;
  title?: string;
}

export function MathBlock({ equations, title }: MathBlockProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 my-8">
      {title && (
        <h3 className="text-lg font-sans font-semibold text-foreground mb-4">
          {title}
        </h3>
      )}
      
      <div className="space-y-4">
        {equations.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex-1">
              <MathEquation inline={false}>{item.equation}</MathEquation>
            </div>
            {item.description && (
              <div className="w-1/3 text-sm text-muted font-serif">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-xs text-muted">
          <strong>Note:</strong> These equations are formatted for readability. 
          For publication-quality mathematical typesetting, consider using dedicated LaTeX/MathJax rendering.
        </p>
      </div>
    </div>
  );
}