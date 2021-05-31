import Chart from './Chart';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));

configure({adapter: new Adapter()});
describe('Chart', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});