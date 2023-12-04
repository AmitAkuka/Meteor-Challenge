import { meteorService } from "@/services/meteor.service";
import { MeteorData } from "@/types";
import { useEffect, useState } from "react";

export const useMeteorData = () => {
  const [meteorData, setMeteorData] = useState<MeteorData | null>(null);

  useEffect(() => {
    const queryMeteorData = async () => {
      try {
        const data = await meteorService.queryData();
        setMeteorData(data);
      } catch (err) {
        console.error(err);
      }
    };
    queryMeteorData();
  }, []);

  return { meteorData };
};
