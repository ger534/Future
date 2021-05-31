import App from './App';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import i18n from './i18n';

configure({adapter: new Adapter()});
describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});