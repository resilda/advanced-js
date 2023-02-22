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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    // If we do not pass a callback function that will print all posts in DOM -> getPost();
    // The third option will not be printed since getPosts() is run before createPost() based on their timeout time
    // This way, all posts will be printed after 2 seconds
    callback()
  }, 2000)
}

createPost({ title: 'Post three', body: 'This is post three' }, getPosts)
