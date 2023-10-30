import styled from 'styled-components';

export const Subtitle = styled.h3`
  margin-bottom: ${(x) => x.theme.size.md};
  color: ${(props) => props.theme.colors.gray[400]};
  ${(props) => props.theme.fonts.size.sm};
  font-weight: normal;
`;
