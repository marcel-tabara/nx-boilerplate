// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { exampleApi } from '@myapp/shared';

export const App = () => {
  const { data, error, isLoading, refetch } =
    exampleApi.useFetchAllExamplesQuery(5);

  return <div>Web App</div>;
};
