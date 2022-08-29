import React from 'react';
import { TABLE_DATA } from './constants';

const TableHead = () => {
  return (
    <div className="hidden md:flex mb-4 p-5 bg-gradient-to-r from-lightBlue to-darkBlue text-white rounded-md sticky top-[90px] z-[1] shadow-xl items-center">
      <div className={`font-bold ${TABLE_DATA.rank.styles}`}>#</div>
      <div className={`font-bold ${TABLE_DATA.name.styles}`}>Name</div>
      <div className={`font-bold ${TABLE_DATA.price.styles}`}>Price / 24%</div>
      <div className={`font-bold ${TABLE_DATA.holders.styles}`}>Holders</div>
      <div className={`font-bold ${TABLE_DATA.avgHoldings.styles}`}>Avg. Holdings</div>
      <div className={`font-bold ${TABLE_DATA.marketCap.styles}`}>Market Cap</div>
      <div className={`font-bold ${TABLE_DATA.tags.styles}`}>Tags</div>
      <div className={`font-bold ${TABLE_DATA.network.styles}`}>Network</div>
    </div>
  );
};

export default TableHead;
