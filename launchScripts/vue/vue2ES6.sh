#!/bin/bash
eval "cd vue2/ES6"
eval "npm install"
eval "vite build"
eval "node ../../framework-integration-testing/launchScripts/writeKeyVariable '../../vue2/ES6/node_modules/flexmonster/flexmonster.full.js'"
eval "node testsServer/server &"
