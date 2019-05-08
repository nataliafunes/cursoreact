let estadoInicial = {
    links : ["home","usuarios","contacto"],
    otraCosa : true
}

let reducer = (inicial = estadoInicial,action) => {
    switch(action){
        default :
            return inicial
    }
}

export default reducer