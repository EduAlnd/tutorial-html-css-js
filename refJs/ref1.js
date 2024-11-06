
    //OBEJETOS
    //PACOTE DE "VARIAVEIS"
    const user ={
        nome: 'Eduarda',
        idade: 18,
        email: 'ifeduarda.luiz@gmail.com'
    }
    // console.log(user)
    
    //JSON-  Notação de objeto JS
    //Cria um texto para mover um arquivo js
    //Transforma em JSON
        // let userJson= JSON.stringify(user)
        // console.log(userJson)
    //Transforma em Objeto
        // let userJS = JSON.parse(userJson)
        // console.log(userJS)

    //Como linkar uma API
    //Utiliza o fetch para pegar a API
        //fetch('https://dummyjson.com/products')
    //then para transformas JSON para Objeto
        //.then(res => res.json())
        //.then(console.log);

    //Utiliza o async para avisar que tem um await
        const funApi = async () =>{
        const res = await fetch('https://dummyjson.com/products/30') 
        //Transformando a resposta em Objeto
        const obj = await res.json();
        console.log(obj.reviews)
        }
        funApi()