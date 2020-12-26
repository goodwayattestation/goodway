import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>, div);
});

it('renders button correctly', () => {
    render(<Button name="track status" />);
    expect(screen.getByTestId('button')).toHaveTextContent('track status');
});
