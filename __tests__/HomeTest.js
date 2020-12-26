import '../src/setupTests.js';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

test('Verifiying contact numbers', () => {
	render(<Home />);
	expect(screen.getByTestId('contact-number-0-1')).toHaveTextContent(
		'+91 9148889666'
	);

	expect(screen.getByTestId('contact-number-1-1')).toHaveTextContent(
		'+91 9148889444'
	);

	expect(screen.getByTestId('nav-email')).toHaveTextContent(
		'info@goodwayattestation.com'
	);
});
