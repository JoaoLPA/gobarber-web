import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin/signin.component';
import Signup from './pages/Signup/signup.component';

const App: React.FC = () => (
  <>
    {/* <Signin /> */}
    <Signup />
    <GlobalStyle />
  </>
);

export default App;
