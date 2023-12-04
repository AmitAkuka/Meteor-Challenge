export type MeteorApiData = {
  id: string;
  geolocation: {
    type: string;
    coordinates: number[];
  };
  fall: string;
  mass: string;
  name: string;
  nametype: string;
  recclass: string;
  reclat: string;
  reclong: string;
  year: string;
};

export type MeteorData = {
  [year: number]: Meteor[];
};

export type Meteor = {
  id: string;
  mass: number;
  name: string;
  coords: number[];
  year: number;
};

export type ComponentRoute = {
  path: string;
  component: React.ComponentType;
};
