import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

test('Renders without issues', () => {
  const wrapper = setup();
  const divExist = wrapper.find("[data-test='component-element']");
  expect(divExist.length).toBe(1);
});

test('Increment button exists', () => {
  const wrapper = setup();
  const buttonExists = wrapper.find("[data-test='increment-button']");
  expect(buttonExists.length).toBe(1);
});

test('Decrement button exists', () => {
  const wrapper = setup();
  const buttonExists = wrapper.find("[data-test='decrement-button']");
  expect(buttonExists.length).toBe(1);
});

test('Counter display', () => {
  const wrapper = setup();
  const counterExists = wrapper.find("[data-test='counter-display']");
  expect(counterExists.length).toBe(1);
});

test('Counter state starts in 0', () => {
  const wrapper = setup();
  expect(wrapper.state('counter')).toBe(0);
});

test('Click Increment, increments counter', () => {
  const wrapper = setup();
  wrapper.setState({counter: 15});
  wrapper.find("[data-test='increment-button']").simulate('click');
  expect(wrapper.state('counter')).toBe(16);
});

test('Click decrement, decrements counter', () => {
  const wrapper = setup();
  wrapper.setState({counter: 10});
  wrapper.find("[data-test='decrement-button']").simulate('click');
  expect(wrapper.state('counter')).toBe(9);
});

test('Count doesn\'t go bellow 0', () => {
  const wrapper = setup();
  wrapper.setState({counter: 0});
  wrapper.find("[data-test='decrement-button']").simulate('click');
  expect(wrapper.state('counter')).toBe(0);
});

test('Count bellow 0 displays error message', () => {
  const wrapper = setup();
  wrapper.setState({counter: 0});
  wrapper.find("[data-test='decrement-button']").simulate('click');
  expect(wrapper.find("[data-test='error-message']").length).toBe(1);
});

test('Error message gets cleared when you click on increment button', () => {
  const wrapper = setup();
  wrapper.setState({error: true});
  wrapper.find("[data-test='increment-button']").simulate('click');
  expect(wrapper.find("[data-test='error-message']").length).toBe(0);
});
