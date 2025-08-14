'use client';

import { useMemo } from 'react';
// Interactive components will be handled through HTML replacements
// import { 
//   PESVisualization, 
//   InteractiveChart, 
//   MathEquation, 
//   ReactionAnimation, 
//   EnergyDiagram 
// } from '@/components/blog';

interface MDXRendererProps {
  content: string;
}

export default function MDXRenderer({ content }: MDXRendererProps) {
  const processedContent = useMemo(() => {
    let processed = content;
    
    // Replace MDX components with placeholders that include proper styling
    processed = processed
      .replace(/<PESVisualization([^>]*?)\/?>/gi, () => {
        return `
          <div class="bg-card border border-border rounded-lg p-4 sm:p-6 my-6 sm:my-8">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3 sm:gap-0">
              <h3 class="text-lg sm:text-xl font-sans font-semibold text-foreground">Interactive PES Visualization</h3>
              <button class="px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base">Start Animation</button>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-full h-48 sm:h-64 bg-gradient-to-r from-blue-500 via-green-400 to-red-500 rounded-lg border border-border flex items-center justify-center">
                <span class="text-white font-bold text-sm sm:text-lg text-center px-2">🧪 Interactive 3D PES Visualization</span>
              </div>
              <div class="mt-4 text-center">
                <p class="text-xs sm:text-sm text-muted font-serif px-2">Interactive 3D visualization showing energy minima (green), transition states (yellow), and energy landscape.</p>
                <div class="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mt-3">
                  <div class="flex items-center gap-1 sm:gap-2">
                    <div class="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
                    <span class="text-xs text-muted">Minima</span>
                  </div>
                  <div class="flex items-center gap-1 sm:gap-2">
                    <div class="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full"></div>
                    <span class="text-xs text-muted">Transition State</span>
                  </div>
                  <div class="flex items-center gap-1 sm:gap-2">
                    <div class="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
                    <span class="text-xs text-muted">Energy Scale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      
      .replace(/<InteractiveChart([^>]*?)\/?>/gi, (match) => {
        const titleMatch = match.match(/title="([^"]+)"/);
        const title = titleMatch ? titleMatch[1] : 'Interactive Chart';
        
        return `
          <div class="bg-card border border-border rounded-lg p-4 sm:p-6 my-6 sm:my-8">
            <h3 class="text-base sm:text-lg font-sans font-semibold text-foreground mb-4">${title}</h3>
            <div class="w-full h-48 sm:h-64 bg-background border border-border rounded flex items-center justify-center">
              <div class="text-center">
                <div class="text-4xl mb-2">📊</div>
                <p class="text-muted">Interactive Chart Component</p>
                <p class="text-sm text-muted mt-1">Click and interact with data points</p>
              </div>
            </div>
          </div>
        `;
      })
      
      .replace(/<MathEquation>([\s\S]*?)<\/MathEquation>/g, (_, equation) => {
        return `
          <div class="bg-card border border-border rounded-lg p-4 sm:p-6 my-4 sm:my-6">
            <div class="text-center">
              <div class="text-lg sm:text-xl font-mono text-foreground bg-background p-3 sm:p-4 rounded border border-border inline-block overflow-x-auto max-w-full" style="font-family: 'Times New Roman', serif; font-size: 1em; sm:font-size: 1.2em; line-height: 1.5;">
                ${equation.replace(/\\\\([a-zA-Z]+)/g, (_: string, symbol: string) => {
                  const symbols: Record<string, string> = {
                    'Psi': 'Ψ', 'psi': 'ψ', 'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ',
                    'epsilon': 'ε', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ', 'pi': 'π', 'sigma': 'σ',
                    'omega': 'ω', 'hbar': 'ℏ', 'nabla': '∇', 'sum': '∑', 'int': '∫', 'partial': '∂'
                  };
                  return symbols[symbol] || symbol;
                })}
              </div>
            </div>
          </div>
        `;
      })
      
      .replace(/<ReactionAnimation([^>]*?)\/?>/gi, () => {
        return `
          <div class="bg-card border border-border rounded-lg p-6 my-8">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-lg font-sans font-semibold text-foreground">SN2 Reaction Animation</h3>
              <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">▶ Animate</button>
            </div>
            <div class="text-center mb-6 p-4 bg-background rounded-lg border border-border">
              <div class="text-lg font-mono">OH⁻ + CH₃Cl → [HO···CH₃···Cl]⁻ → CH₃OH + Cl⁻</div>
            </div>
            <div class="w-full h-48 bg-background border border-border rounded flex items-center justify-center">
              <div class="text-center">
                <div class="text-4xl mb-2">⚗️</div>
                <p class="text-muted">Animated Reaction Pathway</p>
                <p class="text-sm text-muted mt-1">Energy profile with molecular structures</p>
              </div>
            </div>
          </div>
        `;
      })
      
      .replace(/<EnergyDiagram([^>]*?)\/?>/gi, () => {
        return `
          <div class="bg-card border border-border rounded-lg p-6 my-8">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-lg font-sans font-semibold text-foreground">Computational Method Comparison</h3>
              <div class="flex gap-2">
                <button class="px-3 py-1 rounded text-sm bg-primary text-primary-foreground">Accuracy</button>
                <button class="px-3 py-1 rounded text-sm bg-background text-muted border border-border">Cost</button>
                <button class="px-3 py-1 rounded text-sm bg-background text-muted border border-border">Efficiency</button>
              </div>
            </div>
            <div class="w-full h-64 bg-background border border-border rounded flex items-center justify-center">
              <div class="text-center">
                <div class="text-4xl mb-2">📈</div>
                <p class="text-muted">Interactive Method Comparison</p>
                <p class="text-sm text-muted mt-1">Compare HF, DFT, MP2, CCSD(T) methods</p>
              </div>
            </div>
          </div>
        `;
      });
    
    // Process markdown
    processed = processed
      // Headers with proper styling
      .replace(/^# (.+)$/gm, '<h1 class="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8 mt-12 first:mt-0 leading-tight">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6 mt-10 leading-tight border-b border-border pb-2">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-2xl md:text-3xl font-sans font-semibold text-foreground mb-4 mt-8 leading-tight">$1</h3>')
      .replace(/^#### (.+)$/gm, '<h4 class="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3 mt-6">$1</h4>')
      .replace(/^##### (.+)$/gm, '<h5 class="text-lg font-sans font-semibold text-foreground mb-2 mt-4">$1</h5>')
      
      // Code blocks with syntax highlighting - improved contrast
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<div class="bg-card border border-border rounded-lg p-3 sm:p-6 my-6 sm:my-8 overflow-x-auto -mx-2 sm:mx-0"><pre class="font-mono text-xs sm:text-sm text-foreground leading-relaxed whitespace-pre-wrap bg-background p-4 rounded">$2</pre></div>')
      .replace(/`([^`]+)`/g, '<code class="bg-muted/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono text-xs sm:text-sm border border-border text-foreground">$1</code>')
      
      // Links - improved visibility
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline underline-offset-2 transition-colors font-medium" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Bold and italic - better contrast
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="italic text-foreground">$1</em>')
      
      // Handle paragraphs properly - improved alignment and contrast
      .split('\n\n')
      .map(block => {
        const trimmed = block.trim();
        if (!trimmed) return '';
        
        // Skip if already processed (starts with HTML tag)
        if (trimmed.startsWith('<')) return block;
        
        // Skip if it's a header, list, or special content
        if (trimmed.startsWith('#') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
          return block;
        }
        
        // Wrap in paragraph with better styling
        return `<p class="font-serif text-base sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">${trimmed}</p>`;
      })
      .join('\n\n')
      
      // Lists - improved contrast
      .replace(/^- (.+)$/gm, '<li class="mb-2 text-foreground">$1</li>');

    // Wrap consecutive list items - improved contrast and alignment
    processed = processed.replace(/(<li[^>]*>[\s\S]*?<\/li>\s*)+/g, (match) => {
      return `<ul class="font-serif text-lg text-foreground leading-relaxed mb-6 list-disc list-inside space-y-2 ml-4">${match}</ul>`;
    });
    
    return processed;
  }, [content]);
  
  return (
    <div 
      className="prose-content max-w-none"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}