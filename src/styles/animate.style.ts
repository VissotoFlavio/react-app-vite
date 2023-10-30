import styled, { keyframes } from 'styled-components';

import { SizeType } from './theme/size.theme';

interface AnimateStyleProps {
  size: SizeType;
}

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const AnimateSpin = styled.div<AnimateStyleProps>`
  animation: ${spin} 1s linear infinite;
  width: ${(props) => props.theme.size[props.size]};
  height: ${(props) => props.theme.size[props.size]};
`;
