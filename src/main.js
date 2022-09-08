// Находим элемент с файлом
const fileInput = document.getElementById('avatar')
const form = document.getElementById('form')

function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData()

  // Добавляем файлы из инпута к данным
  for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i]
    formData.append('avatar', file, file.name)
  }

  // Отправляем файлы на сервер
  fetch('upload', {
    method: "POST",
    body: formData,
  })
  // show debug data from server in browser console log
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err))
}

form.addEventListener('submit', handleSubmit)
