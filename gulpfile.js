/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment: 10 Automated Version Bumping
*/

const gulp = require('gulp');
const fs = require('fs');
const argv = require('yargs').argv;
const log = require('shurl-debug');
const verInc = require('./src/modules/ver_num_inc');

// version bump
gulp.task('version-bump', => {
  const getVersion = verInc.version;
  fs.readFile('package.json') => {
    const pack = JSON.parse;
    const newVersion = pack;
    newVersion.version = getVersion;
    fs.writeFileSync('package.json', JSON.stringify(newVersion, null, 2));
  }
});

// add files, create commit
gulp.task('add-commit', ['version-bump'] => {
  .pipe(git.add())
  .pipe(git.commit('Version bumped!'))
  .on('end');
});

// add to repository
gulp.task('push', ['version-bump', 'add-commit'] => {
  git.push('origin', 'deploy')
  on('end')
});

// run tasks
gulp.task('bump', ['version-bump', 'add-commit', 'push']);
