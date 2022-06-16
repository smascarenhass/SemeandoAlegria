import { CardsNavMissao, CardsNavValores, CardsNavVisao } from "./CardsNav";
import { Link } from 'react-router-dom'

export default function Nav (){
    return(
        <div className="flex flex-row justify-center">
            <Link to='/'>
                <CardsNavMissao />
            </Link>

            <Link to='/'>
                <CardsNavVisao />
            </Link>

            <Link to='/'>
                <CardsNavValores />
            </Link>
        </div>
    );
};