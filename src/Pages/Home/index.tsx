import { CardsNavSobreNos } from "../../Components/CardsNav";
import Footer from "../../Components/Header e Footer/Footer";
import Header from "../../Components/Header e Footer/Header";
import Nav from "../../Components/Nav";
import Titulo from "../../Components/Titulo";


 function Home(){
    return(
        <div className="flex flex-col">
            
            <div>
                
                <main
                style={{
                    height: 700,
                    backgroundImage: 'url(https://mcdn.wallpapersafari.com/medium/41/15/gVEORe.jpg)',
                    backgroundSize: 'cover',
                    }}>

                <h1 style={{
                    position: 'absolute',
                    marginTop: 250,
                    marginLeft: 400,
                }}
                className="text-white text-6xl font-bold">
                       Ações que transformam Resultados que emocionam
                </h1> 
                <Nav/>
                </main>
            </div>
    </div>
    );
 };
 export default Home;