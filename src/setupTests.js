import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {JSDOM} from 'jsdom'
import {expect} from 'chai';
import {use} from 'chai';
import chaiExclude from 'chai-exclude';


use(chaiExclude);

configure({adapter: new Adapter()});

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = dom.window;
global.window.requestAnimationFrame = (callback) => setTimeout(callback, 0); // A shim for testing animations
global.document = dom.window.document;
global.history = dom.history;

global.expect = expect; // Use chai assert library for assertions
