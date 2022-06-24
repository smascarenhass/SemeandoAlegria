import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, ReactNode } from "react";
import CardArraia from 'C:/Users/Mascarenhas/Documents/Semeando Alegria/SemeandoAlegria/src/Images/CardsEvents/CardArraia.jpg'

export default function Events(){
    
    function InfoEvents(props: {
        data: ReactNode;
        name: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; 
}){
    return(
        <div className="flex flex-col items-center">
            <div>
                <h1 className="text-3xl font-bold m-2 mb-5 text-white">{props.name}</h1>
            </div>
            <div>
                <img src={CardArraia} width={300}/>
            </div>
            <div className="font-semibold mt-4 text-white">
                <p>Data: {props.data}</p>
            </div>
        </div>
    );};

    return(
        <div className="flex flex-col items-center">

            <h1 className="text-4xl font-semibold mt-5">Venha fazer parte desses maravilhosos <br/> momentos em que passamos juntos.</h1>

            <div className="flex flex-row items-center justify-center">
            
                <div
                style={{
                    backgroundColor: '#101E24',
                    width: 350,
                    height: 450,
                }}
                className="
                flex flex-col items-center justify-center
                m-20
                border-green-500 border-2 border-l-4 border-b-4
                ">
                    <InfoEvents name='Arraía' data={'20/07'} />
            
                </div>
            </div>
        </div>
        );
};