import React, { useState, useContext, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { GlobalContext } from '../../context/GlobalState';
import { Tab, Tabs, Button } from 'react-bootstrap';
const LiveCurrency = () => {
	const { getRates, ratesName, ratesCurrency, base } = useContext(GlobalContext);
	// const [ set, seSet ] = useState(false);
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

	useEffect(() => {
		getRates();
	}, []);

	const tes = () => {
		setData({ ...data, labels: ratesName });
		data.datasets[0].data = ratesCurrency;
		data.datasets[0].label = base;
		// setData(!data);
	};

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
						Latest Currency
					</div>
					<div style={{ display: 'flex', marginLeft: '30%', marginTop: '20px', marginBottom: '20px' }}>
						<Button
							style={{ borderRadius: '20px', margin: '5px 10px 5px 100px' }}
							variant="warning"
							onClick={tes}
						>
							GO LIVE
						</Button>
					</div>
					<div style={{ background: 'white', width: '753px', marginTop: '0px', borderRadius: '20px' }}>
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
			</div>
		</div>
	);
};

export default LiveCurrency;
