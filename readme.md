# Webpack Vue HMR Demo

This project serves as a demo of using the below technologies together in a way that's easy to integrate into an existing project:

* Webpack with babel
* Vue (With .vue component file support)
* Vue Hot-module-reloading
* SCSS/SASS (Bootstrap by default) with autoprefixer.
* Dynamic imports (Auto-split by webpack)

The 'index.php' file represents an existing project in this case.

### Why

When trying to use the above components I found most guides assumed you were either working with a static HTML page or were using NodeJS as your back-end. Getting an existing project working with webpack's dev server was difficult and I always ended up implementing sketchy workarounds to get my own server-side code and webpacks dev-server to work nicely together.

This demo provides a configured example of setting up webpack with HMR without having to considerably alter your original app or the way it's run. The build process fundementally remains separate from your app.

### Installing and Running

```shell

# Install NPM dependancies
npm install

# Build Assets
npm run build

# Run original PHP app
php -S localhost:8080

```

`npm run build` will build & minify files for production usage. For development you can watch for changes and enable hot-module-replacement by running `npm run dev`.

The output folder, `dist/` by default, will be cleaned out before every build.

