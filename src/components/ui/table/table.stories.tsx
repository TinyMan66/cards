import type { Meta, StoryObj } from '@storybook/react'

import { Table, Typography } from '@/components'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/table'

const meta = {
  component: Table,
  tags: ['auto docs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell>Link</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Kind</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </TableCell>
            <TableCell>
              <Typography
                as={'a'}
                href={'https://it-incubator.io/'}
                target={'_blank'}
                variant={'link1'}
              >
                Some link
              </Typography>
            </TableCell>
            <TableCell>Main</TableCell>
            <TableCell>Read</TableCell>
            <TableCell>🐒</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Default next</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </TableCell>
            <TableCell>Some link to some source</TableCell>
            <TableCell>Extra</TableCell>
            <TableCell>Read</TableCell>
            <TableCell>🐽</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}
