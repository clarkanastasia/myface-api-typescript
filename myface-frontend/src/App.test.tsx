// import React from 'react';
// import App from './components/App';
import { render } from '@testing-library/react';
import PostList from './components/PostList';

test('renders Posts text', () => {
    const { getByText } = render(<PostList />);
    const textElement = getByText(/Posts/i);
    expect(textElement).toBeInTheDocument();
});