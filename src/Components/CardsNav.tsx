import { Heart, PaintBrush , Books} from "phosphor-react";


export const CardsNavMissao = () => {
    return(
        <div 
        className="
        m-5 items-center flex-col
        w-14 h-16 justify-center border-white
        hover:border-y-yellow-200 hover:font-bold
        "
        style={{
            display: 'flex',
            flexDirection: 'column',
            borderWidth: 3,
        }}>
            <h1>Missão</h1>
            <Heart size={40}/>
        </div>
    );
};

export const CardsNavVisao = () => {
    return(
        <div 
        className="
        m-5 items-center flex-col
        w-14 h-16 justify-center border-white
        hover:border-y-yellow-200 hover:font-bold
        "
        style={{
            display: 'flex',
            flexDirection: 'column',
            borderWidth: 3,
        }}>
            <h1>Visão</h1>
            <PaintBrush size={40}/>
        </div>
    );
};

export const CardsNavValores = () => {
    return(
        <div 
        className="
        m-5 items-center flex-col
        w-14 h-16 justify-center border-white
        hover:border-y-yellow-200 hover:font-bold
        "
        style={{
            display: 'flex',
            flexDirection: 'column',
            borderWidth: 3,
        }}>
            <h1>Valores</h1>
            <Books size={40}/>
        </div>
    );
};