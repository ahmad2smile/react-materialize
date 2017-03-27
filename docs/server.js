// shameless copied from react-bootstrap

import 'colors';
import express from 'express';
import httpProxy from 'http-proxy';
import ip from 'ip';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Root from './src/Root';
import routes from './src/Routes';
import { resetID } from '../src/idgen';

import metadata from './generate-metadata';

const port = 4000;

const app = express();

const proxy = httpProxy.createProxyServer();

const target = `http://localhost:8080`;
Root.assetBaseUrl = target;

app.get('/assets/*', (req, res) => {
  resetID();
  proxy.web(req, res, { target });
});

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/')));

proxy.on('error', e => {
  console.log('Could not connect to webpack proxy'.red);
  console.log(e.toString().red);
});

console.log('Prop data generation started:'.green);

metadata().then(props => {
  console.log('Prop data generation finished:'.green);
  Root.propData = props;

  app.use((req, res) => {
    const context = {};
    const location = req.url;
    const html = renderToString(
      <StaticRouter
        location={location}
        context={context}
      >
        <div>
          {JSON.stringify(props)}
        </div>
      </StaticRouter>
    );
    if (context.url) {
      res.writeHead(301, { Location: context.url });
      res.end();
    } else {
      res.send('<!doctype html>' + html);
      // match({ routes, location }, (error, redirectLocation, renderProps) => {
        // const html = renderToString(
          // <StaticRouter {...renderProps} />
        // );
      // });
      // res.write(`
        // <!doctype html>
        // <div id="app">${html}</div>
      // `);
      // res.end();
    }

    // res.header('Access-Control-Allow-Origin', target);
    // res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  });
});
app.listen(port, () => {
  console.log(`Server started at:`);
  console.log(`- http://localhost:${port}`);
  console.log(`- http://${ip.address()}:${port}`);
});
