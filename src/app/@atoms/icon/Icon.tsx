import React, { FC } from 'react';
import { Calculator, Checkerboard, CurrencyCircleDollar, Gear, CaretDown, SignOut, List, Globe } from '@phosphor-icons/react';

interface IconProps {
  iconName: string;
  size?: number;
  className?: string;
}

const Icons = {
  Calculator: Calculator, // 計算機
  Checkerboard: Checkerboard, // dashboard
  CurrencyCircleDollar: CurrencyCircleDollar, // 貨幣
  Gear: Gear, // 設定
  CaretDown: CaretDown, // 下拉箭頭
  SignOut: SignOut, // 登出
  List: List, // 漢堡選單
  Globe: Globe, // 地球
};

const Icon: FC<IconProps> = ({ iconName, size = 16, className = '' }) => {
  const IconComponent = Icons[iconName];
  return IconComponent && <IconComponent size={size} className={className} />;
};

export default Icon;
