import styled from 'styled-components';

export const FormControl = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.375rem;
  border: 1px solid ${(x) => x.theme.colors.gray[600]};
`;
