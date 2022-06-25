import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const IMG = ({ size, src }) => {
  return <Wrapper size={size} src={src} />;
};

export default IMG;
