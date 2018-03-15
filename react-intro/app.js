
const Product = () => {
    return <li>My product</li>

}

const ShoppingList = () => {
   return (
        <ul> 
            <Product/>
            </ul>
    )
}



const App = () => {
    return ( 
        <div>
    <h1> React kaze 'Caaaoo' </h1>
    <ShoppingList/>
    </div>
    )
}

const rootEl = document.querySelector('.root')
ReactDOM.render (<App/>, rootEl)