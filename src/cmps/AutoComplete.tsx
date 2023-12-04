import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { OptionList } from "./OptionList";

type Props = {
  yearFilter: string;
  setYearFilter: Dispatch<SetStateAction<string>>;
  options: any[];
};
export const AutoComplete = ({ yearFilter, setYearFilter, options }: Props) => {
  const [yearInput, setYearInput] = useState("");

  useEffect(() => {
    if (yearFilter === yearInput) return;
    setYearInput(yearFilter);
  }, [yearFilter]);

  const autoCompleteOpts: string[] = useMemo(() => {
    if (!yearInput.length) return [];
    return options.filter((o) => o.startsWith(yearInput));
  }, [yearInput]);

  useEffect(() => {
    if (autoCompleteOpts.length === 1) setYearFilter(yearInput);
  }, [autoCompleteOpts, yearInput]);

  return (
    <section className="auto-complete-main-container">
      <input
        id="auto-cmp-input"
        type="string"
        placeholder="Search by year..."
        onChange={({ target }) => setYearInput(target.value)}
        value={yearInput}
      />
      {!!autoCompleteOpts.length && autoCompleteOpts[0] !== yearFilter && (
        <OptionList
          autoCompleteOpts={autoCompleteOpts}
          setYearInput={setYearInput}
        />
      )}
    </section>
  );
};
