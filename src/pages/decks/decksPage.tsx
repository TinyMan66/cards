import { useState } from 'react'

import { DecksTable, TextField, Typography } from '@/components'
import { useGetDecksQuery } from '@/services/baseApi'

export const DecksPage = () => {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <Typography variant={'h1'}> An error has occurred </Typography>
  }

  return (
    <div>
      <TextField onChange={e => setSearch(e.currentTarget.value)} value={search} />
      <DecksTable decks={data?.items} />
    </div>
  )
}
