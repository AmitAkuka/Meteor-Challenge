import { Meteor } from "@/types";
import { MeteorPreview } from "./MeteorPreview";

type Props = {
  meteors: Meteor[];
};

export const MeteorList = ({ meteors }: Props) => {
  return (
    <div className="main-meteor-list-container">
      <p>Meteors found: {meteors.length}</p>
      <div className="meteor-list-container">
        {meteors.map((meteor) => (
          <MeteorPreview key={meteor.id} meteor={meteor} />
        ))}
      </div>
    </div>
  );
};
