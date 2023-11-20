import Navbar from'./components/Navbar';
import Wishlist from './components/wishlist';
// import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Wishlist/>

      </header>
    </div>
  );
}

export default App;
