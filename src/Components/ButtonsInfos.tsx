import { Link } from "react-router-dom";



export default function ButtonDonate(){
    return(
        <div>
             <Link to='/InfoDonate'
              style={{
                backgroundColor:'#D6D58E'
             }} 
             className="
             border-2 pl-20 pr-20 p-6 font-bold
             hover:bg-white hover:text-black hover:border-2 hover:rounded-lg hover:font-extrabold
             " 
             >
                        Doar
                    </Link>
        </div>
    );
};

export function ButtonSaberMais(){
    return(
        <div>
             <Link to='/InfoDonate'
             style={{
                backgroundColor:'#D6D58E'
             }} 
             className="
             border-2 pl-20 pr-20 p-6 font-bold
             hover:bg-white hover:text-black hover:border-2 hover:rounded-lg hover:font-extrabold
             ">
                        Saber mais
                    </Link>
        </div>
    );
};