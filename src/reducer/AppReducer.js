export default (state, action) => {
	switch (action.type) {
		case 'GET_RATES':
			console.log(action.payload1);
			return { ...state, ratesName: action.payload1, ratesCurrency: action.payload2, base: action.base };
		case 'GET_CONVERT':
			return { ...state, currency: action.payload };
		case 'HISTORY':
			return { ...state, countryName: action.payload1, countryCurrency: action.payload2, base: action.base };
		case 'PERIOD':
			console.log(action.payload1);
			return { ...state, periodeDate: action.payload1 };
		default:
			return state;
	}
};
