import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import awsconfig from './aws-exports'
import { Amplify } from 'aws-amplify';

import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>,
)
