import type { Meta, StoryObj } from '@storybook/react'

import { Table, Typography } from '@/components'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/table'
import { useState } from "react";

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

const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]

export const WithSort = {
  render: () => {
    type Sort = {
      direction: 'asc' | 'desc'
      key: string
    } | null

    const [sort, setSort] = useState<Sort>(null)

    const handleSort = (key: string) => {
      if (sort && sort.key === key) {
        setSort({
          direction: sort.direction === 'asc' ? 'desc' : 'asc',
          key,
        })
      } else {
        setSort({
          direction: 'asc',
          key,
        })
      }
    }

    return (
      <table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.cardsCount}</TableCell>
              <TableCell>{item.updated}</TableCell>
              <TableCell>{item.createdBy}</TableCell>
              <TableCell>icons...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    )
  },
}
