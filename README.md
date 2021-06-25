# NLW_Together
Semana NLW/Together

## Projeto
O Projeto tem como foco a criação de uma página de perguntas e respostas 
Tecnologias usadas até o momento - HTML, CSS, Node.js

### Aula 01,02
Nas primeiras foram voltadas para a criação do layout das paginas, onde aprendi muita coisa interessante como essas abaixo:

(as informações abaixo funcionam como um lembrete para mim, talvez sómente eu mesmo entenda... kkk)

*
-------------------- HTML

--
- sempre colocar label nos inputs mesmo que não for usar, pela acessibilidade (esconder no css);
<label class="sr-only" for="room-id">Código da sala</label>
<input type="number" id="room-id" placeholder="Código da sala">

-------------------- CSS

--- boas práticas para layouts (naturalmentes responsivos).
--
- macete para ajustar os tamanhos para rem.
*{
font-size: 62.5%; === 10%;
}

ex: h1 deveria ter 28px - com a pagina em 10%, eu preciso colocar somente 2.8rem
h1{
	font-size: 2.8rem; == 28px
}
h2{
 font-size: 2.1rem; == 21px
}

input{
	border-radius: .8rem; == 8px
}

--
- normalmente colocado no botão para não desalinhar as coisas,
line-height: 0;

--
- efeito que meio que clareia o elemento 
button, .button{
	transition: filter .2s;
}
button:hover, .button:hover{
    filter: brightness(1.2);

}

--
- Tambem é possivel selecionar os elementos assim
button > img
.button > img{
    
}

--
- quando a tela estiver no menor tamanho mantenha 14px o font-size, quando a tela estiver no maior tamanho mantenha 2vw de font-size.
body, button, input, textarea{
    /* intervalo de tamanho */
    font-size: clamp(14px, 1.6rem, 2vw);
	/*tbm é adicionado aqui a font-family*/
	font-family: alguma font;
}
outro exemplo:
main h2 {
    font-family: 'Poppins', sans-serif;
    color: var(--black);
    font-size: clamp(20px 5vw 2.8rem);
    margin-bottom: 2.4rem;
}


--
- Escondendo o label sr-only e tirando a barra de rolagem
.sr-only{
    /* escondendo o sr-only */
    position: absolute;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
}

--
- Coloca a imagem por completo dentro do tamanho da div
background: url('/assets/home-bg-img.svg') no-repeat top/contain;


--
- De preferencia ao menor (garantir que ele não vá quebrar a tela e nem fugir da tela)
main .container{
    width: min(36.3rem 100%);
}


--
- informar que é no eixo x
background-position-x: -10rem;


--
- ajustar um textarea
#question-form form textarea {
    resize: none;
    background: transparent;
    outline: none;
    width: 100%;
}


--
- selecionando o primeiro e o terceiro filho
.separator div:nth-child(1),
.separator div:nth-child(3)


--
- o + tem como objetivo selecionar o irmão (traduzindo= selecione o a e pegue o irmão dele)
assim as modificações só seram aplicadas no somente neste unico seletor(o irmão).
.question-wrapper .actions > a + a{
    margin-left: 2.4rem;
}

--
- para uma palavra grande não quebrar o layout
word-break: break-word;

--
- Dica de tamanho para modal
.modal-wrapper .modal{
    width: min(59rem, 90%);
}
*

## aula 03
Na terceira aula foi a minha introdução ao Node.js, que eu acha ser complicado, porém foi bem tranquilo de entender e 
até para fazer algumas alterações que não estavam no projeto da aula. acredito que não irei ter muita dificuldade.

*
---------- Pontos para recordar

instalar o node global ou somente no arquivo - preferencia global
intalar 0 ejs
instalar o express


src/server.js
// importar o express
const express = require('express')
// express iniciado
const server = express()

//escolhendo uma porta 
server.listen(3000,()=>console.log('teste'))

- no terminal

node src/server.js

--
- Node não roda arquivo .html - foi renomeado para .ejs 


--
- para informar rotas
src/routes.js

const express = require('express')

// route guarda todas as funcionalidades de rotas que o express tem
const route = express.Router()

// informando rota
route.get('/', (req , res) => res.render("index"))

-- Exemplo de arquivos route e server
- src/route.js
const express = require('express')

// route guarda todas as funcionalidades de rotas que o express tem
const route = express.Router()

route.get('/', (req , res) => res.render("index"))

//exportando route
module.exports = route

- src/server.js
// importar o express
const express = require('express')
// importar arquivo de rotas
const route = require('./route');
// express iniciado
const server = express()
// importar o modulo path
const path = require('path')

//informando para o express que aview engine irá ser ejs
server.set('view engine', 'ejs')

// o path pega o caminho 'join' = juntar, então ele junta pegando o __dirname(que nesse caso representa a pasta src) que é o
// caminho de onde eu estou 
server.set('views', path.join(__dirname,'views'))


//informando que pode usar as rotas
server.use(route)

//escolhendo uma porta 
server.listen(3000,()=>console.log('teste'))

--
- Nodemon - ferramenta usada para facilitar o desenvolvimento
- porém não é necessaria para o projeto funcionar 
- por isso é instalada com o '-D'
npm install nodemon -D

--
- pegar o data de um elemento
const roomId = document.querySelector('#room-id').dataset.id
*


