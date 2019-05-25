import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Login from './Login';

it('it must return a div', () => {
  const shallowedLogin = shallow(<Login />);
//   expect(shallowedLogin.containsMatchingElement(<InstantPiCamera />)).toBe(true);
console.log(shallowedLogin.debug());
console.log(shallowedLogin.find('div').debug());
//   expect(shallowedLogin.equals(<div className="loginForm">)).toBe(true); //uile pour tester une valeur égale du dom
  expect(shallowedLogin.is('div')).toBe(true);
  expect(shallowedLogin.is('div.loginForm')).toBe(true);
});