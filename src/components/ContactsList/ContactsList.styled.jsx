import styled from 'styled-components';

export const List = styled.ul`
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
`;

export const ListItem = styled.li`
  text-align: start;
  font-size: 20px;
  border-bottom: ${p => p.theme.borders.normal};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Number = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const RemoveContactBtn = styled.button`
  margin-left: 5px;
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
