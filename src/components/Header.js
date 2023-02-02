import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import AutoComplete from './AutoComplete';

const Header = () => {
  return (
  <div className="nav-area">
        <Link to="/" className="logo">
          <img src="https://i.pinimg.com/originals/4a/38/7b/4a387bda853bca3782d73234c786a150.png" alt=''  className='icon'></img>
          <h3 className='name'>ShopFlip</h3>
        </Link>
        <AutoComplete />
        <Navbar />
      </div>


  );
};

export default Header;
