import { Link } from "phosphor-react";
import ButtonDonate, {ButtonSaberMais } from "../../Components/ButtonsInfos";
import Nav from "../../Components/Nav";


 function Home(){
    return(
        <div 
        style={{
            backgroundImage: 'url(https://www.unicef.org/brazil/sites/unicef.org.brazil/files/styles/press_release_feature/public/UN0292287.jpg?itok=AwdD2n-S)',
            backgroundSize: 'cover',
            }} className="flex flex-col">
            

                <div className="m-5">
                    <h1
                    className="text-white text-6xl font-bold">
                           Sua Doação pode salvar uma vida,
                    </h1>
                </div>

                <div className="mt-10">

                    <div className="flex flex-col ml-20 items-start ">
                        <div className="m-10">
                            <ButtonSaberMais/>
                        </div>
                    </div>
                    <div className="flex flex-col mr-20 items-end ">
                        <div className="m-10">
                            <ButtonDonate/>
                        </div>
                    </div>
                </div>

                <div className="flex m-10 ml-20 flex-row justify-end">
                    <h1 style={{
                        color: 'black',
                    }}
                    className=" text-6xl font-bold">
                           ou mudar seu rumo...
                    </h1>
                </div>

    </div>
    );
 };
 export default Home;