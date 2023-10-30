import styled from 'styled-components';

export const BoxLine = styled.p`
  display: flex;
  flex-direction: row;

  ${(x) => x.theme.fonts.size.sm};

  :before,
  :after {
    content: '';
    flex: 1 1;
    border-bottom: 1px solid ${(x) => x.theme.colors.gray[200]};
    margin: auto;
  }
`;
