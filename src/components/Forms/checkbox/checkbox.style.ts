import styled from 'styled-components';

import { device } from '../../../styles/theme/devices';

export const CheckboxContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: ${(x) => x.theme.size['2xs']};
  ${(x) => x.theme.fonts.size.md}
`;

export const BoxCheckbox = styled.input`
  height: 1rem;
  width: 1rem;
`;

export const Label = styled.label`
  @media only screen and (${device.mobileS}) {
    ${(x) => x.theme.fonts.size.sm}
  }
`;
