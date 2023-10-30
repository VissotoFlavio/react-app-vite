import styled from 'styled-components';

import { COLOR } from '../../../styles/theme/colors.theme';

export const BoxButton = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  justify-items: center;
  align-items: center;

  padding: ${(x) => x.theme.size['2xs']} ${(x) => x.theme.size.md};
  border-radius: ${(x) => x.theme.size['3xs']};

  //${(x) => x.theme.fonts.size.md}

  cursor: pointer;

  ${(x) =>
    x.color == COLOR.blue && {
      'background-color': x.theme.colors.blue[700],
      color: x.theme.colors.white,
      ':hover': {
        'background-color': x.theme.colors.blue[800],
      },
      ':active': {
        'background-color': x.theme.colors.blue[600],
      },
      ':disabled': {
        'background-color': x.theme.colors.blue[300],
      },
    }};

  :disabled {
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.span`
  ${(x) => x.theme.fonts.size.md}
`;

export const ContainerIcon = styled.div`
  margin-right: ${(props) => props.theme.size['2xs']};
`;

export const Icon = styled.svg`
  //height: ${(x) => x.theme.size['md']};
`;
