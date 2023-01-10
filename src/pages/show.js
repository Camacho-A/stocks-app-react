import { useLoaderData } from "react-router-dom"

const Show = (props) => {
	const stock = useLoaderData()
	return (
		<div className="stock-show">
			<h1>{stock[0].companyName}</h1>
			<h2>{stock[0].symbol}</h2>
			<b>Price:</b> ${stock[0].price} {stock[0].currency}
			<br />
			<b>Changes:</b> {stock[0].changes}
			<p>{stock[0].description}</p>
		</div>
	)
}

export default Show
