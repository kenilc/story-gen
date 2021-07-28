const form = document.querySelector('form')
form.onsubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const data = {
    title: formData.get('title'),
    storyline: formData.getAll('storyline')
  }

  const ip = '34.70.185.61'
  const port = 8000

  await fetch(`http://${ip}:${port}/api/v1/write`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
  .then(r => r.json())
  .then(lines => {
    const story = document.getElementById('story')
    story.value = ''
    for (let line of lines) {
      story.value += line + '\n'
    }
  })
}
