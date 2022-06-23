import React from "react";

import StyledRadioFields from "./RadioFields.styled";

import Row from "../Row";
import Label from "../Label";
import Field from "../Field";

const RadioFields = (props) => {
  return (
    <StyledRadioFields>
      <Label fieldName={props.fieldName}>{props.title}</Label>
      {props.options.map((option, index) => {
        return (
          <Row key={index} type="radio">
            {option.name}
            <Field
              type="radio"
              name={props.fieldName}
              value={option.value}
              onChange={option.onChange}
            />
          </Row>
        );
      })}
    </StyledRadioFields>
  );
};

export default RadioFields;
