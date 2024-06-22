import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/components'
import { Deck } from '@/pages/decks/decks.types'
interface Props {
  decks: Deck[] | undefined
}
export const DecksTable = ({ decks }: Props) => {
  return (
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
        {decks?.map(deck => {
          return (
            <TableRow key={deck?.id}>
              <TableCell>{deck?.name}</TableCell>
              <TableCell>{deck?.cardsCount}</TableCell>
              <TableCell>{new Date(deck?.updated).toLocaleDateString('ru-RU')}</TableCell>
              <TableCell>{deck?.author.name}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
