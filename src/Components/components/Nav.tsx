import { ArrowDown } from 'phosphor-react';

const Nav = () => {
  return(
    <div 
    className="w-full h-4/12"
    style={{
        position: 'sticky',
        backgroundColor: 'white',

    }}>

        <div className="flex flex-row items-center justify-between">
            <img src="https://semeandoalegria.org.br/wp-content/uploads/2017/09/logo-semeandoalegria_150.png"
             width={50}
             className='m-5'
              />
            <h1 className='font-bold'>Ações que transformam. Resultados que emocionam.</h1>

            <button className="m-5 flex flex-row items-center">Entrar <ArrowDown size={10}/> </button>
        </div>
    </div>
  );
}

export default Nav;