import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { Link } from 'react-router-dom';
import ButtonsEntrar from '../Buttons/ButtonEntrar';

const Nav = (props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return(
    <div 
    className="w-full h-4/12"
    style={{
      position: 'fixed',
        backgroundColor: 'white',

    }}>

        <div className="flex flex-row items-center justify-between">
            <Link to='/Home'>
              <img src="https://semeandoalegria.org.br/wp-content/uploads/2017/09/logo-semeandoalegria_150.png"
               width={50}
               className='m-5'
                />
            </Link>
            <h1 className='font-bold'>{props.text}</h1>

            <div className='mt-5 items-center justify-center'><ButtonsEntrar/></div>
        </div>
    </div>
  );
}

export default Nav;