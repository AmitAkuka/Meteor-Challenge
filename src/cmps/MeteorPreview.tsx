import { Meteor } from "@/types";
import meteorGif from "../assets/img/meteor.gif";

type Props = {
  meteor: Meteor;
};

export const MeteorPreview = ({ meteor }: Props) => {
  const { name, mass, coords, year } = meteor;
  return (
    <div className="meteor-preview-container">
      <img src={meteorGif} alt="Image Alt" loading="eager" />
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
