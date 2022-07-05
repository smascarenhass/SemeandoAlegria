import { User } from 'phosphor-react'
import { Link } from 'react-router-dom';
import Titulo from '../Titulo';
import logosemeandoalegria from '/src/Images/logosemeandoalegria.png'

const Header =() =>{
    return(
        <div style={{background: '#101E24',}}>
            <div className='p-2' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div className='items-center justify-center flex flex-row'>
                    <img src={logosemeandoalegria}
                       width={40}
                       className='m-2'
                        />
                        <Titulo />
                </div>

                <div>
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
                    style={{color: 'white'}} to='Donate'>Ajude-nos
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