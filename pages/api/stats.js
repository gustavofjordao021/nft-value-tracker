export default function collectionStats(req, res) {
	const options = { method: "GET", headers: { Accept: "application/json" } };

	fetch(
		`https://api.opensea.io/api/v1/collections?asset_owner=${req.query.address}&limit=2`
	)
		.then((response) => {
			return response.json();
		})
		// .then((response) => {
		// 	let userCollections = [];
		// 	response.forEach((collection) => {
		// 		const {
		// 			name,
		// 			image_url,
		// 			stats,
		// 			discord_url,
		// 			external_url,
		// 			twitter_username,
		// 			owned_asset_count,
		// 		} = collection;

		// 		let collectionInfo = {
		// 			name: name,
		// 			image: image_url,
		// 			price: Math.round(stats.floor_price * 100) / 100,
		// 			socials: {
		// 				discord: discord_url,
		// 				website: external_url,
		// 				twitter: twitter_username,
		// 			},
		// 			ownedAmount: owned_asset_count,
		// 		};
		// 		userCollections.push(collectionInfo);
		// 	});
		// 	return userCollections;
		// })
		.catch((err) => console.error(err));
}
