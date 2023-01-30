declare type MultipleSheetsData<T> = {
    sheetName: string;
    data: T[];
};
declare type Data<T> = MultipleSheetsData<T>[] | T[];
export declare const exportToXlsx: <T>(data: Data<T>, filename: string, isMultipleSheets?: boolean) => any;
export {};
//# sourceMappingURL=exportToXlsx.d.ts.map