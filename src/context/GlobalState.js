import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducer/AppReducer';
import { apiConvert, apiAllRates, apiHistory, apiPeriod } from '../api/Api';
import { showLoading } from '../components/LoadingFetch';

const initialState = {
	ratesName: [],
	ratesCurrency: [],
	currency: [],
	countryName: [],
	countryCurrency: [],
	base: '',
	periodeDate: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	function getRates() {
		apiAllRates()
			.then((response) => {
				showLoading();
				let labelChart = [];
				let data = [];
				let dataTes = Object.entries(response.data.rates);

				let tesData = dataTes.map((thisData) => {
					labelChart.push(thisData[0]);
					data.push(thisData[1]);
				});
				console.log(labelChart, data);
				dispatch({
					type: 'GET_RATES',
					payload1: labelChart,
					payload2: data,
					base: response.data.base
				});
			})
			.catch((error) => {
				throw error;
			});
	}
	function convert(input, base1, base2) {
		if (input === '') {
			input = 0;
		} else if (isNaN(input)) {
			input = 1;
		}
		apiConvert(base1, base2)
			.then((response) => {
				showLoading();
				console.log('response', response.data);
				let vals = input * response.data.rates[base2] / response.data.rates[base1];
				dispatch({
					type: 'GET_CONVERT',
					payload: vals
				});
			})
			.catch((error) => {
				throw error;
			});
	}
	function getHistory(start) {
		apiHistory(start)
			.then((response) => {
				showLoading();
				let labelChart = [];
				let data = [];
				let dataTes = Object.entries(response.data.rates);

				let tesData = dataTes.map((thisData) => {
					labelChart.push(thisData[0]);
					data.push(thisData[1]);
				});
				dispatch({
					type: 'HISTORY',
					payload1: labelChart,
					payload2: data,
					base: response.data.base
				});
			})
			.catch((error) => {
				throw error;
			});
	}

	function getPeriod(start, end) {
		apiPeriod(start, end).then((response) => {
			showLoading();
			let dates = [];
			let dataHelper = [];
			let labelChart = [];
			let data = [];
			let dataTes = Object.entries(response.data.rates);

			let datesData = dataTes.map((thisData) => {
				dates.push(thisData[0]);
			});

			dispatch({
				type: 'PERIOD',
				payload1: dates,
				base: response.data.base
			});
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				base: state.base,
				ratesName: state.ratesName,
				ratesCurrency: state.ratesCurrency,
				countryName: state.countryName,
				countryCurrency: state.countryCurrency,
				currency: state.currency,
				history: state.history,
				getRates,
				convert,
				getHistory,
				getPeriod,
				periodeDate: state.periodeDate
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
