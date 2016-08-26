'use strict';
/**
 * Test runner utility for Preparator.
 * 
 * Programmatically runs tests (rather than via mocha's CLI).
 * This allows us to hook into Mocha framework events.
 *
 * This script is launched via the `test` property in NPM config,
 * thus preserving the customary `npm test` invocation style.
 * See {@link https://docs.npmjs.com/misc/scripts}.
 *
 * Supported invocation patterns:
 * - All tests: `npm test`
 * - Single test directory: `npm test test/001_strings`
 * - Single test file: `npm test test/001_strings/001_strings_warmup.js`
 *
 */

const Mocha = require('mocha');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const MANIFEST_FILE_PATH = './problems/manifest.js';

const runner = new Mocha({
  ui: 'bdd',
  reporter: 'spec',
  bail: false,
  timeout: 10000,
  slow: 3000
});

function getLocationArg() {
  return process.argv[2];
}

function isDirectory(filePath) {
  return fs.lstatSync(filePath).isDirectory();
}

function toFullPath(rootDir, pathPart) {
  return path.join(process.cwd(), rootDir, pathPart);
}

function addTestFilesFromRootDirectory(rootDir) {
  const files = glob.sync('**/*.test.js', { cwd: rootDir });
  files.forEach( file => {
    runner.addFile(toFullPath(rootDir, file));
  });
}

function addTestFiles(locationArg) {
  let fileOrDirPath;

  if (locationArg) {
    fileOrDirPath = locationArg;
    if (isDirectory(fileOrDirPath)) {
      // Target directory was specified on command line.
      addTestFilesFromRootDirectory(fileOrDirPath);
    } else {
      // Target file was specified on command line.
      runner.addFile(fileOrDirPath);
    }
  } else {
    // Default to loading from manifest.
    runner.addFile(MANIFEST_FILE_PATH);
  }

}

function run() {
  addTestFiles(getLocationArg());
  runner.run();
}

run();
