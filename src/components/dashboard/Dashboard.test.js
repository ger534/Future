import Dashboard from './Dashboard';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));

configure({adapter: new Adapter()});
describe('Dashboard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});