import ButtonDonate from "../../Components/Buttons/ButtonDonate";
import Nav from "../../Components/components/Nav";



const Home = () => {
  return(
    <div>
        <Nav text='Ações que transformam. Resultados que emocionam.'/>

        <header className="flex items-center justify-center" style={{ 
            height: 400,
            backgroundColor: '#10454F',
            }}>

                    <h1 style={{color: 'yellow'}} 
                    className="font-bold text-6xl decora"> Semendo Alegria </h1>
        
        </header>

        <main>

          <div className="p-4 mt-40 h-96 w-96">.</div>

        </main>

        <ButtonDonate/>
        
    
    </div>
  );
}

export default Home;