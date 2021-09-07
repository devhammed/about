addEventListener('fetch', event => {
  event.respondWith(
    handleRequest(event.request).catch(
      err => new Response(err.stack, { status: 500 })
    )
  )
})

/**
 * Handle the serverless request.
 *
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest (request) {
  const data = {
    name: 'Hammed Oyedele',
    birthday: 'October 16',
    age: new Date().getFullYear() - 2000,
    skills: {
      javascript: ['React.js', 'Svelte'],
      php: ['Laravel', 'WordPress'],
      dart: ['Flutter']
    },
    bio:
      'Experienced software developer with a strong background in developing award-winning web and mobile applications for diverse clients.'
  }

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'X-Powered-By': data.name,
      'Content-Type': 'application/json'
    }
  })
}
