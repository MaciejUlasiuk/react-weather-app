import {React} from 'react';
import img1 from '../img/26383.jpg';
import img2 from '../img/123.jpg';
import img3 from '../img/1233.jpg';
import img4 from '../img/img123.jpeg';
import img5 from '../img/124.jpg'
const Header = (props) => {
    const tablica = [img1,img2,img3,img4,img5]
    
    return ( 
        <header ><img className="topimg" src={tablica[props.randomImg]} alt={tablica[props.randomImg]}></img></header>
        
     );
}
 
export default Header;