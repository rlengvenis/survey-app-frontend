import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {JSDOM} from 'jsdom'
import {expect} from 'chai';

configure({ adapter: new Adapter() });

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
global.history = dom.history;

global.expect = expect; // Use chai assert library for assertions
