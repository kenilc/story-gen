const form = document.querySelector('form')
form.onsubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const data = {
    title: formData.get('title'),
    storyline: formData.getAll('storyline')
  }

  await fetch('http://localhost:5000/api/v1/write', {
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