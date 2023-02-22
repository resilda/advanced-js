const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
]

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.map((post) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

// Create a new Promise
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      if (!error) {
        resolve()
      } else {
        reject('Error: Something went wrong')
      }
    }, 2000)
  })
}

// Resolve a single promise response
createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch((error) => console.log(error))

// Some new promises created
const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye')
})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (res) => res.json,
)

// Resolving all promises at once
Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values),
)

// Async await -> a way to handle responses

async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three' })
  getPosts()
}

init()

// Async await ft fetch()
// fetch() needs two .then methods, one to transform the response and one to resolve it.

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  const data = await res.json()

  console.log(data)
}

fetchUsers()
