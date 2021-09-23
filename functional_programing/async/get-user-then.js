import fetch from 'node-fetch'

// const getUser = (userId) => 
//   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(`${response.status} Error`)
//       } else {
//         return response.json()
//       }
//     }
//   )

const getUser = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!response.ok) {
    throw new Error(`${response.status} Error`)
  }

  return response.json()
}

console.log('--- Start ---')

// getUser(2).then((user) => console.log(user))
//           .catch(error => console.log(error))
//           .finally(() => console.log('--- Completed ---'))

const main = async () => {
  try {
    const user = await getUser(2)
    console.log(user)
  } catch(error) {
    console.error(error)
  } finally {
    console.log('--- Completed ---')
  }
}

main()
