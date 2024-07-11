import React from 'react';

const BorderButton = ({children}) => {
  return (
    <button className="px-4 py-2 rounded-full border border-#E9E9E9 text-black bg-white" type="button">
        {children}
    </button>
  );
};

export default BorderButton;