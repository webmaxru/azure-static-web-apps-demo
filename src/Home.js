/* eslint-disable no-unused-vars */
import './Home.css';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

function Home(props) {
  this.url = `/api/feedback`;
  this.requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  async function sendFeedback(isCorrect) {
    this.requestOptions.body = JSON.stringify({
      bpm: this.props.bpm,
      type: this.props.type,
      isCorrect: isCorrect,
    });

    try {
      // Let's assume that the request is successful
      toast.success('Sending your feedback. Thanks!');

      let response = await fetch(this.url, this.requestOptions);

      ReactGA.event('share', {
        method: 'API',
        content_type: 'feedback',
        item_id: isCorrect,
      });

      if (!response.ok) {
        console.error(`HTTP error. Status: ${response.status}`);
        throw new Error();
      }
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
    }
  }

  useEffect(() => {
    ReactGA.event('select_content', {
      content_type: 'mode',
      item_id: 'realtime',
    });
  }, []);

  return (
    <main className="content">
      <ol>
        <li>
          <a href="https://github.com/webmaxru/azure-static-web-apps-demo/">
            GitHub repo for this project
          </a>
        </li>
        <li>
          <h3>Build and deploy</h3>

          <ul>
            <li>
              <a href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2FStaticSites">
                SWA in Azure portal
              </a>
            </li>
            <li>
              <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/front-end-frameworks?ocid=AID3042057">
                Sample configuration for the frontend frameworks
              </a>
            </li>
            <li>
              <a href="https://github.com/webmaxru/azure-static-web-apps-demo/tree/master/.github/workflows">
                GitHub Actions
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Pre-production environments</h3>

          <ul>
            <li>
              <a href="https://github.com/webmaxru/azure-static-web-apps-demo/pulls">
                Pull requests
              </a>
            </li>
            <li>
              <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/review-publish-pull-requests?ocid=AID3042057">
                Quickstarts
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Creating API</h3>

          <p>
            <button onclick="callApi('/api/Greet')">Call /api/Greet</button>
          </p>
          <pre id="name"></pre>

          <ul>
            <li>
              <a href="/api/Greet?name=NDC">Test</a>
            </li>
            <li>
              <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?ocid=AID3042057">
                Quickstarts
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Authentication</h3>

          <p>Use /.auth/ helpers</p>

          <ul>
            <li>
              <a href=".auth/login/github">Log in with GitHub</a>
            </li>
            <li>
              <a href=".auth/login/twitter">Log in with Twitter</a>
            </li>
            <li>
              <a href=".auth/login/github?post_login_redirect_uri=/profile">
                Log in with a redirect to /profile
              </a>
            </li>
            <li>
              <a href=".auth/me">Check status</a>
            </li>
            <li>
              <a href=".auth/logout">Log out</a>
            </li>
            <li>
              <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?ocid=AID3042057">
                Quickstarts
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Routes</h3>

          <p>Use staticwebapp.config.json in the app route</p>

          <ul>
            <li>
              <a href="https://github.com/webmaxru/azure-static-web-apps-demo/blob/master/src/staticwebapp.config.json">
                Sample file
              </a>
            </li>
            <li>
              <a href="/login">Test /login</a>
            </li>
            <li>
              <a href="/admin">Test /admin</a>
            </li>
            <li>
              <a href="/profile">Test /profile</a>
            </li>
            <li>
              <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/routes?ocid=AID3042057">
                Quickstarts
              </a>
            </li>
          </ul>
        </li>
      </ol>

      <h2>Useful links</h2>
      <p>Here are some links to help you get started:</p>

      <ul>
        <li>
          <a href="https://aka.ms/swa-docs">
            <strong>Documentation | aka.ms/swa-docs</strong>
          </a>
        </li>
        <li>
          <a href="https://azure.microsoft.com/en-us/services/app-service/static/?ocid=AID3042057">
            Static Web Apps on Azure - landing page
          </a>
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps">
            VS Code Extension
          </a>
        </li>
        <li>
          <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react&ocid=AID3042057">
            Quickstarts - React
          </a>
        </li>
      </ul>
    </main>
  );
}

export default Home;
