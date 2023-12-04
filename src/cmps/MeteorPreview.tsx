import { Meteor } from "@/types";

type Props = {
  meteor: Meteor;
  getImageByMeteorMass: (mass: number) => string;
};

export const MeteorPreview = ({ meteor, getImageByMeteorMass }: Props) => {
  const { name, mass, coords, year } = meteor;
  return (
    <div className="meteor-preview-container">
      <img src={getImageByMeteorMass(mass)} alt="Image Alt" loading="eager" />
      <h2>{name}</h2>
      <h3>{year}</h3>
      <p>
        <span>Mass:</span> {mass}
      </p>
      <p>
        <span>Coordinates:</span> {coords.join(",")}
      </p>
    </div>
  );
};
