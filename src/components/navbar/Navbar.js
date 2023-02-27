import img from '../../img/R.jpg'
import Navcss from './Navbar.module.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className={Navcss.logo}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={Navcss.search}>
                        <input type="text" placeholder="Seaarch here............."/>
                            <button class={Navcss.btn}>search</button>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Product">SeeData</Link></li>
                        <li><Link to="/Login">LOGIN</Link></li>
                        <li><Link to="/Signup">REGISTER</Link></li>
                
                    </ul>
                </nav>

            </header>
        </>

    );
}

export default Navbar