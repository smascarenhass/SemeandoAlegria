import { Heart, Activity, WhatsappLogo, Bank } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ButtonDonate = () => {

  const [ isButtonOpen, setIsButtonOpen ] = useState(false)

  function OCButton(){
    setIsButtonOpen(!isButtonOpen)
  }

  return(
      <div className='absolute bottom-5 left-5'>

        { isButtonOpen ?
        //Painel aberto
        
         <div style={{backgroundColor:'#506266',}} 
         className='flex flex-col justify-center items-center rounded-xl m-2 w-50 h-50'>
          
          <div className='flex flex-row justify-center m-2'>
            <Activity size={20}/><h1 className='text-white font-bold ml-2'>Sua ajuda é vital</h1>
            </div>

            <p className='m-5'>Nosso objetivo é levar sorriso, com sossiso no rosto!</p>

            <span className='h-5'></span>

            <Link style={{backgroundColor:'#A3AB78', color:'black', fontWeight:'bold', borderLeftWidth: 2,borderBottomWidth: 2, borderLeftColor:'#10454F', borderBottomColor: '#10454F'}} className='p-3 rounded-full' to="/PgDonates">Fazer doação!</Link>

            <span className='h-10'></span>
          
          </div> 

         : null 
         //===================================================
         }

        <button onClick={OCButton} className='
        flex
        items-center
        rounded-full
        px-3
        h-12
        group
        '
        style={{ backgroundColor:'#10454F', borderColor: '#506266', borderWidth: 2,}}
        >
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
             Ajude-nos <span className='p-1'></span>
              </span>

          <Heart className='w-6 h-6' color='red'/>


          </button>
      </div>

       );
}

export default ButtonDonate;