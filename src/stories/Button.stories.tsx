import type { Meta, StoryObj } from '@storybook/react';

import '@app/styles/global.scss';
import { Button } from '@shared/button';

const meta = {
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
        scheme: 'light',
        size: 'regular',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        scheme: 'dark',
        size: 'regular',
    },
};
