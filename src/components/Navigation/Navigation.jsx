import style from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
        <div className="logo">
            <img src="./images/logo.png" alt="Scoding logo"></img>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation;