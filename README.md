# Testing Svelte

An example of writing unit tests for Svelte with [Svelte Testing Library](https://github.com/testing-library/svelte-testing-library) and [jest-transformer-svelte](https://github.com/rspieker/jest-transform-svelte)

## Get started

Install the dependencies...

```bash
cd testing-svelte
yarn install
```

...then start [Rollup](https://rollupjs.org):

```bash
yarn dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.
