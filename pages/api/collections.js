export default function collectionStats(req, res) {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			"x-api-key": process.env.RESERVOIR_APIKEY,
		},
	};

	fetch(
		`https://api.reservoir.tools/users/${req.query.address}/collections/v2?includeTopBid=false&offset=0`,
		options
	)
		.then((response) => response.json())
		.then((accountResponse) => {
			let userCollections = [];
			accountResponse.collections.forEach((individualCollection) => {
				const { collection, ownership } = individualCollection;

				let collectionInfo = {
					name: collection.name,
					slug: collection.slug,
					image: collection.image,
					price: collection.floorAskPrice
						? parseFloat(collection.floorAskPrice.toFixed(3))
						: 0,
					supply: collection.tokenCount,
					volume: parseFloat(collection.volume.allTime.toFixed(0)),
					socials: {
						discord: collection.discord_url,
						website: collection.external_url,
						twitter: collection.twitterUsername,
					},
					ownedAmount: ownership.tokenCount,
					networth: parseFloat(
						(collection.floorAskPrice * ownership.tokenCount).toFixed(3)
					),
				};

				userCollections.push(collectionInfo);
			});
			userCollections.sort((a, b) => b.networth - a.networth);
			res.status(200).json(userCollections);
		})
		.catch((error) => console.error(error));
}
