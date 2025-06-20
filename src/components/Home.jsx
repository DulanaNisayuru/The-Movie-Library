import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './css/Home.css';

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
     );
}
 
export default Home;