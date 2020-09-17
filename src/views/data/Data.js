import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import { GlobalContext } from '../../context/GlobalState';
import MyPagination from './Pagination';

const Data = () => {
	const { getPeriod, base, periodeDate } = useContext(GlobalContext);
	const [ startDate, setStartDate ] = useState(new Date());
	const [ endDate, setEndDate ] = useState(new Date());

	useEffect(
		() => {
			getPeriod(startDate, endDate);
		},
		[ startDate, endDate ]
	);

	const handleData = () => {
		let thisStart = moment(startDate).format('YYYY-MM-DD');
		let thisEnd = moment(endDate).format('YYYY-MM-DD');
		console.log(thisStart, thisEnd);
		getPeriod(thisStart, thisEnd);
	};

	return (
		<div>
			<div style={{ marginTop: '60px', height: '507px' }}>
				<div
					class="card"
					style={{
						width: '75%',
						borderRadius: '20px',
						height: '507px',
						margin: 'auto',
						marginTop: '20px',
						background: 'rgb(0, 0, 128,0.6)'
					}}
				>
					<div class="card-header" style={{ color: 'white', fontSize: '25px' }}>
						Currency By Date
					</div>
					<div
						style={{
							display: 'flex',
							marginLeft: '0%',
							justifyContent: 'center',
							marginTop: '0px',
							marginBottom: '20px'
						}}
					>
						<div style={{ marginTop: '10px', width: '20%' }}>
							<ReactDatePicker
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								selectsStart
								startDate={startDate}
								endDate={endDate}
							/>
							<ReactDatePicker
								selected={endDate}
								onChange={(date) => setEndDate(date)}
								selectsEnd
								startDate={startDate}
								endDate={endDate}
								minDate={startDate}
							/>
						</div>
						<Button
							style={{ borderRadius: '20px', margin: '15px 0px 5px 10px', fontSize: '15px' }}
							variant="warning"
							onClick={handleData}
						>
							GET DATA
						</Button>
					</div>

					<MyPagination />
				</div>
			</div>
		</div>
	);
};

export default Data;
