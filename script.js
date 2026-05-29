const music = document.getElementById('bgMusic')
const button = document.getElementById('musicButton')

let playing = false

button.addEventListener('click', () => {

  if(!playing){
    music.play()
    button.innerHTML = '🔊'
    playing = true
  }else{
    music.pause()
    button.innerHTML = '🔇'
    playing = false
  }

})