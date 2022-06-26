import { CardsNavMissao, CardsNavSobreNos, CardsNavValores, CardsNavVisao } from "./CardsNav";
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Nav (){

    return(
        <div style={{backgroundColor: '#101E24'}} 
        className="flex flex-col m-2 mt-10
        justify-center rounded-full
        ">
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