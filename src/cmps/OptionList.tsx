import { Dispatch, SetStateAction } from "react";
import { OptionPreview } from "./OptionPreview";

type Props = {
  autoCompleteOpts: string[];
  setYearInput: Dispatch<SetStateAction<string>>;
};

export const OptionList = ({ autoCompleteOpts, setYearInput }: Props) => {
  return (
    <div className="options-list-main-container">
      <div className="options-container">
        {autoCompleteOpts.map((option) => (
          <OptionPreview
            key={option}
            option={option}
            setYearInput={setYearInput}
          />
        ))}
      </div>
    </div>
  );
};
