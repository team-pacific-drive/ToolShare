import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// Component to be tested
import MyTools from '../../../components/pages/MyTools';
Enzyme.configure({ adapter: new Adapter() })

it('it renders My Tools', () => {
  fetch.mockResponseOnce(JSON.stringify( [
    {
      title: 'lawnmower',
      model: 'T1000',
      serialnumber: '39553d1',
      price: '12',
      zipcode: '92009'
    }
  ] ))
  const one = shallow(<MyTools />)
  const two = <h1>My Tools</h1>
  expect(one.contains(two)).toBe(true);
})
