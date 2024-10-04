'use client'
import { useEffect } from 'react'

export default function Error({error, reset,}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {console.error(error)}, [error])
  return (
    <>
      <h1>Error</h1>
      <button onClick={() => reset()}>Try again</button>
    </>
  )
}