import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, Tabs } from '@/components'

const meta = {
  component: Tabs,
  tags: ['auto docs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: '1',
    items: [
      { action: () => console.log('item 1'), name: 'My cards', value: '1' },
      { action: () => console.log('item 2'), name: 'All cards', value: '2' },
    ],
  },
}
export const Disabled: Story = {
  args: {
    defaultValue: '1',
    disabled: true,
    items: [
      { action: () => console.log('item 1'), name: 'My cards', value: '1' },
      { action: () => console.log('item 2'), name: 'All cards', value: '2' },
    ],
  },
}
const avatarImage =
  'https://s3-alpha-sig.figma.com/img/9846/73b3/30142bfde5bdcdb7549cf75f7a51d100?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XfGx9gbpRMLmIsTCFqlLBi4ehhpqUXO4MDloKeEDP7uSvbHrItrLQfgUF-bfgD9aQzIISW2Q1o3V7SQUEMzF5GIDvl~ZyqjU2aQDZBjUR4RNXHksKABqbr5zRUHD7gmNAnLPJoTyJVe~uNnuD1CqAF07xMLTKnUNYkBdg0ucpGgNepoLDuIug2n53JcSYUhPXPiC3rjujDO~OsQE0DzV9z6~nLLX-~Ol9AxUJ7wWot738lIA~froVCAb2mt8XC04lp42c9CqHne6KrtIcdXj8GZzYauUx4fCavN~kDVys1llGrUQA20nFjB4LHGCuSF-Zu3z8I8fpO2KuMoxOERxJQ__'

export const WithContent: Story = {
  args: {
    defaultValue: '1',
    items: [
      {
        action: () => console.log('item 1'),
        content: <Avatar size={'100px'} src={avatarImage} />,
        name: 'My cards',
        value: '1',
      },
      { action: () => console.log('item 2'), name: 'All cards', value: '2' },
    ],
  },
}
