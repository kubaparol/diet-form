import { useState } from "react";

export const useChangeHandler = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    clear: () => setValue(""),
  };
};

export const useValidation = (defaultValue = "") => {
  const [alert, setAlert] = useState(defaultValue);

  return {
    alert,
    displayMessage: (message) => setAlert(message),
  };
};
