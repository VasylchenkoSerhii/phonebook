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
  padding-bottom: 20px;
`;
