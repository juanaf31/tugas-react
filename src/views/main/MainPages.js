import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Option from '../../components/Option';
import { showLoading } from '../../components/LoadingFetch';

const MainPages = () => {
	const { currency, convert } = useContext(GlobalContext);
	const [ input, setInput ] = useState(1);
	const [ result, setResult ] = useState(0);
	const [ isResult, setIsResult ] = useState(false);
	const [ base, setBase ] = useState({
		base1: 'USD',
		base2: 'USD'
	});

	useEffect(
		() => {
			setResult(currency);
		},
		[ currency, result ]
	);

	const handleInput = (i) => {
		setInput(i);
	};

	const handleConvert = () => {
		console.log(input, base.base1);
		convert(input, base.base1, base.base2);
		setIsResult(true);
	};

	const handleBase1 = (b) => {
		setBase({ ...base, base1: b });
	};
	const handleBase2 = (b) => {
		setBase({ ...base, base2: b });
	};

	return (
		<div>
			<div
				class="card"
				style={{
					width: '60%',
					borderRadius: '20px',
					height: '290px',
					margin: 'auto',
					marginTop: '200px',
					background: 'rgb(0, 0, 128,0.6)'
				}}
			>
				<div class="card-header" style={{ color: 'white', fontSize: '25px' }}>
					The World's Trusted Currency Authority
				</div>
				<div
					className="card-body"
					style={{
						width: '80%',
						display: 'flex',
						margin: 'auto',
						color: 'white',
						justifyContent: 'space-around'
					}}
				>
					<div>
						<label style={{ display: 'inline' }}>Amount</label>
						<div>
							<input
								value={input}
								style={{
									height: '50px',
									borderRadius: '20px',
									fontSize: '30px',
									textAlign: 'center'
								}}
								onChange={(e) => handleInput(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<label style={{ display: 'inline' }}>From</label>
						<div>
							<Option choose={handleBase1} />
						</div>
					</div>
					<div>
						<label style={{ display: 'inline' }}>To</label>
						<div>
							<Option choose={handleBase2} />
						</div>
					</div>

					<div>
						<div>
							<button
								onClick={handleConvert}
								style={{
									height: '50px',
									width: '50px',
									fontSize: '30px',
									margin: '24px 0px 0px 0px',
									borderRadius: '10px',
									background: 'yellow'
								}}
							>
								{'>'}
							</button>
						</div>
					</div>
				</div>
				<div style={{ width: '100%', margin: 'auto', height: '200px', color: 'white' }}>
					{isResult ? (
						<div>
							<div style={{ marginTop: '20px' }}>
								{input}
								{base.base1}=
							</div>
							<div style={{ fontSize: '40px' }}>
								{result}
								{base.base2}
							</div>
						</div>
					) : null}
				</div>
			</div>
			<div style={{ width: '100%', height: '4px', background: 'yellow' }} />
		</div>
	);
};

export default MainPages;
