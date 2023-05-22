// import axios from 'axios';
import { Province } from 'model';
import { useEffect, useState } from 'react';
import httpClient from 'utils/httpClient';

export interface ProvincesListProps {
  provinceId: string;
  slug: string;
  nameWithType: string;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
  alias: [];
}

function useProvinces() {
  const [provincesList, setProvincesList] = useState<Province[]>([]);

  useEffect(() => {
    async function getProvinces() {
      const provincesData = await httpClient<Province[]>(`/location/provinces/all`, {
        method: 'GET',
      });
      setProvincesList(provincesData);
    }
    getProvinces();
  }, []);

  return {
    provincesList,
  };
}

export default useProvinces;
