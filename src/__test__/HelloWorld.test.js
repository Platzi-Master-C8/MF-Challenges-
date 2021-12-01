import React from 'react'
import { configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HelloWorld from '../components/HelloWorld'

configure({ adapter: new Adapter() })
let wrapper

describe('Hello world component', () => {
  wrapper = shallow(<HelloWorld/>)

  it('New Hello world component is rendered ', () => {
    expect(wrapper).toBeDefined()
  })
})
