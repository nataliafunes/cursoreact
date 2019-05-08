import React from "react"


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            contador : 0,
            items : [1,2,3]
        }
        this.sumarContador = this.sumarContador.bind(this)
        this.print = this.print.bind(this)
    }

    sumarContador(){
        console.log(this)
    }

    print(elemento,objetoEvento){
        console.log(arguments)
        console.log(elemento,objetoEvento)
    }

    render(){
        return(
            <React.Fragment>
                <header></header>
                <main>{this.state.contador}</main>
                <button onClick={this.sumarContador}>sumar</button>
                <ul>
                    {
                       this.state.items.map((item,i)=>{
                           return <li key={i} onClick={this.print.bind(this,item)}>{item}</li>
                       }) 
                    }
                </ul>
                <footer></footer>
            </React.Fragment>
        )
    }
}

export default App