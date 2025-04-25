import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLiveAssetsData, selectLiveAssets, selectLiveStatus, selectLiveError } from '../features/assets/assetsLiveSlice';

export default function useLiveAssets() {
  const dispatch = useDispatch();
  const assets = useSelector(selectLiveAssets);
  const status = useSelector(selectLiveStatus);
  const error = useSelector(selectLiveError);

  useEffect(() => {
    dispatch(fetchLiveAssetsData());
    const interval = setInterval(() => {
      dispatch(fetchLiveAssetsData());
    }, 2000); // refresh every 60 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return { assets, status, error };
}
