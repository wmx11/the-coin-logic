// --data-table-library_grid-template-columns: 140px repeat(6, 1fr); max-width: 90vw; width: 100%;
const mainTheme = {
  Table: ``,
  Header: ``,
  Body: ``,
  BaseRow: `
    // background-color: var(--theme-ui-colors-background);

    // &.row-select-selected, &.row-select-single-selected {
    //   background-color: var(--theme-ui-colors-background-secondary);
    //   color: var(--theme-ui-colors-text);
    // }
  `,
  HeaderRow: `
    font-size: 12px;
    // color: var(--theme-ui-colors-text-light);

    // .th {
    //   border-bottom: 1px solid var(--theme-ui-colors-border);
    // }
  `,
  Row: `
    font-size: 12px;
    // color: var(--theme-ui-colors-text);

    // &:not(:last-of-type) .td {
    //   border-bottom: 1px solid var(--theme-ui-colors-border);
    // }

    // &:hover {
    //   color: var(--theme-ui-colors-text-light);
    // }
  `,
  BaseCell: `
    // border-bottom: 1px solid transparent;
    // border-right: 1px solid transparent;

    &:nth-of-type(1) {
      left: 0px;
    }
  `,
  HeaderCell: ` > div { 
    text-overflow: unset;
    white-space: unset;
  }`,
  Cell: ` font-weight: 600; `,
};

export const responsiveStylesForLayoutWithSideMenu = `          
max-width: calc(100vw - 200px);
width: 100%;
@media (max-width: 767px) {
  max-width: calc(100vw - 48px);
}`;

export default mainTheme;
