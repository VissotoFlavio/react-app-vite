import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BoxLink = styled(Link)`
  width: auto;
  text-decoration: none;
  cursor: pointer;

  ${(x) => x.theme.fonts.size.sm}

  color: ${(x) => x.theme.colors.blue[500]};

  :hover {
    text-decoration: underline;
  }
`;
