import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { tableData, columnsData } from '../../src/data';
import { useThemeContextConsumer } from '../../context/themeProvider';
import IncomeBox from './subcomponents/incomeBox';
import ReferalBox from './subcomponents/referalBox';

const style = {
  grid: `grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-5`,
};

createTheme(
  'dark',
  {
    text: {
      primary: '#ffffff',
    },
    background: {
      default: 'rgb(17,24,39)',
    },
    divider: {
      default: '#ffffff',
    },
  },
  'light'
);

const MyTeam = () => {
  const { mode } = useThemeContextConsumer();

  return (
    <>
      <h1>My Team</h1>
      <div className={style.grid}>
        <IncomeBox />
        <ReferalBox />
      </div>
      <div className="mt-5 shadow">
        <DataTable
          className="rounded"
          columns={columnsData}
          data={tableData}
          pagination
          theme={mode ? 'dark' : 'light'}
        />
      </div>
    </>
  );
};

export default MyTeam;
