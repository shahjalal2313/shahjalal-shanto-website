import type { MDXComponents } from 'mdx/types';
import { 
  PESVisualization, 
  InteractiveChart, 
  MathEquation, 
  MathBlock, 
  ReactionAnimation, 
  EnergyDiagram 
} from '@/components/blog';

// Custom MDX components with enhanced styling
const customComponents = {
  // Interactive blog components
  PESVisualization,
  InteractiveChart,
  MathEquation,
  MathBlock,
  ReactionAnimation,
  EnergyDiagram,

  // Enhanced HTML elements
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8 mt-12 first:mt-0 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6 mt-10 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl md:text-3xl font-sans font-semibold text-foreground mb-4 mt-8 leading-tight">
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3 mt-6">
      {children}
    </h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="text-lg font-sans font-semibold text-foreground mb-2 mt-4">
      {children}
    </h5>
  ),
  
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="font-serif text-lg text-muted leading-relaxed mb-6">
      {children}
    </p>
  ),
  
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="font-serif text-lg text-muted leading-relaxed mb-6 list-disc list-inside space-y-2 ml-4">
      {children}
    </ul>
  ),
  
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="font-serif text-lg text-muted leading-relaxed mb-6 list-decimal list-inside space-y-2 ml-4">
      {children}
    </ol>
  ),
  
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
  
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-6 my-8 bg-primary/5 py-4 pr-4 rounded-r-lg">
      <div className="font-serif text-lg text-muted italic">
        {children}
      </div>
    </blockquote>
  ),
  
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-card px-2 py-1 rounded font-mono text-sm border border-border">
      {children}
    </code>
  ),
  
  pre: ({ children }: { children: React.ReactNode }) => (
    <div className="bg-card border border-border rounded-lg p-6 my-8 overflow-x-auto">
      <pre className="font-mono text-sm text-foreground">{children}</pre>
    </div>
  ),
  
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <div className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-lg border border-border shadow-lg"
      />
      {alt && (
        <div className="text-center mt-2 text-sm text-muted font-sans">
          {alt}
        </div>
      )}
    </div>
  ),
  
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-border rounded-lg">
        {children}
      </table>
    </div>
  ),
  
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-border bg-card px-4 py-3 text-left font-sans font-semibold text-foreground">
      {children}
    </th>
  ),
  
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-border px-4 py-3 font-serif text-muted">
      {children}
    </td>
  ),

  // Special content blocks
  hr: () => (
    <hr className="my-12 border-t border-border" />
  )
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  };
}