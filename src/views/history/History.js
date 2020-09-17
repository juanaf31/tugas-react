import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Datepicker from '../../components/Datepicker';
import { Table } from 'react-bootstrap';

const History = () => {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div
					class="card"
					style={{
						width: '55%',
						borderRadius: '20px',
						height: '500px',
						margin: 'auto',
						marginTop: '20px',
						background: 'rgb(0, 0, 128,0.6)'
					}}
				>
					<div class="card-header" style={{ color: 'white', fontSize: '25px' }}>
						Currency By Date
					</div>
					<Datepicker />
				</div>
			</div>
		</div>
	);
};

export default History;
