import type { Meta } from '@storybook/react'

import { Card } from '@/components/ui/card/card'

export default {
  component: Card,
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export const Default = {
  args: {
    children:
      'Cards content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    style: {
      height: '528px',
      left: '430px',
      top: '96px',
      width: '420px',
    },
    title: 'Title',
  },
}
