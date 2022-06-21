import { CardsNavSobreNos } from "../../Components/CardsNav";
import Footer from "../../Components/Header e Footer/Footer";
import Header from "../../Components/Header e Footer/Header";
import Nav from "../../Components/Nav";
import Titulo from "../../Components/Titulo";


 function Home(){
    return(
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            
            <div className="mt-28">
                <Nav/>
                <main>
                    <p className="items-center justify-center m-20">
                    Infância e Adolescência
                Oferecer amparo a crianças e adolescentes que se encontram em situação de risco social e pessoal e/ou se encontram em desigualdade social, através de atividades que promovam o bem-estar, a melhora da autoestima e ajudem no desenvolvimento psicológico e afetivo sadio.
                
                Utilizamos o lúdico como ferramenta recreativa, terapêutica e educacional. Crianças e adolescentes se tornam protagonistas, com liberdade e autonomia para explorarem os materiais e espaços, muitas vezes novos, e se expressarem da forma que quiserem.
                
                Fazemos do brincar um elo entre o sujeito com sua realidade interior e do sujeito com a realidade externa. Com essas novas oportunidades muitas vezes exploramos a cultura do país e conseguimos difundir conhecimentos associados à melhora da educação, impactando de forma positiva a vida de crianças e adolescentes.
                
                mesa-com-lapis-de-cor-pr-tras-mulher-ensinando-criancas
                ALEGRIA EM APRENDER
                Utilizando o espaço do Centro Espírita Irmã Sheilla – CEIS, oferecemos reforço escolar para crianças e adolescentes que frequentam alguma escola pública de Niterói. Nossas aulas buscam propiciar a melhora das notas, o estímulo ao estudo e a troca e posicionamento crítico.
                
                Beneficiários diretos:
                
                Crianças e jovens participantes do projeto.
                Beneficiários indiretos:
                
                Escolas nas quais os beneficiados estão matriculados;
                Famílias das crianças e jovens atendidos.
                
                
                Terceira Idade
                Também utilizamos o lúdico como dispositivo para nossas intervenções. Buscamos entender a complexidade do processo de envelhecimento, considerando os múltiplos fatores que interferem na qualidade de vida – físicos, psicológicos, sociais e ambientais.
                
                Lidamos com idosos que estão em algum abrigo e, normalmente, enfrentam alguma doença. As atividades são adaptadas para conseguirmos explorar o potencial de cada um, ajudando-os no resgate da sua identidade e mantendo a integração social. Conhecendo o território em que estão inseridos e a individualidade de cada um, conseguimos oferecer alternativas prazeirosas, promover saúde, ajudar na prevenção de agravos e superar desafios.
                
                 
                
                
                
                Intervenção Urbana
                Tem o objetivo de chamar a atenção de quem passa e recriar paisagens, trazendo discussões e questionamentos sobre a vida urbana cotidiana, além de transmitir mensagens e ajudar a encarar o dia de maneira divertida. Procuramos com que o sujeito perceba a realidade de maneira diferente, através de um olhar crítico e reflexivo, e prestando mais atenção no mundo ao seu redor.
                
                moradores-de-rua-artistas-recebendo-qentinha
                Pessoas em Situação de Rua
                Levando em consideração os dados mais recentes da prefeitura do Rio em que mostram que o número de moradores de rua triplicou na cidade desde 2013 e as mais atuais reportagens sobre o aumento alarmante de pessoas em situação de rua em Niterói, distribuímos, mensalmente, quentinhas para moradores de rua como forma de diminuir o problema da fome nas cidades.
                    </p>
                </main>
                <Footer />
                
                        </div>
            </div>
    );
 };
 export default Home;