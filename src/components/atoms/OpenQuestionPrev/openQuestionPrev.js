import React from 'react';
import styled from 'styled-components';
import Textarea from 'components/atoms/SurveyTextarea/textarea.js';

const Wrapper = styled.textarea`
  width: ;
`;

const OpenQuestionPrev = () => {
  return (
    <Textarea
      width="300px"
      height="25px"
      placeholder="Odpowiedź otwarta"
      readonlyTrue="true"
    />
  );
};

export default OpenQuestionPrev;
