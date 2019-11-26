import styled from "styled-components";

export const Input = styled.input`
  width: 250px;
  border-bottom: 1px solid #e4a27f;
  color: #e4a27f;
  outline: 0px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 0;
  margin-right: 3px;
  padding: 8px;
  font-size: 15px;
  margin-left: 40%;
  background-color: #f5f5f5;
  ::placeholder {
    color: #e4a27f;
  }
`;
export const Button = styled.button`
  background-color: darkred;
  color: white;
  padding: 5px;
  font-size: 13px;
  border: 1px solid darkred;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: darkred;
  }
`;
