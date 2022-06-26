import { Heart, Activity, WhatsappLogo, Bank } from 'phosphor-react';
import { useState } from 'react';

const ButtonDonate = () => {

  const [ isButtonOpen, setIsButtonOpen ] = useState(false)

  function OCButton(){
    setIsButtonOpen(!isButtonOpen)
  }

  return(
      <div className='absolute bottom-5 left-5'>

        { isButtonOpen ?
        //Painel aberto
        
         <div className='flex flex-col justify-center items-center rounded-xl bg-red-400 m-2 w-50 h-50'>
          
          <div className='flex flex-row justify-center m-2'>
            <Activity size={20}/><h1 className='text-white font-bold ml-2'>Sua ajuda é vital</h1>
            </div>

            <p className='m-5'>Nosso objetivo é levar sorriso, com sossiso no rosto!</p>

            <span className='h-5'></span>

            <div>
              <button className='bg-red-600 p-2 rounded-full'><span>Fazer doação</span></button>
            </div>

            <span className='h-10'></span>
          
          </div> 

         : null 
         //===================================================
         }

        <button onClick={OCButton} className='
        flex
        items-center
        bg-red-600
        rounded-full
        px-3
        h-12
        group
        '>
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
             Ajude-nos <span className='p-1'></span>
              </span>

          <Heart className='w-6 h-6' />


          </button>
      </div>

       );
}

export default ButtonDonate;