import type { Meta, StoryObj } from '@storybook/react';
import { NxbComponentsButton } from './nxb-components.button.native';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NxbComponentsButton> = {
  component: NxbComponentsButton,
  title: 'NxbComponentsButton',
};
export default meta;
type Story = StoryObj<typeof NxbComponentsButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NxbComponentsButton!/gi)).toBeTruthy();
  },
};
