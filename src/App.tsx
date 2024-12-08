// src/App.tsx
import './App.css';
import { useState } from 'react';
import CustomerService from './components/ui/CustomerService/CustomerService';

function App() {
  const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState<boolean>(false);

  return (
    <div className="App">
      {isCustomerServiceOpen && <CustomerService />}
      <button
        className="customer - service - button"
        onClick={() => setIsCustomerServiceOpen(!isCustomerServiceOpen)}
      >
        客服
      </button>
    </div>
  );
}

export default App;