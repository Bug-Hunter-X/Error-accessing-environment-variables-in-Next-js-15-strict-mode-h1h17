```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [envVariable, setEnvVariable] = useState(null);

  useEffect(() => {
    // Fetch environment variables from an API endpoint or from a global variable
    // set in the _app.js file or similar (based on your environment variables configuration)
    // Example for fetching environment variables from a global variable
    const myVariable = window.__NEXT_DATA__.props.pageProps.myEnvVariable;
    if (myVariable !== undefined) {
      setEnvVariable(myVariable);
    } else {
      // Handle the case where the environment variable is not found
      console.log('Environment variable not found');
    }
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {envVariable && <p>Environment Variable: {envVariable}</p>}
    </div>
  );
}
```
```javascript
// pages/_app.js
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Set environment variables here for client-side access.
    // This would typically be done during a build process
    // or you would fetch the values via an API endpoint

    // Example of exposing a environment variable to the client.
    if (typeof window !== 'undefined') {
      window.__NEXT_DATA__.props.pageProps = {
        ...pageProps,
        myEnvVariable: process.env.MY_ENV_VARIABLE
      };
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```