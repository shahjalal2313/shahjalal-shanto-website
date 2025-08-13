// Blog component exports for MDX integration
export { default as PESVisualization } from './PESVisualization';
export { default as InteractiveChart } from './InteractiveChart';
export { default as MathEquation, MathBlock } from './MathEquation';
export { default as ReactionAnimation } from './ReactionAnimation';
export { default as EnergyDiagram } from './EnergyDiagram';

// Type definitions for component props
export type { default as PESVisualizationProps } from './PESVisualization';
export type { default as InteractiveChartProps } from './InteractiveChart';
export type { default as ReactionAnimationProps } from './ReactionAnimation';

// Component categories for easy reference
export const BLOG_COMPONENTS = {
  visualization: ['PESVisualization', 'InteractiveChart', 'EnergyDiagram'],
  animation: ['ReactionAnimation'],
  mathematics: ['MathEquation', 'MathBlock'],
  interactive: ['InteractiveChart', 'ReactionAnimation', 'PESVisualization']
} as const;