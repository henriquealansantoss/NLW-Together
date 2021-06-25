export default function Modal(){
    const modalWrapper = document.querySelector('.modal-wrapper');
    //pegando o Botão cancelar
    const cancelButon = document.querySelector('.button.cancel');
    // quando clicar invoca close()
    cancelButon.addEventListener("click", close);

    function open(){
        //funcionalidade de atribuir a classe active para modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active da modal 
        modalWrapper.classList.remove("active");
    }


    return{
        open,close
    }
}