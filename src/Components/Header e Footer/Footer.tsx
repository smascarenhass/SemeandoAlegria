import { AndroidLogo, AppleLogo, InstagramLogo,} from "phosphor-react";
import { CardsNavSobreNos } from "../CardsNav";
import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <div className="bg-black text-white flex flex-col items-center justify-between">
            <div className="bg-black text-white flex flex-row items-center">
                     <div>
                         <Link to='/SobreNos' className="flex m-2 items-center
                         hover:border-y-2 hover:border-white transition-all ease-linear">
                                
                              Sobre Nós
                              </Link>
            
                        </div>

                              <div>
                                  <div className="flex flex-col items-center">
                                      <div className="m-2 mb-2">
                                        Nossas redes sociais:
                                      </div>
                                          <a className="flex flex-row items-center" 
                                          href="https://www.instagram.com/ongsemeandoalegria/">
                                            <div className="flex flex-row items-center m-1 border-2 
                                            border-black hover:border-y-white transition-all ease-linear">
                                                <InstagramLogo width={30}/>
                                                Instagram
                                            </div>
                                          </a>
                                        <a  href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fongsemeandoalegria&e=ATMaIYiiaX1cAzHPHIPfHtTxwHWe8cmLDwQr_702JOFTu_1MZ98Wqn2gaOfYy67NJMLW4VHANJLUf8WUCw8ixA&s=1" className="flex flex-row items-center m-2">
                                        <div className="flex flex-row items-center mt-1 border-2
                                         border-black hover:border-y-white transition-all ease-linear">
                                            
                                            Link tree
                                        </div>
                                        </a>
                                  </div>
                              </div>

                              <div className="mb-1 flex flex-col items-center justify-around">
                                <div className="mb-2 p-1">Baixe nosso app e fique por dentro das novidade</div>
                                <a>
                                    <div className="bg-white text-black font-bold
                                     text-2xl flex flex-row justify-between items-center p-1 hover:p-3 transition-all ease-linear">
                                        <AndroidLogo className="m-2" width={30}/>
                                        /
                                        <AppleLogo className="m-2" width={30}/>
                                        <div className="m-1">EM BREVE</div>
                                    </div>
                                </a>
                              </div>
            
            </div>
                        <div style={{borderTopWidth: 1,}} className="bg-black w-full max-w-full">

                                <div  className="m-2">
                                            © 2022 Semeando Alegria.
                                </div>
                        </div>
        </div>
    );
};