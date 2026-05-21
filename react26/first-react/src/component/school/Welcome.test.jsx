import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Welcome from './Welcome';
describe('Welcome component', () => {
    it("rnder welcome text", () => {
        render(<Welcome />)
        const heading = screen.getByText(/First Testing/i);
        expect(heading).toBeInTheDocument();
    })
})