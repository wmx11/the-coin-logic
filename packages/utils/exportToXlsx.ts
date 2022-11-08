import * as XLSX from 'xlsx';

type MultipleSheetsData<T> = { sheetName: string; data: T[] };
type Data<T> = MultipleSheetsData<T>[] | T[];

export const exportToXlsx = <T>(data: Data<T>, filename: string, isMultipleSheets?: boolean) => {
  if (!data) {
    console.error('No data found to export.');
    return null;
  }

  const book = XLSX.utils.book_new();

  if (isMultipleSheets) {
    (data as MultipleSheetsData<T>[]).forEach((sheetData) => {
      if (!sheetData?.data?.length) {
        return;
      }
      const sheet = XLSX.utils.json_to_sheet(sheetData.data);
      XLSX.utils.book_append_sheet(book, sheet, sheetData.sheetName);
    });
    return XLSX.writeFile(book, `${filename}.xlsx`);
  }

  const sheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(book, sheet, 'sheet1');

  return XLSX.writeFile(book, `${filename}.xlsx`);
};
