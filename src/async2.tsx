import * as React from 'react'
import { fetchValue } from './async1'

export const fetchWords = () =>
  fetchValue()
    .then((sentence) => {
      return sentence.split(' ')
    })
    .catch(() => {
      return new Error()
    })
    .then((result) => {
      return result instanceof Error ? ['no words'] : result
    })

export const AsyncDemo2 = () => {
  const [words, setWords] = React.useState<string[]>()

  React.useEffect(() => {
    fetchWords().then(setWords)
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

export const Word = ({ id, word }) => (
  <div>
    <p>
      {id} - {word}
    </p>
  </div>
)
