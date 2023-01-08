import styled from 'styled-components';

export const FilterStyle = styled.input`
  height: 30px;
  width: 200px;
  outline: none;
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    height: 40px;
    width: 400px;
  }
`;

export const SectionFilter = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 1200px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
