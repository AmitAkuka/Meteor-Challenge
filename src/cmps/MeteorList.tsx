import { Meteor } from "@/types";
import { MeteorPreview } from "./MeteorPreview";
import smallMeteorGif from "../assets/img/meteor1.gif";
import mediumMeteorGif from "../assets/img/meteor2.gif";
import largeMeteorGif from "../assets/img/meteor3.gif";

type Props = {
  meteors: Meteor[];
};

export const MeteorList = ({ meteors }: Props) => {

  const getImageByMeteorMass = (mass: number) => {
    let img = null;
    if (mass >= 50000) {
      img = largeMeteorGif;
    } else if (mass >= 10000) {
      img = mediumMeteorGif;
    } else {
      img = smallMeteorGif;
    }
    return img;
  };
  return (
    <div className="main-meteor-list-container">
      <p>Meteors found: {meteors.length}</p>
      <div className="meteor-list-container">
        {meteors.map((meteor) => (
          <MeteorPreview key={meteor.id} meteor={meteor} getImageByMeteorMass={getImageByMeteorMass} />
        ))}
      </div>
    </div>
  );
};
