import { useState } from 'react';
import Hello from './Hello';

export default function App({ transferToPerson }) {
	const [accountBalance, setAccountBalance] = useState(5000);
	const [transferAmount, setTransferAmount] = useState(0);

	const onSubmit = (e) => {
		e.preventDefault();

		setTimeout(() => {
			setAccountBalance((prev) => prev - transferAmount);
			setTransferAmount(0);
		}, 200);
	};

	return (
		<>
			<Hello />
			<h1>Account</h1>

			<p>Current account balance: {accountBalance}</p>

			<p>Send money to: {transferToPerson}</p>
			<form onSubmit={onSubmit}>
				<label htmlFor='transferAmount'>Transfer Amount</label>
				<br />
				<input
					min='0'
					type='number'
					id='transferAmount'
					value={transferAmount}
					onChange={(e) => setTransferAmount(e.target.value)}
				/>
				<button type='submit'>Send</button>
			</form>
		</>
	);
}