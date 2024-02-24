import App from "./App";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test('app test', () => {
    render(<App />)
    const elemetIdentifier = screen.getByText(/SHOW HUB/i);
    expect(elemetIdentifier).toBeInTheDocument()

})