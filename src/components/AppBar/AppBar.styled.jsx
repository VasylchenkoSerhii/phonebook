import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${p => p.theme.colors.text};

  @media screen and (min-width: 1200px) {
    padding-top: 15px;
    padding-bottom: 20px;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
