import { useCallback, useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setMetadata, setMetadataLoading } from 'redux/reducers/commonReducer';

// types
import { State as RootState } from 'redux/store';
import { MetadataList } from 'model';

import httpClient from 'utils/httpClient';

const useMetadata = () => {
  const dispatch = useDispatch();
  const metadata = useSelector((state: RootState) => state?.common?.metadata);

  const getMetadata = useCallback(async () => {
    dispatch(setMetadataLoading(true));
    try {
      const metadataRes = await httpClient<MetadataList>(`/metadata`, { method: 'GET' });
      dispatch(setMetadata(metadataRes));
    } catch (error) {
    } finally {
      dispatch(setMetadataLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(metadata).length === 0 && metadata.constructor === Object) {
      getMetadata();
    }
  }, [getMetadata, metadata]);

  return {};
};

export default useMetadata;
