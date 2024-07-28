import React, { useState } from 'react';
import ReceiptForm from './components/ReceiptForm';
import GetPoints from './components/GetPoints';
import Navbar from './components/Navbar';

function App() {
    const [view, setView] = useState('home');

    return (
        <div className="bg-gradient-to-r from-white-100 to-pink-100 min-h-screen">
            <Navbar setView={setView} />
            <div className="flex flex-col items-center justify-center pt-20 p-4">
                {view === 'home' ? <ReceiptForm setView={setView} /> : <GetPoints />}
            </div>
        </div>
    );
}

export default App;