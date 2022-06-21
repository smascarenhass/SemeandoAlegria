import { User } from 'phosphor-react'
import { Link } from 'react-router-dom';
import { CardsNavSobreNos } from '../CardsNav';
import Titulo from '../Titulo';

const Header =() =>{
    return(
        <div className='w-full' style={{background: 'white', position:'fixed',}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 100,
                borderBottomWidth: 1,
                borderColor: 'black',
                marginLeft: 50,
                marginRight: 50,
            }}>
                <div className='w-20 h-20 items-center justify-center flex flex-row ml-16'>
                    <img src="https://semeandoalegria.org.br/wp-content/uploads/2017/09/logo-semeandoalegria_150.png"
                       width={50}
                       className='m-5 hover:w-14'
                        />
                        <Titulo />
                </div>
                    <div className='flex flex-col items-center'>
                        <h1
                        style={{
                            fontWeight: 'bold',
                            fontSize: 15,
                        }}
                        className='hover:text-yellow-500 mt-2'
                        >Ações que transformam. Resultados que emocionam.</h1>
                    </div>
                    <User className='m-5 hover:text-yellow-500' size={25} />
            </div>
        </div>
    );
};

export default Header;