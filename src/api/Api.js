import axios from 'axios';

export const apiConvert = async (base1, base2) => {
	const res = axios.get(`https://api.exchangeratesapi.io/latest?symbols=${base1},${base2}`);

	return res;
};

export const apiAllRates = async () => {
	const res = axios.get('https://api.exchangeratesapi.io/latest');
	return res;
};

export const apiHistory = async (start, end) => {
	const res = axios.get(`https://api.exchangeratesapi.io/${start}`);
	return res;
};

export const apiPeriod = async (start, end) => {
	const res = axios.get(`https://api.exchangeratesapi.io/history?start_at=${start}&end_at=${end}`);
	return res;
};
