import React from 'react';
import { render } from '@testing-library/react';
import AppAdmin from './AppAdmin';

test('renders learn react link', () => {
  const { getByText } = render(<AppAdmin />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
