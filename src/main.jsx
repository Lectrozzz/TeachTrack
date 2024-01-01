import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx'
// import './assets/style/index.css'
import customTheme from './assets/style/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider disableGlobalStyle={true} resetCSS={false} theme={customTheme} >
        <App />
    </ChakraProvider>
);
