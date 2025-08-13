'use client';

import { useMemo } from 'react';

interface MDXContentProps {
  content: string;
  isInteractive?: boolean;
}

export default function MDXContent({ content, isInteractive }: MDXContentProps) {
  if (isInteractive) {
    // For interactive content, we need to render components
    return (
      <div className="mdx-content">
        <InteractiveMDXRenderer content={content} />
      </div>
    );
  }

  // For non-interactive content, render as HTML
  return (
    <div 
      className="prose-content max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

// Component to render MDX with interactive components
function InteractiveMDXRenderer({ content }: { content: string }) {
  // Parse the content and render components
  // This is a simplified implementation
  
  const renderContent = useMemo(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${content}</div>`, 'text/html');
    const contentDiv = doc.querySelector('div');
    
    if (!contentDiv) return content;
    
    // Find component placeholders and render them
    const componentPlaceholders = contentDiv.querySelectorAll('[data-component]');
    
    componentPlaceholders.forEach((placeholder) => {
      const componentName = placeholder.getAttribute('data-component');
      
      const contentStr = placeholder.getAttribute('data-content');
      
      
      
      // Create component based on type
      let componentHTML = '';
      
      switch (componentName) {
        case 'PESVisualization':
          componentHTML = '<div class="bg-card border border-border rounded-lg p-6 my-8"><p class="text-center text-muted">🧪 Interactive PES Visualization Component</p><p class="text-xs text-center text-muted mt-2">Component will render when MDX compilation is complete</p></div>';
          break;
        case 'InteractiveChart':
          componentHTML = '<div class="bg-card border border-border rounded-lg p-6 my-8"><p class="text-center text-muted">📊 Interactive Chart Component</p><p class="text-xs text-center text-muted mt-2">Component will render when MDX compilation is complete</p></div>';
          break;
        case 'MathEquation':
          componentHTML = `<div class="bg-card border border-border rounded-lg p-6 my-6"><div class="text-center"><div class="text-xl font-mono text-foreground bg-background p-4 rounded border border-border inline-block">${contentStr || 'Math Equation'}</div></div></div>`;
          break;
        case 'ReactionAnimation':
          componentHTML = '<div class="bg-card border border-border rounded-lg p-6 my-8"><p class="text-center text-muted">⚗️ Reaction Animation Component</p><p class="text-xs text-center text-muted mt-2">Component will render when MDX compilation is complete</p></div>';
          break;
        case 'EnergyDiagram':
          componentHTML = '<div class="bg-card border border-border rounded-lg p-6 my-8"><p class="text-center text-muted">📈 Energy Diagram Component</p><p class="text-xs text-center text-muted mt-2">Component will render when MDX compilation is complete</p></div>';
          break;
        default:
          componentHTML = `<div class="bg-card border border-border rounded-lg p-6 my-8"><p class="text-center text-muted">🔧 ${componentName} Component</p></div>`;
      }
      
      placeholder.outerHTML = componentHTML;
    });
    
    return contentDiv.innerHTML;
  }, [content]);
  
  return (
    <div 
      className="prose-content max-w-none"
      dangerouslySetInnerHTML={{ __html: renderContent }}
    />
  );
}