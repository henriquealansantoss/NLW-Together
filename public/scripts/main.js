import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modelDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// quando clicar para abrir a modal o main que irá saber da ação
// e irá chamar o metodo open que está em modal


// Pegar todos os botões que existem com a classe check
const ckeckButtons = document.querySelectorAll(".actions a.check")
ckeckButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", handleClick)
})

// botão de excluir
const deleteButton = document.querySelectorAll('.delete');
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})


function handleClick(event, check = true) {
    event.preventDefault();

    //confirmação de ação
    const slug = check ? "check" : "delete"

    const roomId = document.querySelector('#room-id').dataset.id
    // o event leva todos os atributos do elemento que foi clicado
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)


    modalTitle.innerHTML= check ? "Marcar como lida esta pergunta" : "Excluir esta Pergunta"
    modelDescription.innerHTML = check ? "Tem certeza que você deseja marcar como lida essa pergunta?" : "Tem certeza que você deseja excluir essa pergunta?" 
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"
    // modalButton.style.backgroundColor = check ? "var(--blue)" : "var(--red)"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}


