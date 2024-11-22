const openModal= (id) =>{
    const modal = document.querySelector(id)
    modal.style.display= 'flex'
}
const closeModal= (event, id)=>{
    const modal = document.querySelector(id)

    if(event?.target?.className ==='modal')
        return modal.style.display= 'none'
    
    if(event === null)
        return modal.style.display= 'none'
}


const addCard = (event) =>{
    //Previne que a pagina de recarregar, ao apetar o botão
    // Valores do form
    event.preventDefault()
    //Dados editados
    const urlLogo = event.target.querySelector('#urlLogo').value
    const nameCompany = event.target.querySelector('#nameCompany').value
    const card = event.target.querySelector('#card').value
    const quantity = event.target.querySelector('#quantity').value
    const closeValue = event.target.querySelector('#closeValue').value

    //Objeto para comparação
    const cardData = {
        urlLogo,
        nameCompany,
        card,
        quantity, 
        closeValue 
    }
    addOrUpdateCard(cardData)
    closeModal(null, '#modal-add-card')
    event.target.reset()
}
// MODAL CARD OPTIONS
const showCardOptions = (event) => {
    const cardOptions = event.target.querySelector('.cardOptions')
    cardOptions.style.display = 'flex'
}
const hideCardOptions = (event) => {
    const cardOptions = event.target.querySelector('.cardOptions')
    cardOptions.style.display = 'none'
}
// CARD OPTIONS
const removeCard = (event) => {
    const selectedCard = event.target.closest('.card')
    selectedCard.remove()
}
const editCard = (event) =>{
    //Pegando os valores
    const selectedCard = event.target.closest('.card')
    const urlLogo = selectedCard.querySelector('header img').getAttribute('src')
    const nameCompany = selectedCard.querySelector('header h4').innerText
    const card = selectedCard.querySelector('header span').innerText
    const closeValue = selectedCard.querySelector('main p span').innerText
    const quantity = selectedCard.querySelector('footer p span').innerText
    //Adicionando ao formulário
    document.querySelector('#e-urlLogo').value = urlLogo
    document.querySelector('#e-nameCompany').value = nameCompany
    document.querySelector('#e-card').value = card
    //SPLIT - Separa uma string a partir de um parametro (' '), e a transforma em uma arrar
    //Caso split()[0] mostra o primeiro objeto, caso split('', 3) mostra os 3 primeiros
    document.querySelector('#e-closeValue').value = closeValue.split(' ')[0]
    console.log(document.querySelector('#e-closeValue').value = closeValue.split(' ')[0])
    document.querySelector('#e-quantity').value = quantity
    openModal('#modal-edit-card')
}
//Enviando o Formulario de EDIT
const updateCard = (event) =>{
    event.preventDefault()
    //Dados editados
    const urlLogo = event.target.querySelector('#e-urlLogo').value
    const nameCompany = event.target.querySelector('#e-nameCompany').value
    const card = event.target.querySelector('#e-card').value
    const quantity = event.target.querySelector('#e-quantity').value
    const closeValue = event.target.querySelector('#e-closeValue').value
    //Objeto para comparação
    const cardData = {
        urlLogo,
        nameCompany,
        card,
        quantity, 
        closeValue 
    }
   addOrUpdateCard(cardData)
   closeModal(null, '#modal-edit-card')
}
const addOrUpdateCard = (cardData)  => {
    //Pega os Ids dos cards existentes
    const cardId = document.querySelector(`#${cardData.card}`)
    //UPDATE
    if(cardId){
    cardId.querySelector('header img').setAttribute('src', cardData.urlLogo)
    cardId.querySelector('header h4').innerHTML = cardData.nameCompany
    cardId.querySelector('header span').innerHTML = cardData.card
    cardId.querySelector('main p span').innerHTML = cardData.closeValue + ' '
    cardId.querySelector('footer p span').innerHTML = cardData.quantity 
    cardId.querySelector('footer p:last-child span').innerHTML = 'R$ '+ (+cardData.quantity * parseFloat(cardData.closeValue))
           
    } 
    //ADD - BAseado no edit, ou add
    else{
        const cardList= document.getElementById('card-list')
        cardList.innerHTML += `
            <div class="card" id="${cardData.card}" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
                <header>
                    <img src="${cardData.urlLogo}" alt="Logo">
                    <h4>${cardData.nameCompany}</h4>
                    <span>${cardData.card}</span>
                </header>
                <main>
                    <p>Valor: <span style="color: lime;">${cardData.closeValue} <span>▲▼</span></p>
                </main>
                <footer>
                    <p>Quantidade: <span>${cardData.quantity}</span></p>
                    <p>Posição: <span>${cardData.quantity * parseFloat(cardData.closeValue)}</span></p>
                </footer>
                <!--MODAL DE OPÇÕES DO CARD-->
                <div class="cardOptions">
                    <button style="width: 100px;" onclick="editCard(event)">Editar</button>
                    <button style="width: 100px;" onclick="removeCard(event)">Excluir</button>
                </div>
            </div>`
    }
}