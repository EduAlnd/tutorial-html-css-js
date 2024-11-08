const flex= () =>{
    const modal = document.querySelector('.modal')
    modal.style.display= 'flex'
}
const fechar= (event)=>{
    const fecha = document.querySelector('.modal')
    console.log(event.target.Classname)
    if(event.target.Classname ==='modal')
    fecha.style.display='none'
    if(event.target.Classname=== undefined)
    fecha.style.display='none'

}