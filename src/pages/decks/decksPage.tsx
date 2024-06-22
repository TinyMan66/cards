import { Typography } from '@/components'
import { useGetDecksQuery } from '@/services/baseApi'

export const DecksPage = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <Typography variant={'h1'}> An error has occurred </Typography>
  }

  return <div>Decks page</div>
}
