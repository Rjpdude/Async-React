/**
 * Here are some common async and promise patters you might see around - it can
 * get confusing sometimes so I wanted to make sure you had a good resource to
 * see some concise examples.
 */

// The "await" and "async" that we see all over the place is more like symantic
// sugaring over the general dicotomy of a fulfilled or unfulfilled operation.
// Here's a promise constructed in a class syntax:

export const fetchIceCream = () => {
  return new Promise(() => {
    console.log('but i only like pistachio... and theres none left.')
  })
}

// A promise in this syntax can perform scoped execution in the callback with the
// "resolve" and "reject" arguments. And in typescript, we're going to want to provide a
// description for our futuristic value (here, it's a number):

export const fetchNumbers = () => {
  return new Promise<number>((resolve, reject) => {
    resolve(5000)
    // or
    reject(new Error('Something went wrong!'))
  })
}

// Here are two side by side examples for you to compare - they have a different syntax,
// but are (for all intensive purposes) functionally identical.

export const futuristic_futurism_lol = async () => {
  const numbers = await fetchNumbers()
  return numbers * 10
}

export const verbose_and_so_like_2015 = () => {
  return new Promise((res) => {
    fetchNumbers().then((numbers) => {
      res(numbers * 10)
    })
  })
}

// Reading code isn't as fun as coding code - lets go to async1.tsx for some examples in react.
