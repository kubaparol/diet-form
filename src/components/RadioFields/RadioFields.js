import React from "react";

import StyledRadioFields from "./RadioFields.styled";

import Label from "../Label";

const RadioFields = (props) => {
  return (
    <StyledRadioFields>
      <p>{props.title}</p>
      {props.options.map((option, index) => {
        return (
          <div key={index}>
            {option.name}
            <input
              type="radio"
              name={props.fieldName}
              id={`field-${props.fieldName}${index}`}
              value={option.value}
              onChange={option.onChange}
              checked={props.value === option.value ? true : false}
            />
            <Label
              fieldName={props.fieldName + index}
              onClick={option.onChange}
            />
          </div>
        );
      })}
    </StyledRadioFields>
  );
};

export default RadioFields;
