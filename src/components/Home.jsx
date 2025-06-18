import Content from "./Content";
import Navbar from "./Navbar";
import './css/Home.css';

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Content/>
        </div>
     );
}
 
export default Home;