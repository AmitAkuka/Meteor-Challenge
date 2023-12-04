import { AppHeader } from "@/cmps/AppHeader";
import { AppLoader } from "@/cmps/AppLoader";
import { AutoComplete } from "@/cmps/AutoComplete";
import { MeteorDisplay } from "@/cmps/MeteorDisplay";
import { useMeteorData } from "@/hooks/useMeteorData";
import { toastMsg } from "@/utils";
import { useState, useMemo, useCallback } from "react";

export const Home = () => {
  const { meteorData } = useMeteorData();
  const [yearFilter, setYearFilter] = useState("");

  const meteorsFilteredByYear = useMemo(() => {
    if (!meteorData || !yearFilter.length) return [];
    const filteredMeteors = meteorData[+yearFilter];
    return filteredMeteors ? filteredMeteors : [];
  }, [yearFilter]);

  const findClosetMatchedMeteor = useCallback(
    (mass: number) => {
      if (!meteorData) return;
      const years = Object.keys(meteorData);
      const matchedYear = years.find((y: string) => {
        for (let meteor of meteorData[+y]) {
          if (meteor.mass >= mass) return y;
        }
      });
      if (!matchedYear) return toastMsg("No matched meteor found!", true);

      toastMsg(`Found matched meteor in year ${matchedYear}`);
      setYearFilter(matchedYear);
    },
    [meteorData]
  );

  return (
    <section className="main-home-container home-layout">
      {!meteorData && <AppLoader />}
      {meteorData && (
        <>
          <AppHeader />
          <AutoComplete
            yearFilter={yearFilter}
            setYearFilter={setYearFilter}
            options={Object.keys(meteorData)}
          />
          {!!meteorsFilteredByYear.length && (
            <MeteorDisplay
              meteors={meteorsFilteredByYear}
              findClosetMatchedMeteor={findClosetMatchedMeteor}
            />
          )}
        </>
      )}
    </section>
  );
};
