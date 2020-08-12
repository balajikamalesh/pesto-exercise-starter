import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grocerylist from './grocerylist';

Enzyme.configure({ adapter: new Adapter() });

describe('groceryList', () => {
  it('grocery items length', () => {
    const items = [{name:"Quaker Oats",quantity: 1},
                   {name:"Garam Masala",quantity: 2},
                   {name:"Chilli Powder",quantity: 2}];
    const wrapper = render(<Grocerylist list={items}/>);
    const NoOfChildren = wrapper.children().length;
    expect(NoOfChildren).toEqual(3);
  })

  it('single grocery item', () => {
    const items = [{name:"Quaker Oats",quantity: 1}];
    const wrapper = shallow(<Grocerylist list={items}/>);
    const text = wrapper.find('div h2').at(0);
    expect(text.text()).toEqual('Quaker Oats ');
  })

  it('multiple grocery items', () => {
    const items = [{name:"Quaker Oats",quantity: 1},
                   {name:"Garam Masala",quantity: 2}];
    const wrapper = shallow(<Grocerylist list={items}/>);
    const text = wrapper.find('div h2').at(1);
    expect(text.text()).toEqual('Garam Masala - 2');
  })
});