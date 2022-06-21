import { AndroidLogo, AppleLogo, InstagramLogo, Link } from "phosphor-react";
import { CardsNavSobreNos } from "../CardsNav";


export default function Footer(){
    return(
        <div className="bg-black p-2 text-white flex flex-col items-start">
            <div className="bg-black p-5 text-white flex flex-row items-center">
                     <div className="flex flex-col m-5 mr-10">
                         <a className="flex flex-row items-center hover:border-y-2 hover:border-white transition-all ease-linear" href='https://semeandoalegria.org.br/equipe/'>
                                <div className="w-10 h-10 flex items-center">
                                    <CardsNavSobreNos />
                                </div>
                              Sobre Nós
                              </a>
            
                        </div>

                              <div className="border-l-2 ">
                                  <div className="flex flex-col items-center m-5 ml-10">
                                      <div className="m-2">
                                        Nossas redes sociais:
                                      </div>
                                          <a className="flex flex-row items-center" href="https://www.instagram.com/ongsemeandoalegria/">
                                            <div className="flex flex-row items-center p-2 border-2 border-black hover:border-y-white transition-all ease-linear">
                                                <InstagramLogo width={30}/>
                                                Instagram
                                            </div>
                                          </a>
                                        <a  href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fongsemeandoalegria&e=ATMaIYiiaX1cAzHPHIPfHtTxwHWe8cmLDwQr_702JOFTu_1MZ98Wqn2gaOfYy67NJMLW4VHANJLUf8WUCw8ixA&s=1" className="flex flex-row items-center m-2">
                                        <div className="flex flex-row items-center p-2 border-2 border-black hover:border-y-white transition-all ease-linear">
                                            <Link width={30} />
                                            Link tree
                                        </div>
                                        </a>
                                  </div>
                              </div>

                              <div className="ml-72">
                                <div className="m-2 p-1">Baixe nosso app e fique por dentro das novidade</div>
                                <a href="">
                                    <div className="bg-white text-black font-bold text-2xl flex flex-row p-2 hover:p-3 transition-all ease-linear">
                                        <AndroidLogo className="m-2" width={30}/>
                                        /
                                        <AppleLogo className="m-2" width={30}/>
                                        <div className="ml-8">EM BREVE</div>
                                    </div>
                                </a>
                              </div>
            
            </div>
                        <div style={{borderTopWidth: 1,}} className="bg-black w-full">

                                <div  className="m-2">
                                            © 2022 Semeando Alegria.
                                </div>
                        </div>
        </div>
    );
};