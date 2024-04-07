// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { NxbComponentsButton } from '@nxb-components-react';
import { externalApi, internalApi } from '@nxb-services';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useState } from 'react';

export const App = () => {
  const [skip, setSkip] = useState(true);
  const {
    data: dataExternal,
    error: errorExternal,
    isLoading: isLoadingExternal,
    refetch: refetchExternal,
  } = externalApi.useFetchAllEntriesQuery(skipToken);

  const {
    data: dataInternal,
    error: errorInternal,
    isLoading,
    isLoading: Internal,
    refetch: refetchInternal,
  } = internalApi.useFetchAllEntriesQuery();

  const [trigger, result, lastPromiseInfo] =
    externalApi.useLazyFetchAllEntriesQuery();

  return (
    <>
      <div>Web App</div>
      {/* <div>
        Data:
        <span>{JSON.stringify(dataExternal)}</span>
      </div>
      <div>
        Result:
        <span>{JSON.stringify(result)}</span>
      </div>
      <div>
        lastPromiseInfo:
        <span>{JSON.stringify(lastPromiseInfo)}</span>
      </div> */}
      <div>
        <NxbComponentsButton onClick={trigger} title="Trigger" />
        <NxbComponentsButton onClick={refetchExternal} title="Refetch" />
      </div>
    </>
  );
};
