import { render, screen, fireEvent } from '@testing-library/react';
import CreatePost from './components/CreatePost';
import '@testing-library/jest-dom/extend-expect';

describe('The create post component', () => {

    test('renders create posts heading', () => {
        render(<CreatePost />);
        const textElement = screen.getByText(/Create Post/i);
        expect(textElement).toBeInTheDocument();
    });

    test('renders a button', () => {
        render(<CreatePost />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    test('renders 2 input boxes', () => {
        render(<CreatePost />);
        const inputBoxes = screen.getAllByRole('textbox');
        expect(inputBoxes).toHaveLength(2);
    });


    test('message input is empty ', () =>{
        render(<CreatePost />)
        const messageInput = screen.getByPlaceholderText('message');
        expect((messageInput as HTMLInputElement).value).toBe("");
    });

    test('image url input is empty ', () =>{
        render(<CreatePost />)
        const imageUrlInput = screen.getByPlaceholderText('imageUrl');
        expect((imageUrlInput as HTMLInputElement).value).toBe("");
    });

    test('message input should change ', () =>{
        render(<CreatePost />)
        const messageInput = screen.getByPlaceholderText('message');
        const testValue = "test";
        fireEvent.change(messageInput, {target : {value : testValue}});
        expect((messageInput as HTMLInputElement).value).toBe(testValue);
    });

    test('image url input should change ', () =>{
        render(<CreatePost />)
        const imageUrlInput = screen.getByPlaceholderText('imageUrl');
        const testValue = "test";
        fireEvent.change(imageUrlInput, {target : {value : testValue}});
        expect((imageUrlInput as HTMLInputElement).value).toBe(testValue);
    });
})