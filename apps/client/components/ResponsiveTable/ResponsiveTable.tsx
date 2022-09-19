import { Accordion, AccordionItem } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

type ResponsiveTableProps = {
  data: {
    head: {
      width: number;
      name: string;
    }[];
    rows: {
      row: {
        value?: string | number | ReactNode;
        truncate?: boolean;
      }[];
      additionalData?: {
        label: string | number;
        data: string | number | ReactNode;
      };
    }[];
  };
};

const ResponsiveTable: FC<ResponsiveTableProps> = ({ data }) => {
  const { head, rows } = data;

  const Head = () => {
    if (!head || !head.length) {
      return null;
    }

    return (
      <div className="hidden md:flex gap-4 p-4 border-b items-center font-semibold text-xs">
        {head.map(({ width, name }, index) => {
          return (
            <div style={{ maxWidth: width, width: '100%' }} key={`${width}_${index}`}>
              {name}
            </div>
          );
        })}
      </div>
    );
  };

  const Row = () => {
    if (!rows || !rows.length) {
      return null;
    }

    return (
      <>
        {rows.map(({ row, additionalData }, rowsIndex) => {
          return (
            <div>
              <div
                className="flex-wrap md:flex-nowrap md:flex-row flex gap-4 p-4 border text-xs hover:shadow-md transition-shadow"
                key={`rows_${rowsIndex}`}
              >
                {row.map(({ value, truncate }, rowIndex) => {
                  return (
                    <div
                      style={{ maxWidth: head[rowIndex]?.width, width: '100%' }}
                      key={`row_${rowIndex}`}
                      className="break-words"
                    >
                      <div className="md:hidden font-semibold">{head[rowIndex]?.name}</div>
                      {value}
                    </div>
                  );
                })}
              </div>
              {additionalData && (
                <div>
                  <Accordion>
                    <AccordionItem label={additionalData.label}>{additionalData.data}</AccordionItem>
                  </Accordion>
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <Head />
      <Row />
    </div>
  );
};

export default ResponsiveTable;
