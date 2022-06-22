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
                className="text-white text-4xl font-bold">
                       Sua Doação pode salvar uma vida,
                </h1> 

                <button
                className="bg-black border-2 text-white p-5 pl-20 pr-20 mt-56 ml-60 hover:rounded-lg hover:font-bold">
                    Saber mais
                </button>

                <div style={{
                    marginTop: -65,
                    marginLeft: 800,
                    height: 50,
                }}>
                    <button
                    className="bg-black border-2 text-white p-5 pl-20 pr-20 hover:rounded-lg hover:font-bold">
                        Doar
                    </button>
                </div>

                <h1 style={{
                    position: 'absolute',
                    marginTop: 70,
                    marginLeft: 800,
                }}
                className="text-white text-4xl font-bold">
                       ou mudar seu rumo...
                </h1> 

                </div>

                
            </div>
    </div>
    );
 };
 export default Home;