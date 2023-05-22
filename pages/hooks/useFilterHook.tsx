import { Province } from 'model';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import httpClient from 'utils/httpClient';

function useFilterHook() {
  const { pathname, query } = useRouter();

  const [provincesList, setProvincesList] = useState<Province[]>([]);

  const [province, setProvince] = useState<Province>();

  const getProvincesByName = async (alias: string) => {
    if (!!alias) {
      const responseProvine = await httpClient<Province[]>(
        `/location/provinces?alias=${encodeURIComponent(alias)}`,
      );
      setProvincesList(responseProvine);
    }
  };

  const isShowSearchbar = ['/marketplace', '/warehouse/[id]'].find((eF) => eF === pathname);

  useEffect(() => {
    if (query?.provinceId) {
      httpClient<Province>(`/location/province/${query.provinceId}`, {
        method: 'GET',
      }).then((result) => {
        setProvince(result);
      });
    }
  }, [query]);

  return {
    province,
    setProvince,
    provincesList,
    setProvincesList,
    getProvincesByName,
    isShowSearchbar,
  };
}

export default useFilterHook;
