// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { NxbComponentsButton } from '@nxb-components-react';
import { externalApi } from '@nxb-services';

export const App = () => {
  const {
    data: dataExternal,
    error: errorExternal,
    isLoading: isLoadingExternal,
    refetch: refetchExternal,
  } = externalApi.useFetchAllEntriesQuery();

  const [trigger, result, lastPromiseInfo] =
    externalApi.useLazyFetchAllEntriesQuery();

  return (
    <>
      <div>Web App</div>
      {
        <div>
          Data:
          <span>{JSON.stringify(dataExternal)}</span>
        </div>
      }
      <div>
        {<NxbComponentsButton onClick={refetchExternal} title="Refetch" />}
        <NxbComponentsButton onClick={() => trigger()} title="Trigger lazy" />
      </div>
    </>
  );
};
