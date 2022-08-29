import React from 'react';
import { incomeStaticData } from '../../../src/data';

const IncomeBox = () => {
  return (
    <div className="bg-slate-50  shadow dark:bg-darkModeBg dark:lightModeText p-5 mb-5 md:mb-0">
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        {React.Children.toArray(
          incomeStaticData.map((v) => (
            <div className="border-2 text-center py-4 rounded mb-5 md:mb-0 dark:text-lightModeText dark:border-transparent">
              <h3>{v.heading}</h3>
              <p>{v.price}</p>
            </div>
          ))
        )}
      </section>
      <button className="mt-4 w-full py-2 text-center dark:bg-darkModeBg bg-lightModeBg text-white rounded dark:shadow-2xl">
        Receive
      </button>
    </div>
  );
};

export default IncomeBox;
