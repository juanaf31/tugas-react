import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { GlobalContext } from '../context/GlobalState';
import { Button, Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

const Datepicker = () => {
	const { countryCurrency, countryName, getHistory, base } = useContext(GlobalContext);
	const [ startDate, setStartDate ] = useState(new Date());
	const [ isClick, setIsClick ] = useState(false);
	const labelChart = [];

	const [ data, setData ] = useState({
		labels: [],
		datasets: [
			{
				label: '',
				fill: false,
				lineTension: 0.5,
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: []
			}
		]
	});

	useEffect(
		() => {
			getHistory(startDate);
		},
		[ isClick, base, countryName, countryCurrency ]
	);

	const changeStart = (start) => {
		console.log(start);
		setStartDate(start);
		let thisStart = moment(start).format('YYYY-MM-DD');
		console.log(thisStart);
		getHistory(thisStart);
		setIsClick(false);
	};

	const historyHandle = () => {
		setData({ ...data, labels: countryName });
		data.datasets[0].data = countryCurrency;
		data.datasets[0].label = base;
		setIsClick(true);
	};

	return (
		<div>
			<div style={{ display: 'flex', marginLeft: '30%', marginTop: '20px', marginBottom: '0px' }}>
				<div style={{ margin: '10px 10px 10px 10px', fontSize: '19px' }}>
					<DatePicker selected={startDate} onChange={(date) => changeStart(date)} />
				</div>
				<Button
					style={{ borderRadius: '20px', margin: '5px 10px 5px 10px' }}
					variant="warning"
					onClick={historyHandle}
				>
					SET
				</Button>
			</div>
			<div style={{ background: 'white', width: '753px', marginTop: '20px', borderRadius: '20px' }}>
				<Bar
					data={data}
					options={{
						title: {
							display: true,
							// text: 'Latest Currency',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Datepicker;
