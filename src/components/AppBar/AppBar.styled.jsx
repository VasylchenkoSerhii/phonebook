import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 1200px) {
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
