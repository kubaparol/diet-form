import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import StyledAddAnswerField from "./AddAnswerField.styled";

import Row from "../Row";
import Label from "../Label";
import Field from "../Field";

import { useChangeHandler } from "../../hooks";

const AddAnswerField = (props) => {
  const {
    value: answer,
    onChange: setAnswer,
    clear: clearAnswer,
  } = useChangeHandler();
  const [items, setItems] = useState(props.value || []);

  useEffect(() => {
    props.getItems(items);
  });

  const clickHandler = () => {
    if (answer !== "") {
      setItems([...items, answer]);
      clearAnswer();
    }
  };

  const deleteAnswer = (answerIndex) => {
    const tasksWithoutClicked = items.filter(
      (item, index) => index !== answerIndex
    );
    setItems([...tasksWithoutClicked]);
  };

  return (
    <StyledAddAnswerField>
      <header>
        <Label fieldName={props.fieldName}>{props.title}</Label>
        <div>
          <Field name={props.fieldName} value={answer} onChange={setAnswer} />
          <p onClick={clickHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </p>
        </div>
      </header>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Row type="answer">
                <p onClick={() => deleteAnswer(index)}>
                  <FontAwesomeIcon icon={faXmark} />
                </p>
                {item}
              </Row>
            </li>
          );
        })}
      </ul>
    </StyledAddAnswerField>
  );
};

export default AddAnswerField;
