import * as React from 'react'
import { fetchWords, Word } from './async2'

type Handler = (words: string[]) => void

function closure() {
  const handlers: Handler[] = []

  setInterval(() => {
    fetchWords().then((words) => {
      handlers.forEach((handle) => handle(words))
    })
  }, 1000)

  return (handle: Handler) => {
    handlers.push(handle)
  }
}

const addHandler = closure()

export const AsyncDemo3 = () => {
  const [words, setWords] = React.useState<string[]>()

  React.useEffect(() => {
    addHandler(setWords)
  }, [])

  return (
    <section>
      {words === undefined ? (
        <div>loading...</div>
      ) : (
        words.map((word, index) => <Word id={index} word={word} />)
      )}
    </section>
  )
}

addHandler((words) => {
  console.log('im another handler receiving', words)
})
