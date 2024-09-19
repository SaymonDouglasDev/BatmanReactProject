import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import './styles.css';

function Comentario(){
    return (
        <div>
            <Header/>
            <div className="Spoiler-content">
                <Link style={{textDecoration: 'none'}} to='/'>
                    <h1 class="SPOILERS">SPOILERS!</h1>
                </Link>
            </div>
            <div id="sinopse2">
            <h2 className="titulocomentarios">Batman rejuvenesce melancólico e implacável</h2>
            <h4 className="escritoracomentarios">- por Aline Pereira</h4>
            <p className="description2">
                Acertos e controvérsias caminham lado a lado quando falamos de lançamentos
                da DC nos cinemas, e esta dúvida constante colocou um peso a mais para o 
                novo Batman. A última versão do herói, com Ben Affleck, não agradou e a 
                escalação de Robert Pattinson, desde o anúncio, abriu uma discussão 
                precipitada e sem fim sobre o que o ator seria capaz de fazer. 
                Um ponto central, claro, mas há muito mais o que discutir sobre a 
                nova versão melancólica e engenhosa de Bruce Wayne.
                Com direção de Matt Reeves (Planeta dos Macacos: A Guerra), 
                Batman de 2022 traz o herói na busca pelo Charada (Paul Dano), 
                criminoso que vem dizimando figuras notáveis de Gotham e que parece 
                ter uma questão particular para resolver com o vigilante. Em paralelo 
                à investigação oficial das autoridades, Bruce Wayne explora conexões 
                no submundo da cidade que revelam a sujeira da corrupção e de uma 
                rede terrível de influências.
            </p>
            <h4 className="titulocomentarios">BATMAN (2022) TEM UMA HISTÓRIA DE ORIGEM, MAS NÃO MUITO</h4>
            <p className="description2">
                Já se passaram quase 60 anos desde que Batman apareceu nas telas pela primeira vez e, 
                uma dezena de filmes depois, escolher como e qual história contar é um desafio para 
                qualquer um que assuma o projeto. Matt Reeves escolheu um caminho interessante: 
                temos um Bruce Wayne vivendo uma fase de transição entre suas origens e a virada que 
                o fez assumir completamente o manto de Batman.
                A aparência jovem de Pattinson posiciona o herói em uma passagem importante de sua vida
                e que permite um mergulho emocional a partir do amadurecimento, um viés que apareceu 
                pouco com intérpretes mais velhos.
                Este Bruce Wayne carrega a memória de sua tragédia familiar de forma muito vívida 
                é claro que este é um fator determinante para todas as versões mais dramáticas do Batman,
                mas aqui é como se acompanhássemos o personagem ainda em uma espécie de luto e entendendo 
                como continuar a sobreviver.
                Temos não apenas um herói sisudo, mas com um sofrimento muito latente. A vulnerabilidade 
                (que nada tem a ver com fraqueza) fica visível e essa exposição torna mais natural a 
                compreensão de todos os relacionamentos que Bruce tem - com a Mulher-Gato (Zoë Kravitz), 
                Alfred (Andy Serkis), Gordon (Jeffrey Wright) e, especialmente, com seu antagonista.
            </p>
            <h4 className="titulocomentarios">CHARADA É BOM VILÃO PARA O BATMAN DE ROBERT PATTINSON</h4>
            <p className="description2">
                Contando sobre o desenvolvimento do filme, Matt Reeves deixou claro que a intenção era 
                direcioná-lo muito mais para um gênero de investigação policial e detetive do que para 
                uma “ação estilo James Bond” (foi como o cineasta definiu o roteiro que havia recebido 
                antes e recusou). A escolha do Charada, portanto, faz sentido.
                Ao contrário do exibicionismo caótico do Coringa, por exemplo, temos um personagem metódico, 
                distante e que tem uma estratégia diferente para uma agenda tão política quanto pessoal 
                ambientado em um presente mais real, o vilão usa a internet e o que se esconde nela como arma. 
                Esta combinação de características o liga muito a Bruce Wayne, e isso é ótimo, porque faz com 
                que os dois personagens andem sempre muito próximos.
                A história fica mais tensa e realista (dentro de suas possibilidades, claro) quando vilão e 
                herói parecem ser dois lados distorcidos da mesma moeda, quando têm pontos em comum em suas 
                trajetórias e o que os diferencia é o caminho que escolhem. Em algum nível, um entende o outro, 
                o que só faz alimentar o ódio e a necessidade do confronto.
                A escolha de Paul Dano para o papel é de se questionar, porque é difícil encontrar uma característica 
                muito marcante que nos conecte a ele. Não é que o trabalho seja ruim, mas já passamos por uma longa 
                lista de vilões do Batman no cinema e é fácil se lembrar da maioria deles, feito que talvez não role 
                para o ator de Pequena Miss Sunshine, especialmente se considerarmos que ele divide a tela com Colin Farrell 
                transformado em Pinguim. Este, sim, difícil de esquecer - para o bem ou para o mal.
            </p>
            <h4 className="titulocomentarios">BATMAN E MULHER-GATO: ROBERT PATTINSON E ZOË KRAVITZ SÃO UMA BOA DUPLA</h4>
            <p className="description2">
                O filme de 2022 dá um viés original e surpreendente à história da Mulher-Gato, que ganha um reforço com o ar 
                enigmático e blasè de Zoë Kravitz. A nova Selina Kyle, que vimos no cinema pela última vez com Anne Hathaway, 
                se afasta do tipo confiante e destemido que vem à mente quando pensamos na personagem, mas é quem chega mais 
                perto de parecer uma pessoa real.
                Matt Reeves dá a ela uma história própria, com motivações simples de compreender e inquestionáveis - não há 
                muito mistério quanto a esta Mulher-Gato. Mais do que uma “peça” para interagir com Bruce, Selina está intimamente 
                ligada a todo o enredo e tem participação fundamental na resolução do conflito e no amadurecimento pelo qual o herói 
                passa ao longo da história. Como era de esperar, não vemos a história dela em detalhes, mas os pontos escolhidos 
                para dar uma ideia geral funcionam - e se for permitido um palpite aqui: dificilmente ela irá embora tão cedo.
                A química entre Robert Pattinson e Zoë Kravitz também virou assunto durante a produção do filme: a dupla entregaria 
                a clássica tensão de gato-e-rato entre os personagens? Sim, mas talvez não tanto pela dinâmica entre os atores, mas 
                pela construção dos personagens no roteiro. Assim como a nova versão de Bruce Wayne, a nova Selina também combina a 
                determinação implacável com uma vulnerabilidade clara, uma agilidade fria e triste que vem mais de sua vida trágica 
                e de grandes reviravoltas do que de interesses próprios. 
            </p>
            <h4 className="titulocomentarios">ROBERT PATTINSON É UM BOM BATMAN?</h4>
            <p className="description2">
                Depois de Crepúsculo e, provavelmente pela repercussão da franquia, Robert Pattinson recalculou a rota completamente 
                e construiu uma carreira de produções artísticas e independentes. Com o nome fora do radar do grande público durante 
                muito tempo, é de se compreender que muita gente o avalie por seu trabalho mais famoso, mas é hora de superar: ele não 
                fica atrás da maioria de seus colegas do universo dos heróis no cinema e traz particularidades que se encaixam na visão 
                de seu diretor.
                Quando foi escalado como o vampiro Edward da saga adolescente, há 15 anos, o ar melancólico de Robert Pattinson foi 
                destacado pelo produtor envolvido na escolha do elenco. Não há palavras melhores para defini-lo até hoje e é justamente 
                aí que as opiniões podem se dividir. Não é difícil entender que o jeito distante dificulte a simpatia pelo ator, como 
                “pessoa física”, e por seus personagens - o que abre espaço para uma percepção e interpretação muito subjetivas.
                Pattinson cumpre à risca o que Matt Reeves queria e esperava de seu novo protagonista ao escolher o início da "carreira" 
                de Bruce Wayne como Batman. É uma versão menos enérgica do personagem, mas talvez justamente essa certa apatia torne mais 
                humano o Batman de Robert Pattinson. Faz completo sentido que as experiências traumáticas que ele viveu, a reclusão e a 
                pouquíssima habilidade social tenham tornado Bruce Wayne tão introspectivo - e triste.
                Vale notar que não falta pancadaria em cenas muito gráficas, obscuras e que trazem o clima do gênero de terror, com uma 
                violência que vem, acima de tudo, dessa escuridão e do espírito de vingança que há dentro dele e que é quase incontrolável. 
                A história do novo filme é profundamente pessoal para Bruce Wayne e definitiva para a pessoa que ele está a caminho de se tornar. 
                Tamanha transformação só é possível quando as estruturas internas estão desorganizadas - e as peças, enfim, se encaixam. 
            </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Comentario;