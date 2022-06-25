import gabriela from '/src/Pages/AboutUs/Images/gabriela.jpg'
import arthur from '/src/Pages/AboutUs/Images/arthur.jpg'


export default function SobreNos(){

    return(
        <div className='flex flex-row'>
            <div style={{
                backgroundColor: '#10101E',
            
            }} 
            className='flex flex-col items-center justify-center
             text-white
             border-2 border-white'>

                <h1 className="font-bold m-3 text-4xl"> Diretoria Executiva </h1>


                <div className='flex flex-row'>
                    <div
                    style={{
                        backgroundColor: '#101E24',
                        color: 'white'
                    }}
                    className="flex flex-col items-center justify-around
                    border-2 border-blue-500 rounded-2xl w-64 h-96 m-5">
                        <h1 className='text-3xl font-bold'>Presidente</h1>
                        <div>
                            <img className='rounded-2xl border-2 border-blue-500'
                            src={gabriela} width={200}/>
                        </div>
                    </div>
                    <div
                    style={{
                        backgroundColor: '#101E24',
                        color: 'white'
                    }}
                    className="flex flex-col items-center justify-around
                    border-2 border-blue-500 rounded-2xl w-64 h-96 m-5">
                        <h1 className='text-3xl font-bold'>Vice-presidente</h1>
                        <h1 className="font-bold"> Diretoria Executiva </h1>
                        <div>
                            <img className='rounded-2xl border-2 border-blue-500'
                            src={arthur} width={200}/>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundColor: '#10101E',
            
            }} 
            className='flex flex-row border-2 border-white'>
                <div
                style={{
                    backgroundColor: '#101E24',
                    color: 'white'
                }}
                className="flex flex-col items-center justify-around
                border-2 border-blue-500 rounded-2xl w-64 h-96 m-5">
                    <h1 className='text-3xl font-bold'>Presidente</h1>
                    <h1 className="font-bold"> Diretoria Executiva </h1>
                    <div>
                        <img className='rounded-2xl border-2 border-blue-500'
                        src={gabriela} width={200}/>
                    </div>
                </div>
                <div
                style={{
                    backgroundColor: '#101E24',
                    color: 'white'
                }}
                className="flex flex-col items-center justify-around
                border-2 border-blue-500 rounded-2xl w-64 h-96 m-5">
                    <h1 className='text-3xl font-bold'>Vice-presidente</h1>
                    <h1 className="font-bold"> Diretoria Executiva </h1>
                    <div>
                        <img className='rounded-2xl border-2 border-blue-500'
                        src={arthur} width={200}/>
                    </div>
                </div>
            </div>
        </div>
    );
};