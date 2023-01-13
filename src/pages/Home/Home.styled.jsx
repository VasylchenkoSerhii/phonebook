import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
