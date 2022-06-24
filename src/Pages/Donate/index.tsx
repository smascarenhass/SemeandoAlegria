import { Link } from "phosphor-react";
import ButtonDonate, {ButtonSaberMais } from "../../Components/ButtonsInfos";
import Nav from "../../Components/Nav";


 function Home(){
    return(
        <div className="flex flex-col">
            
            <div>
                
                <div
                style={{
                    height: 700,
                    backgroundImage: 'url(https://www.unicef.org/brazil/sites/unicef.org.brazil/files/styles/press_release_feature/public/UN0292287.jpg?itok=AwdD2n-S)',
                    backgroundSize: 'cover',
                    }}>

                <h1 style={{
                    position: 'absolute',
                    marginTop: 100,
                    marginLeft: 100,
                }}
                className="text-white text-6xl font-bold">
                       Sua Doação pode salvar uma vida,
                </h1> 

                <button
                className=" 
                  p-5 pl-20 pr-20 mt-56 ml-60 
                ">
                    <ButtonSaberMais/>
                </button>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: -35,
                        marginLeft: 700,
                    
                    }}>
                       <ButtonDonate/>
                    </div>

                <h1 style={{
                    position: 'absolute',
                    marginTop: 70,
                    marginLeft: 800,
                    color: 'white',
                }}
                className="text-6xl font-bold">
                       ou mudar seu rumo...
                </h1> 

                </div>

                
            </div>
    </div>
    );
 };
 export default Home;