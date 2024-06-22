import { useGetDecksQuery } from '@/services/baseApi'

export const DecksPage = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <div>Decks page</div>
}
