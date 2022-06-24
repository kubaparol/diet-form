import { useState } from "react";

export const useChangeHandler = (defaultState = "") => {
  const [value, setValue] = useState(defaultState);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    clear: () => setValue(""),
  };
};
