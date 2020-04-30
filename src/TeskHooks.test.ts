import React from 'react'
import ReactDOM from 'react-dom'
import TestHook from './components/TestHook'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

it('Text in state in changed when button clicked', () => {
    const { getByText }: any = render(<TestHook />);

    expect(getByText(/Initial/i).textContent).toBe("Initial state");

    fireEvent.click(getByText("state change button"));

    expect(getByText(/Initial/i).textContent).toBe("Initial state changed")
})