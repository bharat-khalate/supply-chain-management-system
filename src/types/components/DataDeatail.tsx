"use client";
import { IDataTableProps } from "@/types";
export function DataDetails<T extends object>({
    data,
    columns,
}: Pick<IDataTableProps<T>, "data" | "columns">) {
    if (!data || data.length === 0) {
        return (
            <div className="p-6 text-center text-gray-400">
                No data available
            </div>
        );
    }
    const row = data[0];

    return (
        <div className="bg-white rounded-xl shadow divide-y">
            {columns.map((col) => (
                <div
                    key={String(col.key)}
                    className="grid grid-cols-3 px-6 py-4 items-start"
                >
                    <span className="text-gray-500 text-sm font-medium col-span-1">
                        {col.header}
                    </span>
                    <span className="text-gray-800 text-sm col-span-2 break-words">
                        {col.render
                            ? col.render(row)
                            : String(row[col.key as keyof T] ?? "-")}
                    </span>
                </div>
            ))}
        </div>
    );
}