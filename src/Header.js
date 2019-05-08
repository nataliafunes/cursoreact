import React from "react"
import { connect } from "react-redux"

class Header extends React.Component {
    render(){
        let {links} = this.props
        return(
            <header>
                <h1>React</h1>
                <nav>
                    {links.map((link,i)=>
                        <a key={i} href="#">{link}</a>
                    )}
                </nav>
            </header>
        )
    }
}


/*
let mapStateToProps = store => {
    return {
        links:store.links
    }    
}
*/
let mapStateToProps = store => ({
        links:store.links
})
//HOC = High Order Component
//export default connect(store=>({links:store.links}),null)(Header)
export default connect(mapStateToProps,null)(Header)