import styled from 'styled-components';

export const FormGroupContainer = styled.div`
  position: relative;
  margin-top: ${(x) => x.theme.size.md};
`;

export const FormGroupTitle = styled.label`
  ${(x) => x.theme.fonts.size.sm}
`;

export const MessageError = styled.span`
  display: inline-block;
  color: ${(x) => x.theme.colors.red[500]};
  ${(x) => x.theme.fonts.size.sm};
  padding-top: ${(x) => x.theme.size['4xs']};
  padding-left: ${(x) => x.theme.size['4xs']};
`;
