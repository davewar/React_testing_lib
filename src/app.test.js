import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App2';
import Hello from './Hello';

test('if $500 is sent, the account balance is updated', async () => {
	render(<App />);

	userEvent.type(
		screen.getByRole('spinbutton', { name: /transfer amount/i }),
		'500'
	);
	userEvent.click(screen.getByRole('button', { name: /send/i }));

	// screen.debug();

	// expect(
	// 		await screen.findByText(/current account balance: 4500/i,{},{timeout: 3000})
	// 	).toBeInTheDocument();

	expect(
		await screen.findByText(/current account balance: 4500/i)
	).toBeInTheDocument();
	expect(
		screen.queryByText(/current account balance: 5000/i)
	).not.toBeInTheDocument();
});

test('if tranferToPerson name prop is passed, it renders the name', async () => {
	render(<App transferToPerson='bob' />);

	expect(screen.getByText(/send money to: bob/i)).toBeInTheDocument();
});

test('render Hello component', async () => {
	render(
		<App transferToPerson='bob'>
			<Hello />
		</App>
	);

	expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
