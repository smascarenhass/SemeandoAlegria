import { User } from 'phosphor-react'

const Header =() =>{
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 110,
            backgroundColor: '#F5F9FA'
        }}>
            <div className='w-20 h-20 items-center justify-center'>
                <img src="https://semeandoalegria.org.br/wp-content/uploads/2017/09/logo-semeandoalegria_150.png"
                   width={50}
                   className='m-5 hover:w-14'
                    />
            </div>

                <h1
                style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                }}
                className='hover:text-yellow-500'
                >Ações que transformam. Resultados que emocionam.</h1>

                <User className='m-5 hover:text-yellow-500' size={25} />
        </div>
    );
};

export default Header;