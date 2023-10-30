import { ObjectValues } from '../../shared/object-values';

export const sizeName = {
  '3xs': '3xs',
  '2xs': '2xs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
} as const;

export const size = {
  '4xs': '0.15rem',
  '3xs': '0.25rem',
  '2xs': '0.5rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.75rem',
  '4xl': '2rem',
} as const;

export type SizeType = ObjectValues<typeof sizeName>;
