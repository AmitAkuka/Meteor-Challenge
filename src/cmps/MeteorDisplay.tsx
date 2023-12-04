import { Meteor } from "@/types";
import { MeteorList } from "./MeteorList";
import { useEffect, useMemo, useState } from "react";

type Props = {
  meteors: Meteor[];
  findClosetMatchedMeteor: (mass: number) => void;
};

export const MeteorDisplay = ({ meteors, findClosetMatchedMeteor }: Props) => {
  const [massFilter, setMassFilter] = useState("");

  const meteorsFilteredByMass: Meteor[] = useMemo(() => {
    if (!massFilter) return meteors;
    return meteors.filter((m) => m.mass >= +massFilter);
  }, [meteors, massFilter]);

  useEffect(() => {
    if (meteorsFilteredByMass.length) return;
    findClosetMatchedMeteor(+massFilter);
  }, [meteorsFilteredByMass]);

  return (
    <div className="meteor-display-container">
      <input
        type="string"
        placeholder="Search by mass..."
        onChange={({ target }) => setMassFilter(target.value)}
        value={massFilter}
      />
      <MeteorList meteors={meteorsFilteredByMass} />
    </div>
  );
};
