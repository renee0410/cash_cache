import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

import { Globe } from '@phosphor-icons/react';

interface SelectLangProps {
  color?: string;
}

const SelectLang: React.FC<SelectLangProps> = ({ color = 'black' }) => {
  // i18n
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChangeLang = (lang: string) => {
    switch (lang) {
      case 'zhTw':
        i18n.changeLanguage('zhTw');
        localStorage.setItem('i18n', 'zhTw');
        break;
      case 'en':
        i18n.changeLanguage('en');
        localStorage.setItem('i18n', 'en');
        break;
      default:
        i18n.changeLanguage('zhTw');
        localStorage.setItem('i18n', 'zhTw');
        break;
    }
  };

  useEffect(() => {
    if (ref.current) {
      const buttonRect = ref.current.getBoundingClientRect();

      if (window.innerHeight - buttonRect.bottom < 0) setIsBottom(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const savedLang = localStorage.getItem('i18n');

    if (savedLang) {
      const lang = { selectedLang: savedLang };

      i18n.changeLanguage(lang.selectedLang);
    }
  }, []);

  if (color) {
    switch (color) {
      case 'white':
        color = 'white';
        break;
      default:
        color = 'text-gray-700';
        break;
    }
  }
  return (
    <>
      <button type='button' className='flex flex-col items-center' onClick={() => setIsOpen(!isOpen)}>
        <Globe size={24} className={color} />
        {isOpen && (
          <div
            className={cx('absolute my-1 flex flex-col divide-y-2 whitespace-nowrap rounded bg-white p-2 shadow-lg', {
              'bottom-full': isBottom,
              'top-full': !isBottom,
            })}
            ref={ref}>
            <div className='p-1' onClick={() => handleChangeLang('zhTw')}>
              繁體中文
            </div>
            <div className='p-1' onClick={() => handleChangeLang('en')}>
              English
            </div>
          </div>
        )}
      </button>
    </>
  );
};

export default SelectLang;
