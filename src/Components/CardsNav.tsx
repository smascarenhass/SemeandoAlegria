import { Heart, PaintBrush , Books, UsersThree} from "phosphor-react";
import { useState } from "react";




export const CardsNavMissao = () => {

        const [cardOpen, setCardOPen] = useState(false)
    
        function AbrirCard(){
            setCardOPen(!cardOpen)
        };

    return(

        <div className="flex flex-col items-center">

            <div onClick={AbrirCard}
            className="
            m-5 items-center flex-col
            w-14 h-16 justify-center
            hover:border-b-yellow-200 hover:font-bold transition-all ease-in-out
            "
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
            }}>
                <h1>Missão</h1>
                <Heart size={40}/>

            </div>

            { cardOpen &&
            
            <div 
            style={{borderRadius: 12}}
            className="bg-red-100 w-96 h-48 flex items-center flex-col border-2 border-yellow-300">
                <h1 className="mt-4 text-2xl font-bold">Nossa Missão é:</h1>
                <p className="m-5">Por meio de ações solidárias, buscamos mudar comportamentos, amparar pessoas em situação de risco social e pessoal, e oferecer novas oportunidades para pessoas de baixa renda.</p>
            </div> }

        </div>
    );
};

export const CardsNavVisao = () => {

    const [cardOpen, setCardOPen] = useState(false)
    
    function AbrirCard(){
        setCardOPen(!cardOpen)
    };

    return(
        <div className="flex flex-col items-center">
            <div onClick={AbrirCard}
            className="
            m-5 items-center flex-col
            w-14 h-16 justify-center
            hover:border-b-yellow-200 hover:font-bold transition-all ease-in-out
            "
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
                }}>
                <h1>Visão</h1>
                <PaintBrush size={40}/>
            </div>
            
            { cardOpen &&
            
                <div 
                style={{borderRadius: 12}}
                className="bg-red-100 w-96 h-48 flex items-center flex-col border-2 border-yellow-300">

                    <h1 className="mt-4 text-2xl font-bold">Visamos para o nosso futuro</h1>
                    <p className="m-5">Uma sociedade justa com sujeitos ativos e criadores, fazendo com que a realidade seja produzida e não mais reproduzida.</p>
        
                </div> }
        </div>
    );
};

export const CardsNavValores = () => {

    const [cardOpen, setCardOPen] = useState(false)
    
    function AbrirCard(){
        setCardOPen(!cardOpen)
    };

    return(
        <div
        style={{borderRadius: 12}} 
        className="flex flex-col items-center">
            <div onClick={AbrirCard}
            className="
            m-5 items-center flex-col
            w-14 h-16 justify-center
            hover:border-b-yellow-200 hover:font-bold transition-all ease-in-out
            "
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
            }}>
                <h1>Valores</h1>
                <Books size={40}/>
            </div>

            { cardOpen &&
            
            <div 
            style={{borderRadius: 12}}
            className="bg-red-100 w-96 h-48 flex items-center flex-col border-2 border-yellow-300">
                <h1 className="mt-4 text-2xl font-bold">O que temos como valores</h1>
                <p className="m-5">Solidariedade, transparência, igualdade, diversidade, respeito e responsabilidade.</p>
            </div> }

        </div>
    );
};

export const CardsNavSobreNos = () => {

    return(
        <div 
        className="
        m-3 items-center flex-col
        w-4 h-6 justify-center border-0
         hover:font-bold hover:w-2 hover:h-4 
          transition-all ease-in-out
        "
        style={{
            display: 'flex',
            flexDirection: 'column',
        }}>

            <UsersThree size={40}/>

        </div>
    );
};