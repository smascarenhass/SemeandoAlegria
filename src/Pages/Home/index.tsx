
import Nav from "../../Components/Nav";


 function Home(){
    return(
        <div style={{
            backgroundImage: 'url(https://raw.githubusercontent.com/smascarenhass/SemeandoAlegria/main/src/Images/homesemeandoalegria.jpeg)',
            backgroundSize: 'cover',
            }} className="flex flex-col items-center justify-center">

            
            <div className="pt-20 pb-80 flex flex-row">

                <main>

                <h1 className="m-2 mt-40 text-white text-5xl font-bold">
                       Ações que transformam <br/> Resultados que emocionam
                </h1> 
                
                </main>

            </div>
    </div>
    );
 };
 export default Home;