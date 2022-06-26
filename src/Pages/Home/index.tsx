import { CardsNavSobreNos } from "../../Components/CardsNav";
import Footer from "../../Components/Header e Footer/Footer";
import Header from "../../Components/Header e Footer/Header";
import Nav from "../../Components/Nav";
import Titulo from "../../Components/Titulo";


 function Home(){
    return(
        <div style={{
            backgroundImage: 'url(https://raw.githubusercontent.com/smascarenhass/SemeandoAlegria/main/src/Images/homesemeandoalegria.jpeg)',
            backgroundSize: 'cover',
            }} className="flex flex-col">
            
            <div className="mt-10 mb-80">
                
                <main>
                        <Nav/>

                <h1 className="ml-5 mt-20 text-white text-6xl font-bold">
                       Ações que transformam Resultados que emocionam
                </h1> 
                
                </main>
            </div>
    </div>
    );
 };
 export default Home;