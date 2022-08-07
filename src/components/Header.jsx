import {Link} from 'react-router-dom';

function Header (){

    return  <nav className='#7e57c2 deep-purple lighten-1'> 
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React Food project</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
        </ul>
      </div>
    </nav>
  }
  export {Header}