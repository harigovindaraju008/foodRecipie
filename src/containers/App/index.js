
// global Config css
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.min.css';
import './style.css';

// package
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


// containers
import Meals from '../Meals';
import Shipment from '../Shipment';
import OrderDetails from '../OrderDetails';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      {/* routers */}
        <Routes>
          <Route path="/" element={<Meals />}/>
          <Route path="/shipment" element={<Shipment/>}/>
          <Route path="/orderDetails" element={<OrderDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
