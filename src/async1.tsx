import { useState } from 'react'

// Okay so lets say we need to call an async function when a user
// clicks on a button. Lets see! First, lets create a little plaything
// of a fake async function using the setTimeout global

export const fetchValue = () => {
  return new Promise<string>((res) => {
    setTimeout(() => {
      res('im a string and im happy')
    }, 1000)
  })
}

export const AsyncDemo1 = () => {
  const [value, setValue] = useState('')

  const refresh = () => {
    fetchValue().then(setValue)
  }

  return (
    <section>
      <div>{value === '' ? 'empty, alone and afraid' : value}</div>
      <button onClick={refresh}>refresh</button>
    </section>
  )
}
