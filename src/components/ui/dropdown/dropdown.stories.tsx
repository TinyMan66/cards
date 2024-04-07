import type { Meta, StoryObj } from '@storybook/react'

import { Edit, LogOut, Person, Play, TrashCan } from '@/assets'
import { Dropdown } from '@/components'

const meta = {
  component: Dropdown,
  tags: ['auto docs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      {
        action: () => {},
        icon: <Play />,
        value: 'Learn',
      },
      {
        action: () => {},
        icon: <Edit />,
        value: 'Edit',
      },
      {
        action: () => {},
        icon: <TrashCan />,
        value: 'Delete',
      },
    ],
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      {
        action: () => {},
        icon: <Play />,
        value: 'Learn',
      },
      {
        action: () => {},
        icon: <Edit />,
        value: 'Edit',
      },
      {
        action: () => {},
        icon: <TrashCan />,
        value: 'Delete',
      },
    ],
  },
}

const avatarImage =
  'https://s3-alpha-sig.figma.com/img/9846/73b3/30142bfde5bdcdb7549cf75f7a51d100?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XfGx9gbpRMLmIsTCFqlLBi4ehhpqUXO4MDloKeEDP7uSvbHrItrLQfgUF-bfgD9aQzIISW2Q1o3V7SQUEMzF5GIDvl~ZyqjU2aQDZBjUR4RNXHksKABqbr5zRUHD7gmNAnLPJoTyJVe~uNnuD1CqAF07xMLTKnUNYkBdg0ucpGgNepoLDuIug2n53JcSYUhPXPiC3rjujDO~OsQE0DzV9z6~nLLX-~Ol9AxUJ7wWot738lIA~froVCAb2mt8XC04lp42c9CqHne6KrtIcdXj8GZzYauUx4fCavN~kDVys1llGrUQA20nFjB4LHGCuSF-Zu3z8I8fpO2KuMoxOERxJQ__'

export const ProfileDropdown: Story = {
  args: {
    avatar: avatarImage,
    email: 'exampale@mail.com',
    name: 'Ivan',
    options: [
      {
        action: () => {},
        icon: <Person />,
        value: 'My Profile',
      },
      {
        action: () => {},
        icon: <LogOut />,
        value: 'Sign Out',
      },
    ],
  },
}
