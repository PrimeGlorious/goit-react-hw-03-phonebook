import styled from "styled-components";

export const Form = styled.form`
  border: 2px solid black;
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 300px;
  padding: 10px;
`

export const FormInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 3px;
`

export const SubmitBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #FFFFFF;
  border: 1px solid rgb(209,213,219);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
  background-color: rgb(249,250,251);
}

  &:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  }
`
