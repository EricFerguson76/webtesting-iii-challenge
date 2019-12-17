// Test away!

import React  from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Display from './Display';

it('if red-led when locked', () => {
    const { getByText } = render(<Display locked={true}/>);
    const button = getByText(/locked/i)
    fireEvent.click(button);
    expect(button).toHaveClass('red-led')
})

it('if red-led when closed', () => {
    const { getByText } = render(<Display closed={true}/>);
    const button = getByText(/closed/i)
    fireEvent.click(button);
    expect(button).toHaveClass('red-led')
})

it('if green-led when unlocked', () => {
    const { getByText } = render(<Display unlocked={false}/>);
    const button = getByText(/unlocked/i)
    fireEvent.click(button);
    expect(button).toHaveClass('green-led')
})

it('if green-led when open', () => {
    const { getByText } = render(<Display open={false}/>);
    const button = getByText(/open/i)
    fireEvent.click(button);
    expect(button).toHaveClass('green-led')
})

