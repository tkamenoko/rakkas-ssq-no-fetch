# rakkas-ssq-no-fetch

Rakkas dev server and production server cannot call `fetch` in `useSSQ` on page transition.

## Setup

1. Clone and run `npm install`

2. Run `npm run dev` or `npm run build && npm run serve`

3. View the page. No errors are found at first time.

4. Click a link on the page. You will see error messages like:

```
[vite] Internal server error: fetch is not a function
  at $runServerSide$ (/path/to/rakkas-ssq-no-fetch/src/routes/_sites/load.page.tsx:43:22)
  at runServerSideServerHooks.middleware.beforePages (/path/to/rakkas-ssq-no-fetch/node_modules/rakkasjs/dist/server.js:1250:30)
  at async call (file:////path/to/rakkas-ssq-no-fetch/node_modules/@hattip/compose/dist/index.js:62:22)
  at async call (file:////path/to/rakkas-ssq-no-fetch/node_modules/@hattip/compose/dist/index.js:62:22)
  at async Module.default (file:////path/to/rakkas-ssq-no-fetch/node_modules/@hattip/adapter-node/dist/chunk-JET6MSNZ.js:37:24)
  at async file:////path/to/rakkas-ssq-no-fetch/node_modules/@vavite/connect/dist/index.js:71:15
```
