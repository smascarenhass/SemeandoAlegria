import { User } from 'phosphor-react'
import { Link } from 'react-router-dom';
import Titulo from '../Titulo';
import logosemeandoalegria from 'C:/Users/Mascarenhas/Documents/Semeando Alegria/SemeandoAlegria/src/Images/logosemeandoalegria.png'

const Header =() =>{
    return(
        <div className='w-full' style={{background: '#101E24',}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 100,
                borderColor: 'black',
                marginLeft: 50,
                marginRight: 50,
            }}>
                <div className='w-20 h-20 items-center justify-center flex flex-row ml-16'>
                    <img src={logosemeandoalegria}
                       width={50}
                       className='m-5 hover:w-14'
                        />
                        <Titulo />
                </div>

                <div className='mr-60'>
                    <Link className='m-2
                    hover:border-b-2 transition-all'
                    style={{color: 'white'}} to='/'>Home
                    </Link>

                    <Link className='m-2
                    hover:border-b-2 transition-all'
                    style={{color: 'white'}} to='Sobre'>Sobre
                    </Link>

                    <Link className='m-2
                    hover:border-b-2 transition-all'
                    style={{color: 'white'}} to='Donate'>Doações
                    </Link>

                    <Link className='m-2
                    hover:border-b-2 transition-all'
                    style={{color: 'white'}} to='/Eventos'>Eventos
                    </Link>
                </div>
                   
            </div>
        </div>
    );
};

export default Header;