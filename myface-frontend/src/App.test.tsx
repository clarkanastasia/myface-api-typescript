import { render } from '@testing-library/react';
import CreatePost from './components/CreatePost';
import '@testing-library/jest-dom/extend-expect'

test('renders create posts heading', () => {
    const { getByText } = render(<CreatePost />);
    const textElement = getByText(/Create Posts/i);
    expect(textElement).toBeInTheDocument();
});
