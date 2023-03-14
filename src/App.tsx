import { Global } from '@emotion/react';

import HomePage from '@/pages/HomePage';

import globalStyle from '@/styles/globalStyle';

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <HomePage />
    </>
  );
};

export default App;
