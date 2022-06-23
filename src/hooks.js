import { useState } from "react";

export const useChangeHandler = () => {
  const [value, setValue] = useState("");

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    clear: () => setValue(""),
  };
};
