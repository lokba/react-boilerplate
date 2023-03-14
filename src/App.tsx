import theme from './styles/theme';

import { Global, ThemeProvider } from '@emotion/react';

import HomePage from '@/pages/HomePage';

import globalStyle from '@/styles/globalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
