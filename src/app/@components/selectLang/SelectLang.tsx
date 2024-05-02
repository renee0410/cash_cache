import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Globe } from '@phosphor-icons/react';

const SelectLang = () => {
  // i18n
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type='button'
        className='absolute right-[3%] top-[2%] flex flex-col items-center'
        onClick={() => setIsOpen(!isOpen)}>
        <Globe size={32} color='white' />
        {isOpen && (
          <div className='absolute top-full mt-1 flex flex-col divide-y-2 whitespace-nowrap rounded bg-white p-1'>
            <button className='p-1' onClick={() => i18n.changeLanguage('zhTw')}>
              繁體中文
            </button>
            <button className='p-1' onClick={() => i18n.changeLanguage('en')}>
              English
            </button>
          </div>
        )}
      </button>
    </>
  );
};

export default SelectLang;
