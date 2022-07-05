import { CardsNavMissao, CardsNavSobreNos, CardsNavValores, CardsNavVisao } from "./CardsNav";
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Nav (){

    return(
        <div style={{}} 
        className="flex flex-row m-2 mt-10
        justify-evenly rounded-2xl
        ">
            <div>
                <Link to=''>
                    <CardsNavMissao />
                </Link>
            </div>

            <div>
                <Link to=''>
                    <CardsNavVisao />
                </Link>
            </div>

            <div>
                <Link to=''>
                   <CardsNavValores />
                </Link>
            </div>
        </div>
    );
};