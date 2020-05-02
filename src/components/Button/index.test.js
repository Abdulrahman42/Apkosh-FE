import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Button from './index';

test("Can't click button because disable", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("if Loading", () => {
    const {container, getByText} = render(<Button isLoading></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector("span")).toBeInTheDocument()
})

test("button link external", () => {
    const {container} = render(<Button type="link" isExternal></Button>)
    expect(container.querySelector("a")).toBeInTheDocument()
})

test("button link internal", () => {
    const {container} = render(<Router><Button type="link" href="" ></Button></Router>)
    expect(container.querySelector("a")).toBeInTheDocument()
})