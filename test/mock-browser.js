import {mocks} from 'mock-browser';
const mock = new mocks.MockBrowser();

global.document = mock.getDocument();
global.window = {};
