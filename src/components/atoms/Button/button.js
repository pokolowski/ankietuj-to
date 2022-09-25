import react from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #067eed;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  font-size: ${(props) => props.fontSize} px;
  text-transform: uppercase;
  line-height: 20px;
  font-family: Alata;
  padding: 10px;
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'normal')};
`;

const Button = ({ text, alignSelf, fontSize = 16 }) => {
  return (
    <Btn alignSelf={alignSelf} fontSize={fontSize} type="submit">
      {text}
    </Btn>
  );
};
export default Button;
