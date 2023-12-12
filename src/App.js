// import { useEffect, useState } from 'react';
import Wishlist from './components/pages/wishlist';
import Contact from './components/pages/contact';
import Checkout from './components//pages/Checkout';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Wishlist />
                <Contact />
                <Checkout />
            </header>
        </div>
    );

}

export default App;