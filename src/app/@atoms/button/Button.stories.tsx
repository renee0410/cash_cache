import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// 定義基本元件資訊
const meta = {
  title: '@Atom/Button',
  component: Button,
} satisfies Meta<typeof Button>; // 檢查 Button 是否符合 Meta 介面

export default meta;

// 定義 Story 型別，基於 StoryObj 且使用 meta 作為參數
type Story = StoryObj<typeof meta>;

// 多個 Named export 描述一個元件可能會出現的各種故事
export const Primary: Story = {
  // 設定元件參數的預設值
  args: {
    size: 'sm',
    color: 'primary',
    text: 'Button',
    style: 'solid',
    isFull: false,
    type: 'button',
  },
};
