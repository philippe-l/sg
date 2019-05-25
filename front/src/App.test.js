import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';
import InstantPiCamera from './components/InstantPiCamera';
import TempAndHumidity from './components/TempAndHumidity';
import Login from './components/Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('is composed with instantPicture component', () => {
  const mountedApp = mount(<App />);
  mountedApp.setState({ jwt: '12345678' });
  expect(mountedApp.containsMatchingElement(<InstantPiCamera />)).toBe(true);
});

it('is composed with TempAndHumidity component', () => {
  const mountedApp = mount(<App />);
  mountedApp.setState({ jwt: '12345678' });
  expect(mountedApp.containsMatchingElement(<TempAndHumidity />)).toBe(true);
});

it('is composed with login component', () => {
  const mountedApp = mount(<App />);
  console.log(mountedApp.contains(<Login />));
  console.log(mountedApp.childAt(0));
  expect(mountedApp.contains(<Login />)).toBe(true);
});