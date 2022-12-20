# hello-app

Here will be some information about the app.

## How to start?

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/client/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

Find more information on the main repo on [GitHub](https://github.com/muenzpraeger/create-lwc-app).

## Creating LWC OSS App

npx create-lwc-app Enter app name

Install SLDS
npm i @salesforce-ux/design-system
npm i @lwc/synthetic-shadow

Add below line in lwc-services.config.js
{ from: 'node_modules/@salesforce-ux/design-system/assets', to: 'dist/SLDS' }

Add below line in index.html

<link rel="stylesheet" type="text/css" href="/SLDS/styles/salesforce-lightning-design-system.css"/>

Add below line in index.js
import '@lwc/synthetic-shadow';

npm run build

npm run watch
