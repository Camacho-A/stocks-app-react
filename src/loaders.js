export const stocksLoader = async ({ params }) => {
	const symbol = params.symbol
	const apiKey = "edb2641b068ddc01402be3e778a74fec"
	return (
		await fetch(
			`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
		)
	).json()
}
