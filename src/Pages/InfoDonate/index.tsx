import { Bank, Money } from "phosphor-react";



function InfoDonate(){
    return(
        <div style={{backgroundColor: '#5e636e',}} className="flex flex-col items-center">

            <h1 className="text-3xl text-white font-bold mt-5 m-2">
                Todas as doações são validas.
            </h1>

            <h1 className="text-3xl text-white font-bold m-2">
                O que é pouco pra um pode ser muito para o outro...
            </h1>

            <div
            className="flex items-center justify-center">
                <div style={{backgroundColor: '#D6D58E',}}
                className="
                font-semibold border-2 border-b-4 border-l-4 border-black
                rounded-xl m-10
                flex flex-col items-center
                ">
                    <div className="flex flex-col items-center m-5">
                        <div className="mb-5">
                            <Bank size={40}/>
                        </div>
                        <h1 className="text-2xl mb-10">
                            Conta Bancaria
                        </h1>
                        <div className="flex flex-row">
                            <p className="font-bold">Banco:</p><p className="ml-2 font-semibold">Bradesco</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <p className="font-bold">Agencia:</p><p className="ml-2 font-semibold">2510-0</p>
                        </div>
                        <div className="flex flex-row mt-1">
                            <p className="font-bold">Conta:</p><p className="ml-2 font-semibold">16781-9</p>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor: '#D6D58E',}}
                className="
                font-semibold border-2 border-b-4 border-l-4 border-black
                rounded-xl flex flex-col items-center
                ">
                    <div className="flex flex-col items-center m-5">
                        <div className="mb-5">
                            <Money size={40}/>
                        </div>
                        <div className="flex items-center flex-col">
                            <h1 className="text-2xl mb-5">
                                Pix
                            </h1>
                            <div className="flex flex-row">
                                <p className="font-bold">CNPJ:</p><p className="ml-2 font-semibold">29334267/0001-05</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoDonate;