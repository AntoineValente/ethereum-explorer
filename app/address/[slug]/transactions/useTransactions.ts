import type { GetAccountTxsResponse200 } from "@/.api/apis/chainbase/types";
import { useEffect, useReducer } from "react";
import { P, match } from "ts-pattern";
import { transactionsApi } from "./transactionsApi";
import type { GetAccountTxsFilters } from "./useTransactionsFilters";

type UseTransactionsAction =
	| { type: "fetch" }
	| { type: "error"; error: Error }
	| { type: "success"; transactionsResponse: GetAccountTxsResponse200 };

type UseTransactionsState =
	| {
			status: "idle";
	  }
	| {
			status: "loading";
	  }
	| {
			status: "error";
			error: Error;
	  }
	| {
			status: "success";
			transactionsResponse: GetAccountTxsResponse200;
	  };

const reducer = (
	_state: UseTransactionsState,
	action: UseTransactionsAction,
): UseTransactionsState => {
	return match(action)
		.returnType<UseTransactionsState>()
		.with({ type: "fetch" }, () => ({ status: "loading" }))
		.with({ type: "error", error: P.select() }, (error) => ({
			status: "error",
			error,
		}))
		.with(
			{ type: "success", transactionsResponse: P.select() },
			(transactionsResponse) => ({ status: "success", transactionsResponse }),
		)
		.exhaustive();
};

export const useTransactions = (
	address: string,
	filters: GetAccountTxsFilters,
) => {
	const [state, dispatch] = useReducer(reducer, { status: "idle" });

	useEffect(() => {
		dispatch({ type: "fetch" });
		transactionsApi
			.getTransactions(address, filters)
			.then((response) => {
				if (response.error) {
					dispatch({ type: "error", error: response.error });
				} else {
					dispatch({ type: "success", transactionsResponse: response.data });
				}
			})
			.catch((error: Error) => dispatch({ type: "error", error }));
	}, [filters, address]);

	return state;
};
