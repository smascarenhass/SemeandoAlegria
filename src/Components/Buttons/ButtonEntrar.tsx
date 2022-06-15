import { Link } from "react-router-dom";

const ButtonsEntrar = () => {
  
    return(
        <div className='absolute top-8 right-5'>
  
           <Link 
           style={{
            backgroundColor:'#BDE038',
            color:'black', fontWeight:'bold',
             borderLeftWidth: 2,borderBottomWidth: 2, 
             borderLeftColor:'#10454F', borderBottomColor: '#10454F'
             }} 
             className='p-3 rounded-full' to="/PgCadastrar">Cadastrar-se</Link>

        </div>
  
         );
  }

export default ButtonsEntrar;