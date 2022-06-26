import { CardsNavMissao, CardsNavSobreNos, CardsNavValores, CardsNavVisao } from "./CardsNav";
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Nav (){

    return(
        <div style={{backgroundColor: '#101E24'}} 
        className="flex flex-col m-2 mt-10
        justify-evenly rounded-2xl
        ">
            <div>
                <Link to='/'>
                    <CardsNavMissao />
                </Link>
            </div>

            <div className="mt-5">
                <Link to='/'>
                    <CardsNavVisao />
                </Link>
            </div>

            <div className="mt-5">
                <Link to='/'>
                   <CardsNavValores />
                </Link>
            </div>
        </div>
    );
};