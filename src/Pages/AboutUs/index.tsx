import gabriela from '/src/Pages/AboutUs/Images/gabriela.jpg'
import arthur from '/src/Pages/AboutUs/Images/arthur.jpg'
import daniel from '/src/Pages/AboutUs/Images/daniel.jpg'

export default function SobreNos(){

    return(
        <div style={{backgroundColor: '#10101E',}} className=' flex flex-col items-center'>

            <div style={{backgroundColor: '#10101E',}} 
            className='flex flex-col items-center justify-center
             text-white m-5'>

                <h1 className="font-bold text-4xl m-5"> Diretoria Executiva </h1>


                <div className='flex'>
                    <div style={{backgroundColor: '#101E24',color: 'white'}}
                    className="flex flex-col items-center justify-around
                    border-2 border-blue-500 rounded-2xl m-5 p-2">
                        <h1 className='text-3xl font-bold'>Presidente</h1>
                        <div className='m-2'>
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
                    border-2 border-blue-500 rounded-2xl m-5 p-2">
                        <h1 className='text-3xl font-bold'>Vice-presidente</h1>
                        <div className='m-2'>
                            <img className='rounded-2xl border-2 border-blue-500'
                            src={arthur} width={200}/>
                        </div>
                    </div>
                </div>
            </div>






                
                <div style={{backgroundColor: '#10101E',}}
                className='flex flex-col items-center
                  text-white m-5
                 '>

                    <h1 className="font-bold text-4xl m-5"> Diretoria Executiva </h1>

                    <div className='flex flex-row items-center'>
                        
                        <div
                        style={{backgroundColor: '#101E24',color: 'white'}}
                        className="flex flex-col items-center justify-around
                        border-2 border-blue-500 rounded-2xl m-5">
                            <h1 className='text-3xl font-bold'>Presidente</h1>
                            <div className='m-3'>
                                <img className='rounded-2xl border-2 border-blue-500'
                                src={arthur} width={200}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor: '#10101E',}}
                className='flex flex-col items-center
                  text-white m-5
                 '>

                    <h1 className="font-bold text-3xl m-5"> Diretoria de Marketing </h1>

                    <div className='flex flex-row items-center'>
                        
                        <div
                        style={{backgroundColor: '#101E24',color: 'white'}}
                        className="flex flex-col items-center justify-around
                        border-2 border-blue-500 rounded-2xl m-5">
                            <h1 className='text-3xl font-bold'>Presidente</h1>
                            <div className='m-3'>
                                <img className='rounded-2xl border-2 border-blue-500'
                                src={daniel} width={200}/>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};