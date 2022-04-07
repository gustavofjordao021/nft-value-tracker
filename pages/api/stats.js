export default function collectionStats(req, res) {
	res.status(200).json({
		collections: [
			{
				name: "Zipcy's SuperNormal",
				socials: [
					{
						openSea: "https://opensea.io/collection/supernormalbyzipcy",
						discord: "https://discord.com/invite/supernormal",
						twitter: "https://twitter.com/zipcy8888",
					},
				],
				floor: 0.39,
				volume: 26029,
				supply: 8888,
				owners: 4535,
			},
			{
				name: "The Wanderers",
				socials: [
					{
						openSea: "https://opensea.io/collection/the-wanderers",
						discord: "https://discord.com/invite/SMfCAXUdww",
						twitter: "https://twitter.com/wanderers_nft",
					},
				],
				floor: 0.12,
				volume: 4469,
				supply: 8887,
				owners: 4261,
			},
			{
				name: "2112.run Genesis Cryptorunners",
				socials: [
					{
						openSea: "https://opensea.io/collection/2112-cryptorunners",
						discord: "https://discord.com/invite/2112run",
						twitter: "https://twitter.com/2112Run",
					},
				],
				floor: 0.04,
				volume: 39,
				supply: 2603,
				owners: 1234,
			},
		],
	});
}
