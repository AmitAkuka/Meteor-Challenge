import { Dispatch, SetStateAction } from "react";

type Props = {
  option: string;
  setYearInput: Dispatch<SetStateAction<string>>;
};

export const OptionPreview = ({ option, setYearInput }: Props) => {
  return (
    <label
      htmlFor="auto-cmp-input"
      onClick={() => setYearInput(option)}
    >
      {option}
    </label>
  );
};
