import React from 'react';
import styled from 'styled-components';
import Icon from 'assets/icons/share.svg';

const IMG = styled.div`
  width: 20px;
  height: 20px;
  //   position: absolute;
`;

const ShareIconOrange = ({ size }) => {
  return <IMG src={Icon} size={size} />;
};

export default ShareIconOrange;
