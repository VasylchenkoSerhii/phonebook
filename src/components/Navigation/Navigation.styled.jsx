import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};

  &.active {
    color: ${p => p.theme.colors.primary};
  }

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
