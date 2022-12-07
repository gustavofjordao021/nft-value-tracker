import { useTable, useSortBy, usePagination } from "react-table";

import Image from "next/image";
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
		pageCount,
		nextPage,
		previousPage,
		state: { pageIndex },
	} = useTable(
		{
			data,
			columns,
			isLoading,
			initialState: { pageIndex: 0 },
		},
		useSortBy,
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
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									className="px-6 py-4 border-transparent"
								>
									{column.render("Header")}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? " 🔽"
												: " 🔼"
											: ""}
									</span>
								</th>
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
											if (
												cell.column.Header == "Volume" ||
												cell.column.Header == "Net worth" ||
												cell.column.Header == "Floor"
											) {
												return (
													<td
														{...cell.getCellProps()}
														className="px-6 py-4 border-transparent"
													>
														<div className="flex flex-row items-center justify-center">
															<Image src="/eth.png" width={12} height={20} />{" "}
															<span className="ml-4">
																{cell.render("Cell")}
															</span>
														</div>
													</td>
												);
											} else {
												return (
													<td
														{...cell.getCellProps()}
														className="px-6 py-4 border-transparent"
													>
														{cell.render("Cell")}
													</td>
												);
											}
										})}
									</tr>
								);
							})}
						</>
					)}
				</tbody>
			</table>
			{pageCount > 1 && (
				<div className="my-6 flex items-center justify-center">
					<button
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
						className="mx-3 flex items-center justify-center"
					>
						<Image src="/arrow-left.png" width={24} height={24} />{" "}
					</button>{" "}
					<span className="font-bold">
						Page{" "}
						<strong>
							{pageIndex + 1} of {pageCount}
						</strong>{" "}
					</span>
					<button
						onClick={() => nextPage()}
						disabled={!canNextPage}
						className="mx-3 flex items-center justify-center"
					>
						<Image src="/arrow-right.png" width={24} height={24} />{" "}
					</button>{" "}
				</div>
			)}
		</>
	);
};

export default Table;
