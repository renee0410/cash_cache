import React, { FC, ReactNode } from 'react';

import { SvgIcon } from '@/app/@atoms/index';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: string;
}

const Popup: FC<PopupProps> = ({ isOpen, onClose, children, title }) => {
  return (
    isOpen && (
      <>
        <div className='bg-mask/50 z-500 fixed right-0 top-0 size-full' onClick={onClose} />
        <div className='z-600 fixed left-1/2 top-1/2 min-w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6'>
          <div className='flex justify-end'>
            <button onClick={onClose}>
              <SvgIcon iconName='X' />
            </button>
          </div>

          {title && <span className='mt-0 block text-center text-lg font-medium'>{title}</span>}

          {/* Content */}
          <div className='pt-4'>{children}</div>
        </div>
      </>
    )
  );
};

export default Popup;
