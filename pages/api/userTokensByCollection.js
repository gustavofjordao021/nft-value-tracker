export default function userTokensByCollection(req, res) {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			"x-api-key": process.env.RESERVOIR_APIKEY,
		},
	};

	fetch(
		`https://api.reservoir.tools/users/${req.query.address}/tokens/v6`,
		options
	)
		.then((response) => response.json())
		.then((accountResponse) => {
			res.status(200).json(accountResponse);
		})
		.catch((error) => console.error(error));
}
