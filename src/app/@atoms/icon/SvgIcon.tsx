import React, { FC } from 'react';
import {
  Icon,
  Calculator,
  Checkerboard,
  CurrencyCircleDollar,
  Gear,
  CaretDown,
  SignOut,
  List,
  Globe,
  ForkKnife,
  Divide,
  Plus,
  X,
  Minus,
  Equals,
  Check,
  Backspace,
  Dot,
  DotOutline,
  ShoppingCartSimple,
  TShirt,
  Car,
  Stethoscope,
  GameController,
  HairDryer,
  Gift,
  Island,
  HouseLine,
  CreditCard,
  HandHeart,
  DotsThreeOutline,
} from '@phosphor-icons/react';

interface IconProps {
  iconName: string;
  size?: number;
  className?: string;
  weight?: 'regular' | 'fill';
}

type IconsType = {
  [key: string]: Icon;
};

const Icons: IconsType = {
  Calculator: Calculator, // 計算機
  Checkerboard: Checkerboard, // dashboard
  CurrencyCircleDollar: CurrencyCircleDollar, // 貨幣
  Gear: Gear, // 設定
  CaretDown: CaretDown, // 下拉箭頭
  SignOut: SignOut, // 登出
  List: List, // 漢堡選單
  Globe: Globe, // 地球
  ForkKnife: ForkKnife, // 飲食
  Divide: Divide, // 除號
  Plus: Plus, // 加號
  X: X, // 乘號
  Minus: Minus, // 減號
  Equals: Equals, // 等號
  Check: Check, // 勾勾
  Backspace: Backspace, // 刪除
  Dot: Dot, // 點
  DotOutline: DotOutline, // 點
  ShoppingCartSimple: ShoppingCartSimple, // 購物車
  TShirt: TShirt, // 衣服
  Car: Car, // 車
  Stethoscope: Stethoscope, // 醫療
  GameController: GameController, // 休閒娛樂
  HairDryer: HairDryer, // 美容
  Gift: Gift, // 禮物
  Island: Island, // 旅遊
  HouseLine: HouseLine, // 住家
  CreditCard: CreditCard, // 分期
  HandHeart: HandHeart, // 保險
  DotsThreeOutline: DotsThreeOutline, // 三個點
};

const SvgIcon: FC<IconProps> = ({ iconName, size = 16, className = '', weight = 'regular' }) => {
  const IconComponent = Icons[iconName];
  return IconComponent && <IconComponent size={size} className={className} weight={weight} />;
};

export default SvgIcon;
