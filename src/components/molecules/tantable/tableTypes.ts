import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";

interface OptionalSetters {
  [key: string]: Dispatch<SetStateAction<string>>;
}

interface ShowProperties {
  [key: string]: boolean;
}

type RequiredIfVisible<
  T extends ShowProperties,
  K extends keyof T & keyof OptionalSetters
> = T[K] extends true
  ? { [P in K]-?: OptionalSetters[P] }
  : { [P in K]?: OptionalSetters[P] };

export type ReactTableProps<T extends object> = {
  setPagePagination: Dispatch<SetStateAction<number>>;
  data: T[];
  columns: ColumnDef<T>[];
  isLoading: boolean;
  isSuccess: boolean;
  requestStatus?: boolean;
  isFetching?: boolean;
  pageSize: any;
  setPageSize: any;
  columnsToRemove: number[];
} & OptionalSetters &
  ShowProperties &
  RequiredIfVisible<ShowProperties>;
