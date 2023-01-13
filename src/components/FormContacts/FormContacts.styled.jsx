import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const SectionForm = styled.section`
  padding-bottom: 20px;

  @media screen and (min-width: 1200px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 215px;
  justify-content: space-between;
  text-align: start;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 270px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const InputForm = styled(Field)`
  display: inline-block;
  width: 150px;
  height: 20px;
  outline: none;
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 25px;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 35px;
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: 20px;
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.error};

  @media screen and (min-width: 768px) {
    top: 28px;
  }

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.s};
    top: 37px;
  }
`;

export const FormBtn = styled.button`
  background-color: ${p => p.theme.colors.accent};
  border: none;
  color: ${p => p.theme.colors.white};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.s};
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #666666;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
