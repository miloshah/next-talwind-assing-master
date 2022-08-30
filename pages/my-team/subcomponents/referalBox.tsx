import React from 'react';

const ReferalBox : React.FC = () => {
  return (
    <div className="bg-slate-50 shadow dark:bg-darkModeBg p-5 mb-5 md:mb-0">
      <h2 className="dark:text-lightModeText">Referal system:</h2>
      <p className="text-slate-600 dark:text-lightModeText">
        Earn 10% for direct referals and 5% for indirect referals
      </p>
    </div>
  );
};

export default ReferalBox;
