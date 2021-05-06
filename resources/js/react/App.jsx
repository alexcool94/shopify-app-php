import React from 'react';
import ReactDOM from 'react-dom';
import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge-utils"

function App({shop, apiKey}) {
    const app = createApp({
        apiKey: apiKey,
        shopOrigin: shop
    });
    getSessionToken(app).then((token) => {
        console.log(token);
    });

    return (
        <h1>Hello React</h1>
    );
}

export default App;

let appElement = document.getElementById('app');
if (appElement) {
    ReactDOM.render(<App {...(appElement.dataset)}/>, appElement);
}