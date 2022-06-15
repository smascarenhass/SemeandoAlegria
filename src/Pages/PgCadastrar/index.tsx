import Nav from "../../Components/components/Nav";


const PgCadastrar = () => {
  return(
    <div>
            <header>
                <Nav text= 'Venha fazer parte do nosso time!' />
            </header>
        
        <main>
            
            <input style={{borderWidth: 2, borderColor: 'yellow', borderRadius: 5}} className="w-60 m-2" type='text' placeholder='Nome'/>
            <input style={{borderWidth: 2, borderColor: 'yellow', borderRadius: 5}} className="w-60 m-2" type='password' placeholder='Senha'/>
                
         

        </main>

    </div>
  );
}

export default PgCadastrar;