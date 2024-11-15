const openModal= () =>{
    const modal = document.querySelector('.modal')
    modal.style.display= 'flex'
}
const closeModal= (event)=>{
    const modal = document.querySelector('.modal')

    // if(event === undefined)
    //     return modal.style.display= 'none'
    
    // if(event.target.className ==='modal')
    //      return modal.style.display= 'none'
    
    if(event?.target?.className ==='modal')
        return modal.style.display= 'none'
    
    if(event === undefined)
        return modal.style.display= 'none'
}


const handleSubmitAddTicker = (event) =>{
    //Previne que a pagina de recarregar, ao apetar o botão
    event.preventDefault()
    // Valores do form
    const urlLogo = event.target.urlLogo.value
    const nameCompany = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closeValue = event.target.closeValue.value
    // card
    const cardList = document.getElementById('card-list')
    cardList.innerHTML += `
            <div class="card">
                <header>
                    <img src="${urlLogo}" alt="Logo">
                    <h4>${nameCompany}</h4>
                    <span>${ticker}</span>
                </header>
                <main>
                    <p>Valor: <span style="color: lime;">${closeValue}<span>▲▼</span></p>
                </main>
                <footer>
                    <p>Quantidade: <span>${quantity}</span></p>
                    <p>Posição: <span>${quantity * parseFloat(closeValue)}</span></p>
                </footer>
            </div>`
    closeModal()
    event.target.reset()
}
