import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from './Components/Navbar/Hero/Hero';
import Products from './Components/Navbar/Products/Products';
import {productData, productDataTwo} from './Components/Navbar/Products/Data';
import Feature from './Components/Navbar/Features/Feat';
import Footer from './Components/Navbar/Footer/Foot';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature/>
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer/> 
    </Router>
  );
}

export default App;
