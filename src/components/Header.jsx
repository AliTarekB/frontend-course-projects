    import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <header className="flex items-center justify-between px-10 py-3 bg-blue-300">
      <div>Home</div>
      <ul className="flex items-center gap-10">
       <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/">Order</Link>
        
       
      </ul>
     <button>Login</button>
    </header>
  )
}

export default Header
