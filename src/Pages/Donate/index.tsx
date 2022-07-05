import ButtonDonate, {ButtonSaberMais } from "../../Components/ButtonsInfos";


 function Home(){
    return(
        <div 
        style={{
            backgroundImage: 'url(https://crispitanga.com.br/wp-content/uploads/2017/01/crianc%CC%A7as-felizes-1030x579.jpg)',
            backgroundSize: 'cover',
            }} className="flex flex-col items-center">
            

                <div className="m-10">
                    <h1
                    className="text-black text-6xl font-bold">
                           Seja um voluntário
                    </h1>
                </div>

                <div className="mt-10">

                    <div className="flex flex-col">
                        <div className="m-28">
                            <ButtonSaberMais/>
                        </div>
                    </div>
    
                </div>

                <div className="flex m-10 flex-row">
                    <h1 style={{
                        color: 'black',
                    }}
                    className=" text-6xl font-bold">
                            e nos a ajudar
                    </h1>
                </div>

    </div>
    );
 };
 export default Home;