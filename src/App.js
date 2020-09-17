import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MainPages from './views/main/MainPages';
import { GlobalProvider } from './context/GlobalState';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import History from './views/history/History';
import LiveCurrency from './views/liveCurrency/LiveCurrency';
import Data from './views/data/Data';
import Loading from './components/Loading';

function App() {
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
			console.log('tes');
		}, 10000);
		return () => clearTimeout(timer);
	});
	return (
		<BrowserRouter>
			<GlobalProvider>
				{loading ? (
					<Loading />
				) : (
					<div className="App">
						<div className="bg-img" />
						{/* <div className="laptop">
							<div className="content"> */}
						<Nav />
						<Switch>
							<Route path="/" exact component={MainPages} />
							<Route path="/history" component={History} />
							<Route path="/live" component={LiveCurrency} />
							<Route path="/data" component={Data} />
						</Switch>
						{/* </div>
						</div> */}
					</div>
				)}
			</GlobalProvider>
		</BrowserRouter>
	);
}

export default App;
