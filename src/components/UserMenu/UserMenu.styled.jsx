import styled from 'styled-components';

export const Wripper = styled.div`
  display: flex;
`;

export const Greeting = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const LogOutBtn = styled.button`
  margin-left: 10px;
  padding: 3px 3px;
  background-color: ${p => p.theme.colors.accent};
  border: none;
  color: ${p => p.theme.colors.white};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.xs};
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #666666;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
