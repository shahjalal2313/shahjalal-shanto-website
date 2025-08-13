import type { MDXComponents } from 'mdx/types'
import { 
  PESVisualization, 
  InteractiveChart, 
  MathEquation, 
  ReactionAnimation, 
  EnergyDiagram 
} from '@/components/blog'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom interactive components
    PESVisualization,
    InteractiveChart,
    MathEquation,
    ReactionAnimation,
    EnergyDiagram,

    // Enhanced HTML elements with consistent styling
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8 mt-12 first:mt-0 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6 mt-10 leading-tight border-b border-border pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-sans font-semibold text-foreground mb-4 mt-8 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3 mt-6">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-sans font-semibold text-foreground mb-2 mt-4">
        {children}
      </h5>
    ),
    
    p: ({ children }) => (
      <p className="font-serif text-lg text-muted leading-relaxed mb-6">
        {children}
      </p>
    ),
    
    ul: ({ children }) => (
      <ul className="font-serif text-lg text-muted leading-relaxed mb-6 list-disc list-inside space-y-2 ml-4">
        {children}
      </ul>
    ),
    
    ol: ({ children }) => (
      <ol className="font-serif text-lg text-muted leading-relaxed mb-6 list-decimal list-inside space-y-2 ml-4">
        {children}
      </ol>
    ),
    
    li: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
    
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 my-8 bg-primary/5 py-4 pr-4 rounded-r-lg">
        <div className="font-serif text-lg text-muted italic">
          {children}
        </div>
      </blockquote>
    ),
    
    code: ({ children }) => (
      <code className="bg-card px-2 py-1 rounded font-mono text-sm border border-border text-primary">
        {children}
      </code>
    ),
    
    pre: ({ children }) => (
      <div className="bg-gray-900 border border-border rounded-lg p-6 my-8 overflow-x-auto">
        <pre className="font-mono text-sm text-green-400">{children}</pre>
      </div>
    ),
    
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors font-medium"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    
    img: ({ src, alt }) => (
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
    
    table: ({ children }) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse border border-border rounded-lg">
          {children}
        </table>
      </div>
    ),
    
    th: ({ children }) => (
      <th className="border border-border bg-card px-4 py-3 text-left font-sans font-semibold text-foreground">
        {children}
      </th>
    ),
    
    td: ({ children }) => (
      <td className="border border-border px-4 py-3 font-serif text-muted">
        {children}
      </td>
    ),

    hr: () => (
      <hr className="my-12 border-t border-border" />
    ),

    // Strong emphasis
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),

    // Emphasis
    em: ({ children }) => (
      <em className="italic text-foreground">
        {children}
      </em>
    ),

    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ color: 'red' }}>{children}</h1>,
    ...components,
  }
}