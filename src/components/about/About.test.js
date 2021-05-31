import About from './About';
import React from 'react'
import ReactDOM from 'react-dom'

jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />,div);
  ReactDOM.unmountComponentAtNode(div);
});
  