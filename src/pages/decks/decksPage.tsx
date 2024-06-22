import { useGetDecksQuery } from '@/services/baseApi'

export const DecksPage = () => {
  const result = useGetDecksQuery()

  console.log(result)

  return <div>Decks page</div>
}
