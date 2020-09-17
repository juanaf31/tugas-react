import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Option = (props) => {
	const handleBase = (b) => {
		props.choose(b);
	};

	return (
		<select
			id="country"
			style={{ height: '50px', borderRadius: '10px' }}
			onChange={(e) => handleBase(e.target.value)}
		>
			<option>AUD</option>
			<option>BGN</option>
			<option>BRL</option>
			<option>CAD</option>
			<option>CHF</option>
			<option>CNY</option>
			<option>CZK</option>
			<option>DKK</option>
			<option>GBP</option>
			<option>HKD</option>
			<option>HRK</option>
			<option>HUF</option>
			<option>IDR</option>
			<option>ILS</option>
			<option>INR</option>
			<option>ISK</option>
			<option>JPY</option>
			<option>KRW</option>
			<option>MXN</option>
			<option>MYR</option>
			<option>NOK</option>
			<option>NZD</option>
			<option>PHP</option>
			<option>PLN</option>
			<option>RON</option>
			<option>RUB</option>
			<option>SEK</option>
			<option>SGD</option>
			<option>THB</option>
			<option>TRY</option>
			<option selected>USD</option>
			<option>ZAR</option>
		</select>
	);
};

export default Option;
