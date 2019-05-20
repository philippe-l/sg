import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';
import InstantPiCamera from './components/InstantPiCamera';
import TempAndHumidity from './components/TempAndHumidity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('is composed with instantPicture component', () => {
  const mountedApp = mount(<App />);
  expect(mountedApp.containsMatchingElement(<InstantPiCamera />)).toBe(true);
});

it('is composed with TempAndHumidity component', () => {
  const mountedApp = mount(<App />);
  expect(mountedApp.containsMatchingElement(<TempAndHumidity />)).toBe(true);
});