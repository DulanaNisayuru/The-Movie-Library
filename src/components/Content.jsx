import Navbar from "./Navbar";
import './css/Content.css';
import searchIcon from '../Assets/Icons/Search White.svg';
const Content = () => {
    
    return ( 
        <div className="content">
            <div className="paragraph">
                <div className="h-line"></div>
                <h1 className="header1">MOVIE LIBRARTY</h1>
                <p className="para1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua.
                </p>
            </div>

            <div className="collection">
                <div className="top">
                    <h2>Collect Your Favourites</h2>
                    <div className="search">
                        <img src={searchIcon} alt="search icon" className="search-icon"/>
                        <input type="text" placeholder="Search title and add to grid" className="search-input"/>       
                    </div>
                </div>
                <div className="h-line2"></div>

                <div className="movie-thumb">
                    <div className="movie">
                        
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default Content;