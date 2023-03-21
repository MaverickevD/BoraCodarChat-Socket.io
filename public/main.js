import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io()
socket.io.on()
const btnSend = document.querySelector('#buttonSubmit')
const inputMessage = document.querySelector
('#InputTextMessage')
const Author = prompt('Qual seu Nome?')



function sendMessage(){
  if(inputMessage.value != ''){
    socket.emit('message', {
      message: inputMessage.value,
      name: Author
    })
    inputMessage.value = ''
    inputMessage.placeholder = 'Digite sua mensagem';
  }else{
    alert('Insira uma menssagem no campo!')
  }
  inputMessage.focus()
}

socket.on('oldMessage', (stream) =>{
  for(let msg of stream){
    if(msg.name != Author){
      criarTarefaConvidado(msg.message)
    }else{
      criarTarefaUsuario(msg.message)
    }
  }

})


socket.on('recivedMessage',data =>{
  if(data.name != Author){
    criarTarefaConvidado(data.message)
  }else{
    criarTarefaUsuario(data.message)
  }
})





function criarTarefaUsuario(value){
  const main = document.querySelector('main')
  const div = document.createElement('div')
  const span = document.createElement('span')
  div.setAttribute('id', 'divUsuario')
  span.innerText = value
  main.appendChild(div)
  div.appendChild(span)
}
function criarTarefaConvidado(value){
  const main = document.querySelector('main')
  const div = document.createElement('div')
  const span = document.createElement('span')
  div.setAttribute('id', 'divConvidado')
  span.innerText = value
  main.appendChild(div)
  div.appendChild(span)
}


btnSend.addEventListener('click', sendMessage)

inputMessage.addEventListener('keypress', e =>{
  const el = e
  if(el.keyCode === 13){
    sendMessage()
  }
})

