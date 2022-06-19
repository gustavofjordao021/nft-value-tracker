export default function collectionStats(req, res) {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			"X-API-KEY": process.env.OPENSEA_APIKEY,
		},
	};

	fetch(
		`https://api.opensea.io/api/v1/collections?asset_owner=${req.query.address}&offset=0`,
		options
	)
		.then((response) => response.json())
		.then((accountResponse) => {
			let userCollections = [];
			accountResponse.forEach((collection) => {
				const {
					name,
					slug,
					image_url,
					stats,
					discord_url,
					external_url,
					twitter_username,
					owned_asset_count,
				} = collection;

				let collectionInfo = {
					name: name,
					slug: slug,
					image: image_url,
					price: Math.round(stats.floor_price * 100) / 100,
					socials: {
						discord: discord_url,
						website: external_url,
						twitter: twitter_username,
					},
					ownedAmount: owned_asset_count,
				};
				userCollections.push(collectionInfo);
			});
			res.status(200).json(userCollections);
		})
		.catch((error) => console.error(error));
}
