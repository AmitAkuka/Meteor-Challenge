import { NASA_METEORS_URL } from "@/constants";
import { MeteorData } from "./../types/index";
import { MeteorApiData } from "@/types";

const queryData = async () => {
  try {
    const res = await fetch(NASA_METEORS_URL);
    const data = await res.json();
    const normalizedData = _getNormalizedData(data);
    return normalizedData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const _getNormalizedData = (data: MeteorApiData[]) => {
  return data.reduce((acc, d) => {
    const { id, geolocation, mass, name, year } = d;
    if (!year || !mass) return acc;
    const normalizedYear = new Date(year).getFullYear();
    const meteor = {
      id,
      year: normalizedYear,
      mass: parseInt(mass),
      name,
      coords: geolocation?.coordinates,
    };
    if (!acc.hasOwnProperty(normalizedYear)) {
      acc[normalizedYear] = [meteor];
    } else {
      acc[normalizedYear].push(meteor);
    }
    return acc;
  }, {} as MeteorData);
};

export const meteorService = {
  queryData,
};
