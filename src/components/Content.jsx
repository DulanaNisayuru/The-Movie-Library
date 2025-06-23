import './css/Content.css';
import searchIcon from '../Assets/Icons/Search White.svg';
import movieImg1 from '../Assets/Images/Wild West.jpg';
import movieImg2 from '../Assets/Images/Batman.jpg';
import movieImg3 from '../Assets/Images/Spiderman.jpg'
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
                    <div className="top-second">
                        <h2>Collect Your Favourites</h2>
                        <div className="search">
                            <img src={searchIcon} alt="search icon" className="search-icon"/>
                            <input type="text" placeholder="Search title and add to grid" className="search-input"/>       
                        </div>
                    </div>
                    <div className="h-line2"></div>
                </div>
                
                <div className="movie-thumb">                

                    <div className="movies">
                        <img src={movieImg2} alt="movieImg1" className='movie-images'/>
                        <div className="description">
                            <h3 className='movie-name'>Batman Returns</h3>
                            <p3 className='movie-desc'>Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut…
                            </p3>
                        </div>
                    </div>
                    <div className="movies">
                        <img src={movieImg1} alt="movieImg1" className='movie-images'/>
                        <div className="description">
                            <h3 className='movie-name'>Wild Wild West</h3>
                            <p3 className='movie-desc'>Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut…
                            </p3>
                        </div>
                    </div>
                    <div className="movies">
                        <img src={movieImg3} alt="movieImg1" className='movie-images'/>
                        <div className="description">
                            <h3 className='movie-name'>The Amazing Spiderman</h3>
                            <p3 className='movie-desc'>Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut…
                            </p3>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default Content;