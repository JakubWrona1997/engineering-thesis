import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

Amplify.configure(awsconfig);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.xl}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    );
  },
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default withAuthenticator(App, {components});

