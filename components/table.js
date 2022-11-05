import { useTable, useSortBy, usePagination } from "react-table";

import Spinner from "./spinner";

const Table = ({ data, columns, isLoading }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			data,
			columns,
			isLoading,
			initialState: { pageIndex: 0 },
		},
		usePagination
	);

	return (
		<>
			<table
				{...getTableProps()}
				className="w-4/5 text-sm text-center text-black table-auto"
			>
				<thead className="text-xs text-white uppercase shadow-2xl border-transparent">
					{headerGroups.map((headerGroup) => (
						<tr
							{...headerGroup.getHeaderGroupProps()}
							className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-transparent"
						>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody
					{...getTableBodyProps()}
					className="shadow-2xl border-transparent"
				>
					{isLoading ? (
						<>
							<td colSpan={6}>
								<div className="h-48 p-8 flex justify-center">
									<Spinner />
								</div>
							</td>
						</>
					) : (
						<>
							{page.map((row, i) => {
								prepareRow(row);
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return (
												<td
													{...cell.getCellProps()}
													className="px-6 py-4 border-transparent"
												>
													{cell.render("Cell")}
												</td>
											);
										})}
									</tr>
								);
							})}
						</>
					)}
				</tbody>
			</table>
		</>
	);
};

export default Table;

{
	/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */
}
{
	/* <div className="pagination">
				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					{"<<"}
				</button>{" "}
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					{"<"}
				</button>{" "}
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					{">"}
				</button>{" "}
				<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
					{">>"}
				</button>{" "}
				<span>
					Page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{" "}
				</span>
				<span>
					| Go to page:{" "}
					<input
						type="number"
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0;
							gotoPage(page);
						}}
						style={{ width: "100px" }}
					/>
				</span>{" "}
				<select
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}
				>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div> */
}
// 	</>
// );

// if (networthState.isLoading) {
// 	return (
// 		<>
// 			<div className="flex flex-col items-center justify-center w-full">
// 				<h2 className="m-6 font-bold text-2xl bg-transparent flex items-center justify-center">
// 					<span className="mr-2">Mininum</span>{" "}
// 					<Image src="/logo.png" width={24} height={24} />{" "}
// 					<span className="ml-2">value </span>
// 				</h2>
// 				<div className="p-4 mx-2 w-1/6 h-24 flex flex-row justify-center items-center rounded-full border-1 shadow-2xl">
// 					<div className="w-12">
// 						<Spinner />
// 					</div>
// 					<span className="ml-6">Loading...</span>
// 				</div>
// 			</div>
// 			<div className="flex flex-col items-center mb-20 mt-20">
// 				<table className="w-4/5 text-sm text-center text-black table-auto">
// 					<thead className="text-xs text-white uppercase shadow-2xl border-transparent">
// 						<tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-transparent">
// 							<th
// 								scope="col"
// 								className="px-6 py-3 border-transparent rounded-tl-xl mb-8"
// 							>
// 								Collection
// 							</th>
// 							<th scope="col" className="px-6 py-3 border-transparent">
// 								Floor
// 							</th>
// 							<th scope="col" className="px-6 py-3 border-transparent">
// 								Volume
// 							</th>
// 							<th scope="col" className="px-6 py-3 border-transparent">
// 								Supply
// 							</th>
// 							<th scope="col" className="px-6 py-3 border-transparent">
// 								Owners
// 							</th>
// 							<th
// 								scope="col"
// 								className="px-6 py-3 border-transparent rounded-tr-xl"
// 							>
// 								Bags
// 							</th>
// 						</tr>
// 					</thead>
// 					<tbody className="shadow-2xl border-transparent">
// 						<tr className="w-full">
// 							<td colSpan={6}>
// 								<div className="h-48 p-8 flex justify-center">
// 									<Spinner />
// 								</div>
// 							</td>
// 						</tr>
// 					</tbody>
// 				</table>
// 			</div>
// 		</>
// 	);
// } else {
// 	return (
// 		<>
// 			<div className="flex flex-col items-center justify-center grow w-full">
// 				<h2 className="m-6 font-bold text-2xl bg-transparent flex items-center justify-center">
// 					<span className="mr-2">Mininum</span>{" "}
// 					<Image src="/logo.png" width={24} height={24} />{" "}
// 					<span className="ml-2">value </span>
// 				</h2>
// 				<div className="p-4 mx-2 w-1/6 flex flex-row items-center justify-center h-20 rounded-full border-1 shadow-2xl">
// 					<Image src="/eth.png" width={12} height={20} />{" "}
// 					<span className="text-2xl ml-4">
// 						{parseFloat(networthState.networth.toFixed(2))}
// 					</span>
// 				</div>
// 			</div>
// 			{networthState ? (
// 				<>
// 					<div className="flex flex-col items-center">
// 						<table className="w-4/5 text-sm text-center text-black table-auto mb-20 mt-20">
// 							<thead className="text-xs text-white uppercase shadow-2xl border-transparent">
// 								<tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-transparent">
// 									<th
// 										scope="col"
// 										className="px-6 py-3 border-transparent rounded-tl-xl mb-8"
// 									>
// 										Collection
// 									</th>
// 									<th scope="col" className="px-6 py-3 border-transparent">
// 										Floor
// 									</th>
// 									<th scope="col" className="px-6 py-3 border-transparent">
// 										Volume
// 									</th>
// 									<th scope="col" className="px-6 py-3 border-transparent">
// 										Supply
// 									</th>
// 									<th
// 										scope="col"
// 										className="px-6 py-3 border-transparent rounded-tr-xl"
// 									>
// 										Bags
// 									</th>
// 								</tr>
// 							</thead>
// 							<tbody className="shadow-2xl border-transparent">
// 								{networthState.collections.map((collection) => (
// 									<tr>
// 										<th
// 											scope="row"
// 											className="px-6 py-4 font-medium text-black whitespace-nowrap"
// 										>
// 											{collection.name}
// 										</th>
// 										<td className="px-6 py-4 border-transparent">
// 											<Image src="/eth.png" width={12} height={20} />{" "}
// 											{collection.price}
// 										</td>
// 										<td className="px-6 py-4 border-transparent">
// 											<Image src="/eth.png" width={12} height={20} />{" "}
// 											{collection.volume}
// 										</td>
// 										<td className="px-6 py-4 border-transparent">
// 											{collection.supply}
// 										</td>
// 										<td className="px-6 py-4 border-transparent">
// 											<Image src="/eth.png" width={12} height={20} />{" "}
// 											{collection.price * collection.ownedAmount}
// 										</td>
// 									</tr>
// 								))}
// 							</tbody>
// 						</table>
// 					</div>
// 				</>
// 			) : (
// 				blob
// 			)}
// 		</>
// 	);
// }
