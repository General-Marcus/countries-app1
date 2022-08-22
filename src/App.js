import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./Screens/ContactSrceen";
import AboutScreen from "./screens/AboutScreen";
import DetailsScreen from "./screens/DetailsSrceen";
import ContactSrceen from "./Screens/ContactSrceen";


function App() {
  return (
    <BrowserRouter> 
    
      <div>
        <header/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactSrceen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/datail" element={<DetailsScreen />} />
      </Routes></div>
    </BrowserRouter>
  );
}

export default App;