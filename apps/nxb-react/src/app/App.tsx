// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { NxbComponentsButton } from '@nxb-components';
import { externalApi, internalApi } from '@nxb-services';

export const App = () => {
  const {
    data: dataExternal,
    error: errorExternal,
    isLoading: isLoadingExternal,
    refetch: refetchExternal,
  } = externalApi.useFetchAllEntriesQuery();
  const {
    data: dataInternal,
    error: errorInternal,
    isLoading,
    isLoading: Internal,
    refetch: refetchInternal,
  } = internalApi.useFetchAllEntriesQuery();

  return (
    <>
      <div>Web App</div>
      <div>
        <NxbComponentsButton />
      </div>
    </>
  );
};
