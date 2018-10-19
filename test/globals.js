'use strict';

const chai = require('chai'),
    Path = require('wrapper-path');

global._expect = chai.expect;
global._path = new Path(`${__dirname}/../`);
