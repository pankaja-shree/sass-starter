# sass-starter

* Git clone the project.
* Run `npm install`
* Run `npm start` to start the project on localhost with browser sync and gulp watch.

## Developer details

* Use lite-server for browser sunc:
`npm install --save-dev lite-server`

* Make changes in `package.json` to enable lite-server:
```json
"scripts": {
    "lite": "lite-server"
  }
```

* Use gulp and gulp-sass:
`npm install --save-dev gulp gulp-sass`

* Make sure you have gulp-cli to run gulp tasks:
`npm install --global gulp-cli`

* Create `gulpfile.js` with tasks to compile Sass files to css.

* Install `concurrently` package to run lite-server and gulp simultaneously:
`npm install --save-dev concurrently`
