import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Typography,
} from '@/components'
import { useGetDecksQuery } from '@/services/baseApi'

export const DecksPage = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <Typography variant={'h1'}> An error has occurred </Typography>
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Updated</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(deck => {
            return (
              <TableRow key={deck?.id}>
                <TableCell>{deck?.name}</TableCell>
                <TableCell>{deck?.cardsCount}</TableCell>
                <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
                <TableCell>{deck?.author.name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
