import styled from 'styled-components';

export const ContactCard = styled.li`
border: 1px solid black;
text-align: center;
align-items: center;
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 30px;
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
  background-color: rgb(249,250,251);
  }

  &:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`;
