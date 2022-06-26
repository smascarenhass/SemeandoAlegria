import Footer from "../../Components/Header e Footer/Footer";
import Header from "../../Components/Header e Footer/Header";



export default function Sobre(){
    return(
        <div>
            <div className="flex flex-col items-center ">
                <h1 className="text-4xl font-bold mt-10">
                    Quem somos?
                </h1>

                <p className="m-5 ml-5 mt-10 mr-5 font-semibold">
                    Fundada no dia 11/11/2014, começou como um projeto social, 
                    promovendo 2 ações mensais com o intuito de amparar crianças 
                    e adolescentes que se encontravam em situação de risco social e pessoal.

                    Com o tempo o número de ações mensais foi aumentando, assim 
                    como as áreas de atuação foram se expandindo. No dia 29/12/2017, 
                    Semeando Alegria se tornou, oficialmente, uma ONG. Atualmente ajudamos 
                    pessoas de todas as classes sociais e diversas instituições.

                    Procuramos propagar o amor de todas as formas e fazer com que as 
                    pessoas passem a olhar para o outro de igual para igual. Acreditamos 
                    que pequenas ações rotineiras transformam vidas e que, quando o ser 
                    humano transforma vidas, ele se transforma.

                    Agora, com quatro áreas de atuação – infância e adolescência, 
                    terceira idade, pessoas em situação de rua e intervenções urbanas – 
                    buscamos, por meio de ações solidárias, mudar comportamentos, oferecer 
                    novas oportunidades para pessoas de baixa renda e semear a alegria.
                </p>

            </div>
                
            <div className="flex flex-col items-center mt-10 ml-5 mr-5">
                <div className="flex ">
                    <h1 className="text-4xl font-bold ml-2 mb-5">
                        Qual a nossa missão?
                    </h1>
                </div>

                <div className="flex justify-end">
                    <p className=" font-semibold">
                        Por meio de ações solidárias buscamos mudar comportamentos, 
                        amparar pessoas em situação de risco social e pessoal, e oferecer 
                        novas oportunidades para pessoas de baixa renda.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h1 className=" text-4xl font-bold mt-10">
                    Qual a nossa visão?
                </h1>

                <p className="mt-10 mr-5 font-semibold">
                  Uma sociedade justa com sujeitos ativos e criadores, 
                  fazendo com que a realidade seja produzida e não mais reproduzida.
                </p>

            </div>

            <div className="flex flex-col items-center">
                <div>
                    <h1 className="text-4xl font-bold mt-10">
                        Quais os nossos valores?
                    </h1>
                </div>

                <div className="flex justify-end">
                    <p className="m-5 mt-10 ml-5 mr-5 font-semibold">
                      Solidariedade, transparência, igualdade, diversidade, respeito e responsabilidade.
                    </p>
                </div>
            </div>
                <div className="h-10"></div>
        </div>
    );
};