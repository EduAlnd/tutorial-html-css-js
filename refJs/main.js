const allProducts = async()=>{
    const res = await fetch('https://dummyjson.com/products');
        const produtos = await res.json();
        const main= document.getElementById('main')
        main.innerText=`<p>Texto</p>`
        console.log(main)
}
allProducts()