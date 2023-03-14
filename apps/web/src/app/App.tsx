// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { exampleApi } from '@myapp/shared';

export const App = () => {
  const { data, error, isLoading, refetch } =
    exampleApi.useFetchAllEntriesQuery();

  return <div>Web App</div>;
};
