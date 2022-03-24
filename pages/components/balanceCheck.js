import { useConnect, useAccount } from "wagmi";

const BalanceCheck = () => {
	const [{ data, error }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	console.log(accountData);

	const { connectors, connected } = data;

	return <div>Hello world</div>;
};

export default BalanceCheck;
