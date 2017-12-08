import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

configure({ adapter: new Adapter() });
global.expect = expect; // Use chai assert library for assertions
