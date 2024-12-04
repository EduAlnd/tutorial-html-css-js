const onClick= (id) =>{
    const modal = document.getElementById(id)
    modal.style.display= 'flex'
 }
const closeModal= (event, id) =>{
   const modal = document.getElementById(id)

   if(event?.target?.className === 'modal'){
    return modal.style.display= 'none'
   }
   if(event === null){
    return modal.style.display= 'none'
   }
}
const onSubmit = function(event){
    event.preventDefault()
    const form = event.target
    const nome = form.querySelector('#nome').value
    const idade = form.querySelector('#idade').value
    const sexo = form.querySelector('#sexo').value
    const user = {
        nome,
        idade,
        sexo
    }
    addCard(user)
}
function addCard(user){
    const card =  document.querySelector('#quadro')
    card.innerHTML += `
            <div class="card">
                <div id="nome">
                    <h3>Nome: </h3>
                    <h4>${user.nome}</h4>
                </div>
                <div id="idade">
                    <h3>Idade: </h3>
                    <h4>${user.idade}</h4>
                </div>
                <div id="sexo">
                    <h3>Sexo: </h3>
                    <h4>${user.sexo}</h4>
                </div>
            </div>`
}

const onMouseEnter = (event) =>{
    const footer = event.target.querySelector('#mouse h3')
    footer.innerText = "OnEnter"
   
}
const onMouseLeave = (event) =>{
     const footer = event.target.querySelector('#mouse h3')
     footer.innerText = "OnLeave"
    
}