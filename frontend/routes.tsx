
import React from 'react';
import {  Route, Routes as Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Template from './components/Template/Template';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { studioTheme } from './ui-components';
import CreateDocumentPage from './components/CreateDocument/CreateDocument';


const Routes: React.FC = () => {
    return(
        <ThemeProvider theme={studioTheme}>
        <Switch>
            <Route path="/" element={<Home />}index/>
            <Route path="/templates" element={<Template />}/>
            <Route path="/createDocument" element={<CreateDocumentPage />}/>
        </Switch>
        </ThemeProvider>
    );
};

export default Routes;