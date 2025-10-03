import type { MouseEventHandler, ReactNode, CSSProperties } from 'react';
import type { ElementType } from 'react';

/**
 * Defines the props for the NeonButton component.
 */
export type NeonButtonType = {
  /** The content to be displayed inside the button (e.g., text, icon). */
  children: ReactNode;
  
  /** * Determines the button style. True for primary (solid background), 
   * false for secondary (outlined/border). Defaults to true.
   */
  primary?: boolean;
  
  /** Optional custom CSS classes to be applied to the button element. */
  className?: string;
  
  /** Optional inline styles to merge with the button's default styles. */
  style?: CSSProperties;
  
  /** Optional click handler function. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
};




/**
 * Defines the props for the FeatureCard component.
 */
export type FeatureCardProps = {
  /** * The icon component to display. It should be a React component 
   * (e.g., an icon from lucide-react or react-icons).
   * Note: It is destructured and renamed as 'Icon' in the component.
   */
  icon: ElementType;
  
  /** The main title for the feature card. */
  title: string;
  
  /** The detailed description of the feature. */
  description: string | ReactNode;
  
  /** The delay (in seconds) for the CSS animation applied to the card. */
  delay: number;
};