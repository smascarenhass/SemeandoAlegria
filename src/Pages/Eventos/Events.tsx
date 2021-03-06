import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, ReactNode } from "react";
import CardArraia from '/src/Images/CardsEvents/CardArraia.jpg'

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
        <div style={{backgroundColor: '#302828'}} className="flex flex-col items-center pb-8">

            <h1 className="text-white text-4xl font-bold mt-5">Venha fazer participar</h1>

            <div className="flex flex-row items-center justify-center mt-10
            border-t-2
            ">
            
                <div
                style={{
                    backgroundColor: '#101E24',
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