const commonBefore = 'md:before:hidden before:block before:mr-2 before:font-bold';
const commonSpacing = 'mr-4 mb-2 md:mb-0 w-full text-sm';

export const TABLE_DATA = {
  rank: { styles: `${commonSpacing} w-full md:max-w-[25px]`, label: '#' },
  name: { styles: `${commonSpacing} w-full md:max-w-[140px]`, label: 'Name' },
  price: {
    styles: `${commonSpacing} ${commonBefore} md:max-w-[150px] before:content-["Price:"]`,
    label: 'Price',
  },
  holders: {
    styles: `${commonSpacing} ${commonBefore} hidden md:block md:max-w-[100px] before:content-["Holders:"]`,
    label: 'Holders',
  },
  avgHoldings: {
    styles: `${commonSpacing} ${commonBefore} hidden md:block md:max-w-[150px] before:content-["Avg._Holdings:"]`,
    label: 'Avg. Holdings',
  },
  marketCap: {
    styles: `${commonSpacing} ${commonBefore} md:max-w-[150px] before:content-["Market_Cap:"]`,
    label: 'Market Cap',
  },
  tags: {
    styles: `${commonSpacing} ${commonBefore} hidden md:block md:max-w-[150px] before:mb-2 before:content-["Tags:"]`,
    label: 'Tags',
  },
  network: {
    styles: `${commonSpacing} ${commonBefore} hidden md:block md:flex md:items-center md:justify-center md:max-w-[80px] before:mb-2 before:content-["Network:"]`,
    label: 'Tags',
  },
};
