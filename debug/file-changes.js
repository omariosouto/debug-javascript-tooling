const path = require('path');
const chokidar = require('chokidar');
const log = console.log.bind(console);

const watcher = chokidar.watch(path.resolve(".", "file-changed"), {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});


watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));