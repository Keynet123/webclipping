import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import Categories from "./components/Categories/Categories"
import Recipes from "./components/Recipes/Recipes"
import "./App.css"
import Promo from "./components/Promo/Promo"

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Lobster:regular" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inter:regular,500,600,700" rel="stylesheet" />
      <Header/>
      <hr style={{"height": 2, "display": "flex", "backgroundColor": "#00000010"}}></hr>
      <div className="grid">
        <Card></Card>
        <Categories></Categories>
        <Recipes></Recipes>
        <Promo></Promo>
        <div style={{minHeight: "200px"}}></div>
      </div>
    </>
  )
}

export default App
