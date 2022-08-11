import { auth } from "./firebase";
import logoFibase from './img/firebase-introduction.png'
import logo from './img/logo192.png'
import "./App.css";

export const Hompage = () => {
    return (
        <div className="App">
           <h1> Welcome To Homepage!</h1>
           <div className="logo-img"> <img src={logoFibase} alt="logo" /> ❌ <img src={logo} alt="react"/></div>
         
            <button
            style={{ width: 90 }}
            onClick={()=> auth.signOut()}
            type="submit"
            className="btn btn-primary"
          >
            Sign Out
          </button>
        </div>
    )
}