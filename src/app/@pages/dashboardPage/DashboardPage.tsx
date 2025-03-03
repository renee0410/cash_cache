import React, { useState } from 'react';

import { Button } from '@/app/@atoms';

// 將函數邏輯提取出來方便測試
export const incrementCount = (prevCount: number): number => {
  return prevCount + 1;
};

const DashboardPage = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(incrementCount);
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>按鈕點擊次數：{count}</p>
      <Button size='sm' text='點擊' color='primary' type='submit' onClick={handleClick} />
    </div>
  );
};

export default DashboardPage;
