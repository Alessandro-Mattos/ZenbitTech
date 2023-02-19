import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 0 auto;
  max-width: 800px;
  padding: 40px;
  background-color: #FFFFFF;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: #212B36;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #212B36;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 16px;
  border: 2px solid #DCDCDC;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #212B36;
  background-color: #FFFFFF;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    border: 2px solid #0070F3;
    box-shadow: 0 0 0 2px #E5F3FF;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 16px;
  border: 2px solid #E5E5E5;
  border-radius: 4px;
  resize: none;
  font-size: 16px;
  line-height: 24px;
  color: #212B36;
  background-color: #FFFFFF;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    border: 2px solid #0070F3;
    box-shadow: 0 0 0 2px #E5F3FF;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 16px 32px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  background-color:#FAD34F;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0070F3;
    ;
  }
`;
