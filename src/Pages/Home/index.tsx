import ButtonDonate from "../../Components/Buttons/ButtonDonate";
import Nav from "../../Components/components/Nav";



const Home = () => {
  return(
    <div>
        <Nav/>

        <header className="flex items-center justify-center" style={{ 
            height: 400,
            backgroundColor: '#10454F',
            }}>

                    <h1 style={{color: '#DBF227'}} 
                    className="font-bold text-6xl decora"> Semendo Alegria </h1>
        
        </header>

        <main>

        </main>

        <ButtonDonate/>
        
    
    </div>
  );
}

export default Home;