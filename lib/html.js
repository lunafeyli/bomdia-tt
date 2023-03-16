//const fs = require("fs");
const messages = [
	"É sempre tempo de recomeçar. Que esta tarde te traga a força e a esperança para não desistir de seus sonhos.",
	"Nada é mais valioso do que o tempo investido naquilo que mais importa. Boa tarde!",
	"Aproveite cada hora do seu dia para torná-lo único. Uma excelente tarde para você.",
	"Que esta tarde te mostre novas oportunidades e formas de crescer e evoluir. Uma boa tarde.",
	"Aquele que persevera é o mesmo que celebra grandes conquistas. Uma tarde de vitória para você!",
	"Acredite em seu potencial e encare cada dificuldade como parte importante do caminho a ser trilhado. Grandes coisas estão por vir! Boa tarde!",
	"Tenha foco e não ligue para o que os outros têm a dizer. Você é capaz! Tenha uma tarde espetacular!",
	"O tempo certo de agir é agora. Não espere oportunidades, crie-as!",
	"Boa tarde!",
	"Seja grato por aquilo que você tem e gentil com aqueles que te cercam. Aquilo que entregamos é o que a vida nos dá. Uma tarde iluminada para você.",
	"Siga sempre em frente, com a certeza de que não há nada tão difícil que não possa ser superado. Sua força é maior do que imagina. Boa tarde!",
	"Agradeça pelo que você tem e se dedique a ser sua melhor versão. Cada dia é uma chance de sermos ainda melhores. Que tenhamos uma tarde cheia de alegrias.",
	"Cada momento do dia traz suas belezas e alegrias. Tenha uma tarde maravilhosa!",
	"Por maiores que sejam as dificuldades, que nada possa tirar sua alegria e força de viver. Uma boa tarde para você!",
	"Abrace cada nova oportunidade para ser melhor e não desista de seus objetivos. Boa tarde!",
	"A felicidade não se busca, se constrói. Que você possa enxergar a beleza nas pequenas coisas da vida. Tenha uma linda tarde.",
	"Viva intensamente cada momento do seu dia com o coração grato e com foco naquilo que importa. Boa tarde!",
	"⁠A importância do momento é quem faz a situação.\nSorria, ame, sonhe e principalmente respeite.\nViva o hoje, e o amanhã apenas sonhe, porque os sonhos são alimento da alma.\n\nBoa tarde !",
	"Boa tarde!\nTe ofereço meu carinho nessa tarde, que Deus te abençoe e te ilumine, que ventos tragam afagos na tua alma.",
	"Resistir sim, desistir nunca! Boa tarde!",
	"Boa tarde!\n\nSó em Deus podemos ter a certeza da vitória, e a nossa alegria é saber que tudo coopera para o bem daqueles que o amam. Então, já deu certo!",
	"Seu sorriso é a melhor arma para destruir todos aqueles que te invejam! Boa tarde!",
	"Boa tarde!\nMeu amigo(a), quero lhe desejar uma tarde abençoada, e lhe agradecer por ter a sua amizade. Que esta tarde seja repleta surpresas vindas de de DEUS para você.Confie no Senhor. Paciência. Ele trabalha para aqueles que nele esperam.",
	"Boa tarde!\nPassando para desejar uma tarde de Vitória, cheia da presença de Deus. Que o Poder de Deus prevaleça nessa tarde na sua vida.",
	"Só o Senhor é Rocha!\nDeus não nos abandona, nem deixa de nos abençoar. Ele quem me capacita para vencer a cada novo dia, a nossa motivação e consolo devem estar somente em Jesus. Que o Senhor e Salvador Jesus, nos proteja,que sua tarde seja maravilhosa e muito abençoada.",
	"Que seus pensamentos sejam flores\nviçosas e belas no decorrer dessa tarde..._\nQue seu coração emane sentimentos bons...\ne que os receba da vida em dobro...\nQue sua tarde seja feliz e lindamente encantadora!",
	"Boa tarde!\nE a vida fica mais bela,\nquando a colorimos\ncom amor!",
	"Para você: um coração cheio de paz, abençoado de felicidades, radiante de amor, florescendo alegrias a todos os que habitam o jardim da nossa alma!",
	"Com carinhos na alma e sorrisos lindos, florescendo emoções, nossos dias ficam ainda mais abençoados!",
	"Seja livre para sentir toda alegria dos detalhes e sinta a felicidade abraçando com carinho o seu coração!",
	"Que essa tarde nos traga renovação. Que seja produtiva e cheia de notícias boas!🙏😍🌈🌸",
	"Excelente tarde!\n\nQue seja leve, tranquila e com muita luz para todos!",
	"⁠💛 Boa tarde! Carregar consigo um coração inquieto pode favorecer descobertas incríveis e levar para lugares maravilhosos. Que a vida continue vibrando com o simples fato de existir e de ser feliz.",
	"⁠💛 Boa tarde! Lembrem: nada é em vão, quando a vida possui um sentido. Mas é preciso esforço e dedicação, para que tudo some e agregue um propósito. Cada pessoa é chamada a fazer com que sua vida valha a pena, independentemente da situação em que se encontra.",
	"⁠Boa tarde! Como é prazeroso e feliz cultivar um coração sem ressentimentos. Ah, e para administrar os desafios da vida é necessário ter valores claros, persistência e infinita Yes!",
	"Quando a tristeza vier, quando o desânimo bater, quando se esgotam as esperanças, surgem os milagres.\nNada nos ensina mais sobre recomeços ao que o nascer de um novo dia.\nOnde Jesus chega tudo novo se faz!",
	"O maior privilégio de todos os dias:\nabrir os olhos.",
	"⁠A velocidade é decorrente da pressa, assim como a chegada é o ponto inicial para a partida.",
	"⁠Preciso desesperadamente de você para me fazer feliz, e apagar esse fogo dentro de mim... Tereré estupidamente gelado... Hehe!",
	"Que o seu dia seja assim:\nsó alegria, do começo ao fim.",
	"Que faça sol ou faça chuva seja muito feliz do jeito que você quiser ou puder a vida é sua e você é quem manda.\nBoa tarde !",
	"Diante das infinitas possibilidades que a vida tem escolho viver as que me faz bem e abraço o que me faz feliz.\nBoa tarde !",
	"Sabe, o que desejo para todos nós nesse finalzinho de tarde? Muitas bençãos, paz, sorrisos e, alegria! Boa tarde com Deus no coração!",
	"Boa tarde assim, feliz, feliz, e feliz, para todos nós!",
	"Desejo a todos afagos e cócegas de borboletas na alma e um beijo em cada coração.\nBoa tarde !",
	"Há ainda tardes lindas,\ntardes cheias de flor,\nse sol,\nde mar,\nde margaridas...\n... Há sim,\ntardes cheias de vida!",
	"Tarde linda é ver que todos estão bem,com a graça de Deus...\ntarde linda é oportunidade que Deus nos dar para cumprimentarmos os amigos com uma feliz tarde.\nBoa tarde a todos !",
	"Eu te desejo uma doce tarde!\nRecheada de surpresas,\nRepleta de paz, cheia de\nalegria e otimismo, para\nque assim, voce possa vencer\nas poucos horas do dia que\nainda faltam.\nBoa Tarde!",
	"Ola amizade querida, vim correndo,\no mais rapido que eu pude e tudo\nisso sabem porque?\nPara desejar a cada um de voces\numa doce tarde, tranquila e repleta\nde paz no coraçao de cada um!",
	"Se alguém que te dizia apenas bom dia ou boa tarde parou com isso, fiques na paz,tal pessoa perdeu a oportunidade de desenvolver uma amizade com você!",
	"Boa Tarde...\nQue Deus nos conceda uma tarde abençoada, regada a muita simplicidade, harmonia e paz. Aonde quer que estejam meus amigos e familiares, que ambos tenham uma tarde de bençaos.",
	"Ser grato leva a felicidade, a gratidão ajuda nos a sentir emoções mais positivas. Boa tarde!",
	"Vou perseguir os meus sonhos e romper os meus limites, porque nada é impossível. Tudo depende da minha pessoa. Tenho que encarar tudo com um sorriso.",
	"Algumas coisas doem mais que as outras.. mas nem tudo que dói é pra nosso mal. (Injeção de realidade por exemplo.)",
	"° ೋ ♡ ೋ ° Amor , carinho , gratidão , amizade , fraternidade e paz ... somente o que for sincero e puro aos nossos corações ... hoje ... amanhã e sempre ! ° ೋ ♡ ೋ °",
	"Boa tarde!\nQue sua tarde seja alegre e contagiante, cheia de bênçãos, que a paz predomine em todo seu ser. Que o Espírito Santo de Deus, te proteja te guarde e te abençoe.",
	"Você não imagina o reboliço gigantesco que Jesus vai fazer, na sua vida. Seja profundamente impactado pelo Espírito Santo de Deus nesta tarde.",
	"Boa tarde!\nPassei para desejar à todos uma feliz e abençoada tarde cheia de surpresas vinda do Eterno e Soberano Deus. Que nada atrapalhe seus projetos para essa tarde. Que o Senhor esteja com você e toda sua familia.",
	"° ೋ ❀ ° Carinhos sinceros , levezas e simplicidade ... um coração sereno e um bocado de sorrisos para gente ! ° ೋ ❀ °",
	"° ೋ ❀ ° Deixe sempre o seu melhor pelos caminhos que passar ! Tão breve estará rodeado por um jardim maravilhoso de emoções e alegrias ! ° ೋ ❀ °",
	"♡ ° ೋ ✿ ° Então a gente agradece e sorri ... porque o bom da vida é isso , receber essas delicadezas que nos fazem florir as emoções mais lindas no coração ! ♡ ° ೋ ✿ °",
	"° ೋ ♡ ೋ ° Emoções que tocam o coração assim ... de uma forma livre , espontânea ... tão leve e doce ... não há palavras que possam traduzir a imensa satisfação e carinho que transmitem ! Somente a gratidão brilhando nos olhos e alma radiante em alegria! ° ೋ ♡ ೋ °",
	"° ೋ ✿ ° Para desejar uma tarde linda para você : DOÇURAS !!! Porque a nossa vida é linda demais para viver de amarguras! ° ೋ ✿ °",
	"Tarde tão especial, porque to viva ate agora vendo esses momentos alegres com minha família.\nBoa tarde família.",
	"⁠Boa tarde!\nVamos que vamos,\no dia já está terminando...\nViver é bom demais...\nViver é abraçar as situações e deixar fluir as emoções...\nSabe não somos apenas um corpo físico, temos um\nturbilhão de sentimentos...\nQue a razão não se perca em confusões.",
	"⁠Melhor que qualquer parabéns, Feliz Natal, Feliz Ano Novo, bom dia, boa tarde, boa sorte ou outra coisa do tipo. É você apoiar, respeitar, ouvir, e estender a mão para o próximo e para o seu inimigo!",
	"Você é importante para outras pessoas, assim como para si mesmo. Você tem um papel vital a ser exercido no destino em desdobramento do mundo.",
	"⁠Eu não vou desistir e deixá-lo ir para fora\nA estrela-guia sobre a sua cabeça\nMas quando o sol nasce\nDe repente, o mundo em silêncio,\nQuando não há mais palavras para dizer -\nAmanhecer vem",
	"Com carinho especialmente para você! Uma alma linda e radiante que possa refletir a alegria de um coração imensamente feliz!",
	"° ೋ✿ Para você uma tarde linda de sorrisos e emoções ... que em seus caminho os detalhes mais lindos possam te fazer feliz a cada instante ! Beijos anjos ! ° ೋ✿",
	"Boa tarde pras pessoas mais lindas da terra !!\nBeleza não é estética , e sim o que vc abriga em seu coração",
	"⁠Passando pra deixar um pouco de mim. Um beijo, um mimo e uma exagerada dose de amor. Boa tarde!",
	"E para hoje, que coisas boas e as bênçãos do Senhor nos alcancem.\nQue nesta tarde de sexta feira, a força do Senhor e a fé de que toda adversidade passará, nos acompanhe.\nNossa esperança é firme, pois ela está Naquele que tudo criou.\nTenha fé.\nShalom Adonai",
	"⁠Boa tarde\n\nFaça a sua boa tarde:\na paz e o amor mesmo\nque ninguém fale,\ncultive-as com afeto\nem silêncio ao seu favor.",
	"Boa tarde!\n\nUma delicada tarde\nsó de delicadezas!!",
	"Comece sua tarde com pensamentos\ne energias boas!\nQue seu coração emane sentimentos\nbons... e você receba o dobro de\nvolta!!",
	"Nessa tarde se houver chuva,\nque limpe nossa alma;\nSe houver sol que ilumine...\na nossa alma.",
	"⁠Boa tarde!\nPara a tarde:\nMais um dia para mudar.\nMudar os pensamentos, as energias, os sentimentos e tudo que não soma para a sua vida.\nQue Deus traga luz e paz interior para que você escolha o melhor para si.\nÓtima tarde pra você!",
	"⁠Boa tarde!\nPara a tarde:\nQue o dia seja lindo, cheio de paz e alegrias.\nQue Deus possa lhe abençoar e guiar perante todo o dia.\nQue os bons ventos possam lhe trazer tudo que você necessita e que aqueça sua vida.\nTenha uma linda tarde!",
	"⁠Boa tarde!\nPara a tarde:\nColoque a sua fé na frente de tudo.\nDeposite o seu amor nas atitudes.\nUse gentilezas ao falar.\nFortaleça diariamente a gratidão pela vida.\nQue hoje e sempre Deus esteja com você!\nUma tarde perfeita!",
	"⁠Boa tarde!\nPara a tarde:\nQue você sinta a leveza da vida.\nQue leve tudo com mais equilíbrio e harmonia.\nPermita que o amor faça moradia.\nE que a fé seja a sua maior fortaleza.\nAbençoada seja a sua tarde.\nUma tarde linda e feliz!",
	"⁠Boa tarde!\nPara a tarde:\nQue você tenha:\n- mais amor ao falar;\n- mais coragem ao agir;\n- mais fé ao pedir;\n- mais motivos para sorrir;\n- mais atitudes do que palavras.\nUma excelente tarde!",
	"⁠A minha dignidade vale bem mais que sua opinião\nboa tarde",
	"⁠Boa tarde:\nPara a sua tarde:\nSinta a paz, o amor e alegria.\nEscute o que diz a sua alma.\nAbra os braços para as boas energias.\nQue Deus guie e abençoe o seu dia inteirinho. Que Ele lhe cuide e abrace.\nÓtima tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nMuito amor para enriquecer o coração.\nFelicidade transbordando em sorrisos.\nGentilezas em cada atitude.\nDeus cuidando e abençoando você em cada momento do seu dia.\nIluminada tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nTranquilidade, carinho e afetos.\nPessoas que você ama ao lado.\nSorrisos sem medida.\nDeus protegendo sua casa e família.\nÓtima tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nBênçãos sem medidas.\nFelicidade enaltecida.\nAmor transbordando.\nGratidão no coração.\nDeus abençoando sua tarde e a sua semana.\nExcelente tarde!",
	"Boa tarde!\nPara a sua tarde:\nCheia de bons sentimentos e repleta de felicidade.\nCoisas boas acontecem quando você tem gratidão, faz o bem e espalha amor.\nQue Deus abençoe abundantemente a sua tarde.\nPerfeita tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nQue Deus ilumine e guie a sua tarde. Que Ele lhe conceda bons sentimentos, alegrias, saúde, amor e paz!\nPerfeita tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nOs melhores e bons sentimentos.\nQue o amor encha o seu coração de alegrias.\nE que Deus esteja com você em cada momento.\nAbençoando e guiando.\nIncrível tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nMuita saúde para o seu dia.\nAlegrias e paz no coração.\nE que Deus cuide e abençoe cada segundo do seu dia.\nPerfeita tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nUma tarde rodeada de todos que você ama. Que tenha muito amor, união, paz e felicidade.\nQue Deus abençoe o seu dia!\nMaravilhosa tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nQue você possa preencher o seu coração de fé, esperança e alegrias.\nQue Deus lhe conceda lindas bênçãos, luz para os seus caminhos para que possa lhe guiar as melhores direções.\nÓtima tarde!",
	"⁠Boa tarde!\nPara a sua tarde!\nTenha fé de que dias melhores virão. E com eles tudo que acalenta o coração.\nAcredite na sua capacidade e potencial.\nQue Deus seja o seu maior alicerce e proteção.\nE que Ele lhe conceda luz e bênçãos.\nUma perfeita tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nSeja rica em alegrias do início ao fim. Que tenha paz, amor e serenidade.\nQue tenha tudo que lhe faz bem.\nQue Deus seja o seu guia e o seu protetor. E lhe abençoe até o final do seu dia.\nUma linda tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nUm dia preenchido de alegrias, amor e paz.\nQue seja rico em coisas boas.\nQue Deus abençoe imensamente a sua tarde lhe conceda tudo que for bom.",
	"⁠Boa tarde!\nPara a sua tarde:\nQue seja linda e cheia de alegrias.\nQue tenha uma paz, amor, afetos, serenidade e gratidão.\nQue Deus possa abençoar você de todas as formas.\nUma linda tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nPensamentos positivos e boas energias.\nFelicidade, paz e prosperidade.\nDeus abençoando e cuidando dos seus passos e direções.\nUma tarde maravilhosa!",
	"⁠Boa tarde!\nPara a sua tarde:\nQue haja amor e alegria para uma tarde leve.\nBrilho e verdade no olhar.\nCarregue com você tudo que soma e transborda.\nE que o amor de Deus possa lhe abençoar sempre.\nUma perfeita tarde!",
	"⁠Boa tarde!\nPara a sua tarde:\nDesejo que você possa doar e receber amor.\nQue absorva energias do bem e da paz.\nQue permita que a felicidade lhe encontre.\nQue entregue seus pensamentos e pedidos a Deus e deixe que Ele cuide de tudo.\nUma tarde alegre!",
	"Tarde boa é preparar um lanche,um café para bate-papo com as amigas.\nBOA TARDE",
	"Boa tarde\nQuando estamos conscientes na caminhada e tropeçamos, a queda é suave e os ferimentos leves, porém fica a lição.\nAle✍️",
	"Boa tarde\nÉ extenuante sustentar uma estrutura para qual seus pilares não foram construídos,é preciso sempre reforçá-los.\nBy Ale",
	"Boa tarde, que sua tarde seja suave, alegre e cheia de conquistas. Fique com Deus assim como estou com Deus. Que a paz esteja presente nesta tarde tão agradável pra todos deste planeta chamado TERRA.",
	"Se me proponho a fazer algo, me entrego e faço o meu melhor...\nBoa tarde!!!\n#dbc",
	"Boa tarde galera, Frase do dia: A saudade não define a quantidade do amor que a pessoa sente pela outra..",
	"Boa tarde...\nQue Deus abençoe nossa\ntarde de benção!\nQue esta tarde seja repleta\nfé amor e paz!",
	"Boa tarde\nNunca é tarde para vc que eu penso desde cedo\nNunca é cedo pra vc que fico horas e horas pensando em vc até tarde\nBoa tarde",
	'"Boa Tarde para aqueles que vao lutar por sua verdade, poderam perder suas forças mas vao sempre tentar vençer. E àdeus para aqueles que vao desistir de tudo"',
	'Dê o seu melhor sempre, não custa dizer um "bom dia", um "boa tarde", nem custa dar um aperto de mão, um abraço, quem valoriza as coisas simples da vida, vive melhor e mais feliz consigo mesmo.',
	"Boa tarde hoje é mais um dia de vitoria benção e alegria saiba como aproveitar bem esse dia e os outros que viram porque a vida é curta pra aproveitar os dias com coisas desagradaveis curta bem esses dias.",
	'Boa Tarde !!!\n\n"Se em cada\nestrada do mundo\nexistir pessoas\ncomo você, o sol\nencontrará um motivo a\nmais para brilhar e\na amizade um\nmotivo justo\ne certo para existir.\nTenha uma lindo Final de Semana!\nBeijos no coração!!!',
	"Boa tarde!!\n\nÉ esta certeza que trago aqui dentro do meu coração...\n\nQue independente dos planos que faço é Deus quem vai a frente e guia meus passos ... quem me leva a caminhos mais altos...\nCaminhos de fé, de crescimento... de VITÓRIAS!!!\n\nDébora Aggio",
	"⁠Boa tarde!\nUma tarde com muita simplicidade, leveza e bons momentos.\nQue vocês tenha infinitos motivos para sorrir, muita paz no coração e pensamentos positivos.\nQue seja uma tarde abençoada!",
	"⁠Boa tarde!\nQue Deus conceda clareza e sabedoria para os seus pensamentos.\nQue cuide de você com carinho.\nQue lhe abençoe em cada momento e traga muita paz para o seu coração.\nUma tarde de muita luz, harmonia e serenidade.",
	"⁠Boa tarde!\nUma tarde bem linda, maravilhosa e cheia de momentos incríveis pra você.\nAlegre-se com o simples, leve o que for bom para o seu coração e se permita viver o dia.\nQue seja uma tarde com bênçãos e boas energias.",
	"⁠Boa tarde!\nQue os bons sentimentos cheguem até você nessa tarde.\nQue lhe preencham de amor, felicidade e muitas coisas boas.\nQue tudo aquilo que lhe faz bem, lhe abrace e lhe traga imensos sorrisos.\nE que Deus abençoe a sua tarde e lhe conceda o melhor, sempre.",
	"⁠Boa tarde!\nQue você sinta a leveza e o bom da vida.\nQue leve tudo com mais equilíbrio e harmonia.\nPermita que o amor faça moradia.\nE que a fé seja a sua maior fortaleza.\nQue seja de muitas alegrias.\nAbençoada seja a sua tarde.",
	"⁠Boa tarde!\nQue as palavras da sua tarde sejam: tranquilidade, doçura, otimismo e generosidade.\nNas próximas horas que chegam tenha bons pensamentos, alegria no coração e serenidade nas atitudes.\nQue Deus conduza a sua tarde.",
	"⁠Boa tarde!\nUma tarde cheia de tudo que lhe faz bem.\nQue as alegrias transbordem em seu coração e preencham sua vida de momentos incríveis.\nQue haja luz divina em seus caminhos e pensamentos.\nE que Deus lhe abençoe sempre e lhe dê muita sabedoria.",
	'Muito boa Tarde a todos, "Seja no que for, só se recebe na medida do que se dá." a palavra magica para esse milineo é GENEROSIDADE. Luz e Saude para voce. nada é pecado com champagne..',
	"BOA TARDE!!! Um amigo mau pode te ferir fisicamente, já o mau amigo pode te ferir mente.",
	"Boa Tarde!!! Uma mente perturbada está sempre em atividade, sendo difícil seu controle, disciplina ou tranquilidade.",
	"Boa Tarde!!! Se a construção da mente for bem resolvida,a cobiça facilmente entrará fora de controle.",
	"BOA TARDE!!!Tem pessoas que adoram ofuscar o brilho dos outros, por não saber que o seu poderá brilhar melhor.",
	"Seria muito bom se eu vivesse num mundo de pessoas civilizadas, que sabem dizer: Bom Dia, Boa Tarde, Boa Noite; sem querer bisbilhotar, por trás da cortina, aquilo que eu faço.",
	"Quando for falar de mim me chame, adoro falar de coisas maravilhosas.\nBoa Tarde",
	"Viver é ter coragem de encarar a própria vida...\nBoa tarde amigos!!!\n\nmel - ((*_*))",
	"Boa tarde amiga, que bom poder estar um segundinho com você, ainda que virtualmente! Beijos.",
	"Boa tarde amigos, Dizem so a verdade:\nPorque que o Homem nao vive sem a\nMulher? E a Mulher tambm nao vive sem o\nHomem? Si o primeiro homem consiguiu\nviver sem a mulher, porq que nos nao\npodemos?",
	"E o sol está aqui!\nDourado e varonil\nO céu anil\nCores do meu Brasil!!!\n\nBOA TARDE AMIGOS QUERIDOS!!!\n\nmel - ((*_*))",
	"Boa Tarde Amigos!\nEu desejo que a nossa TARDE seja iluminada, que o entusiasmo tome conta da gente, que a paz invada nossos lares, e que o nosso final de semana seja repleto de vitórias. bençãos e alegrias. (Priscilla Rodighiero)",
	"Não há ninguém maior do que o povo.Quando o povo quer ninguém toma.Boa tarde !",
	"Hoje o sol está sorrindo por todas as frestas e janelas...........\nBoa tarde amigos!\n\nmel - ((*_*))",
	"Boa Tarde,meu nome é Russel e eu sou um explorador da natureza.",
	"De bem com a vida\ndá bom dia ao dia que nem escuta,\ndá boa tarde a tarde que resoluta\nespera a noite que sem convite\ntermina o dia,\nmais dia,\num bom dia.",
	"Boa tarde amiga querida e amada por todos nós, ilustre e nobre amiga Francy! Estava com saudade e vim te fazer uma visitinha e trazer-te um beijinho bem de levinho, prá não tirar a tua linda maquiagem.",
	"⁠Boa tarde...\nA chuva esbraveja e ama a terra...\nA vida é perfeita...\nE o amor é infinito.",
	"⁠\nBoa tarde, anjo amigo!\n\nQue Deus derrame muitas bênçãos sobre sua vida, em todos os sentidos...\nE que ELE te conceda uma tarde cheia de paz!",
	"💖 ⁠ Boa tarde, amiga! 💖\nQue Deus te conserve assim...\nAutêntica, única, alegre e tão especial\npara mim!!!\n\nTe gosto de montãooooo... 😙",
	"⁠Não dê corda ao negativismo.\nDeixe o otimismo ser companheiro diário na sua vida.\nBoa tarde!",
	"⁠Boa tarde!\n\nViva se seja feliz. Hoje estamos aqui, amanhã podemos não mais estar. O importante dessa vida é sempre aproveitar.\n\nBeijos com carinho!",
	"⁠Boa tarde!\nPara a tarde:\nQue você transborde alegria.\nQue tenha mais empatia.\nQue veja a vida com os olhos do coração.\nE que faça da gratidão um exercício diário.\nQue as bênçãos de Deus esteja com você durante todo o dia.\nUma tarde tranquila pra você!",
	"⁠Boa tarde!\nPara a tarde:\nQue tudo que for bom caminhe a seu favor.\nQue os sorrisos aqueçam e iluminem o seu coração.\nE que haja leveza para a sua alma.\nQue Deus seja a sua força e o seu guia!\nUma abençoada tarde!",
	"⁠Boa tarde!\nPara a tarde:\nQue o seu sorriso brilhe a sua luz.\nQue o seu amor seja a sua força.\nQue a sua fé seja a sua proteção.\nE que você possa fazer da esperança morada de bons sentimentos.\nUma tarde abençoada e cuidada por Deus.\nQue a sua tarde seja linda!",
	"⁠Boa tarde!\nPara a tarde:\nInicie a tarde com bons pensamentos.\nAtraia para a sua vida boas energias, bons sentimentos.\nAlegre o seu coração. Dê paz a sua alma. E carinho para a sua mente.\nFaça por você tudo que merece.\nMuita proteção e bênçãos divinas pra você.\nUma ótima tarde!",
	"⁠Boa tarde!\nPara a tarde:\nVista o seu melhor sorriso.\nSe revista de fé e esperança\nAbrigue amor.\nEnfeite de luz os seus caminhos.\nDeixe o poder de Deus guiar você.\nUma tarde maravilhosa pra você!",
	"⁠Boa tarde!\nPara a tarde:\nQue todo o bem te cerque.\nQue todo amor te aqueça.\nQue toda a fé te fortaleça.\nQue toda toda felicidade te enalteça.\nQue todo o bem que vem de Deus te engrandeça.\nUma linda tarde!",
	"⁠Boa tarde!\nPara a tarde:\nTraga para o seu coração muito amor e felicidade. Permita que a fé lhe preencha por inteiro. Que seus pensamentos sejam positivos e construtivos. Você possui o poder de escolher o que é melhor para si.\nUma tarde maravilhosa!",
	"⁠Boa tarde!\nPara a tarde:\nEleve os seus pensamentos.\nAproveite as coisas boas que estão ao seu redor.\nValorize a sua essência.\nEspalhe pureza e gentileza.\nQue a presença de Deus aqueça o seu dia!\nUma tarde alegre!",
	"⁠Boa tarde!\nQuarta-feira:\nAbra o seu coração e permita que a felicidade chegue e fique.\nQue a paz e a harmonia façam morada na sua vida.\nMuito equilíbrio e bons pensamentos.\nE muito amor e bênçãos de Deus.\nUma tarde incrível!",
	"⁠Boa tarde !\nSexta-feira:\nO amor cura.\nA fé protege.\nA esperança fortalece.\nA felicidade ilumina.\nUma maravilhosa tarde!",
	"⁠Boa tarde!\nSábado:\nUma tarde recheada de tudo que é bom.\nCom tudo que transborda alegria ao coração.\nMuita fé para cada minuto do seu dia.\nE Deus cubrindo a tarde de bênçãos infinitas.\nTenha uma ótima tarde!",
	"⁠Boa tarde!\nDomingo:\nCerque-se de quem você ama.\nAproveite o dia com leveza e sorrisos largos.\nSinta a alegria da vida.\nQue a presença de Deus predomine em seu dia.\nQue sua seja incrível!",
	"⁠Boa tarde!\nTerça-feira:\nQue seja de muito amor.\nQue tenha muita paz.\nQue seja rica em bênçãos.\nQue seja cheia de alegrias.\nQue seja harmônica e próspera.\nQue sua terça-feira seja linda!",
	"⁠Boa tarde!\nQuarta-feira:\nEnxergue a vida com bons olhos.\nFique ao lado de pessoas que emanam o bem.\nContagie todos com a sua alegria.\nCerque-se de boas energias.\nTenha muitos momentos felizes.\nUma tarde de bons sentimentos!",
	"⁠Boa tarde!\nSexta-feira:\nSe preencha de uma imensurável fé.\nSe posicione e faça as escolhas do seu coração.\nSe atente aos pequenos momentos felizes.\nSe concentre nos seus sonhos.\nViva um dia próspero, de muitos sorrisos e muito amor.\nQue você tenha uma tarde incrível!",
];

// export const getHtml = (
// 	verticle: {
// 		book;
// 		chapter;
// 		number;
// 		text;
// 	},
// 	backgroundURL
// ) => {
// 	// const messages = [
// 	// 	"Que o dia seja leve, abençoado e iluminado, que nossa fé seja renovada. Bom dia! ☀",
// 	// 	"Que o seu hoje seja assim como a vontade de Deus; bom, perfeito e agradável. 🙌",
// 	// 	"Confie no tempo e tenha paciência, Deus age na hora certa e nos dará um bom dia abençoado. 🙏",
// 	// 	"Bom dia com Deus a frente para nos proteger e nos fazer felizes por onde quer que a gente vá. 🌞",
// 	// 	"Bom dia com bênçãos do Senhor nos mostrando a importância de perseverar no plantio, pois a colheita é certa. 🙌",
// 	// 	"Que o Senhor possa ainda nos fortalecer, pois é dEle que vem toda a motivação da qual precisamos para cada momento dessa vida! 🙏",
// 	// 	"Que possamos nos conectar às boas energias que Deus nos traz e fazer com que elas sejam nossas principais motivadoras, amém!",
// 	// 	"Que bom é acordar para mais um dia abençoado! ☀",
// 	// 	"Que possamos enxergar as coisas boas desse dia e ainda sermos gratos, acordar hoje já é uma dádiva.",
// 	// 	"Que Deus nos conceda um dia abençoado e cheio de vitórias! Bom dia! 😻",
// 	// ];

// 	return `
// 	<!DOCTYPE html>
// 	<html lang="en">
// 		<head>
// 			<meta charset="UTF-8" />
// 			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
// 			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// 			<title>Bom Dia</title>

// 			<link rel="preconnect" href="https://fonts.googleapis.com" />
// 			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// 			<link
// 				href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap"
// 				rel="stylesheet"
// 			/>
// 			<link rel="preconnect" href="https://fonts.googleapis.com" />
// 			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// 			<link
// 				href="https://fonts.googleapis.com/css2?family=Handlee&display=swap"
// 				rel="stylesheet"
// 			/>
// 		</head>
// 		<style>
// 			* {
// 				margin: 0;
// 				padding: 0;
// 				box-sizing: border-box;
// 			}

// 			body {
// 				position: relative;
// 				width: 592px;
// 				height: 592px;
// 				background-image: url(${backgroundURL});
// 				background-size: cover;
// 				background-position: center center;
// 			}

// 			h1 {
// 				font-family: "Merienda", cursive;
// 				font-size: 64px;
// 				position: absolute;
// 				top: 24px;
// 				left: 32px;
// 				color: crimson;
// 			}

// 			h2 {
// 				position: absolute;
// 				left: 32px;
// 				top: 104px;
// 				font-size: 28px;
// 				width: 80%;
// 				color: #2b2020;
// 				font-family: "Handlee", cursive;
// 				font-style: italic;
// 				text-shadow: 0px 0px 32px #fafbff;
// 			}

// 			#versiculo {
// 				position: absolute;
// 				bottom: 24px;
// 				right: 24px;
// 				width: 50%;
// 				font-size: 22px;
// 				color: #cacaca;
// 				background: #13131380;
// 				padding: 16px;
// 			}
// 		</style>
// 		<body>
// 			<h1>Boa Tarde 2°TT${"!".repeat(Math.floor(Math.random() * (3 - 1) + 1))}</h1>
// 			<h2>
// 				${messages[Math.floor(Math.random() * (messages.length - 1 - 0) + 0)]}
// 			</h2>
// 			<div id="versiculo">
// 				<p>
// 					"${verticle.text}"
// 				</p>
// 				<span>(${verticle.book} ${verticle.chapter}:${verticle.number})</span>
// 			</div>
// 		</body>
// 	</html>
// 	`;
// };

export function getHtml(
	verticle,
	backgroundURL,
	text
	) {
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Bom Dia</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap"
		rel="stylesheet"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Handlee&display=swap"
		rel="stylesheet"
	/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				position: relative;
				width: 592px;
				height: 592px;
				background-image: url(${backgroundURL});
				background-size: cover;
				background-position: center center;
			}

			h1 {
				font-family: "Merienda", cursive;
				font-size: 64px;
				position: absolute;
				top: 24px;
				left: 32px;
				color: crimson;
			}

			h2 {
				position: absolute;
				left: 32px;
				top: 104px;
				font-size: 28px;
				width: 80%;
				color: #2b2020;
				font-family: "Handlee", cursive;
				font-style: italic;
				text-shadow: 0px 0px 32px #fafbff;
			}

			#versiculo {
				position: absolute;
				bottom: 24px;
				right: 24px;
				width: 50%;
				font-size: 22px;
				color: #cacaca;
				background: #13131380;
				padding: 16px;
			}
		</style>
		<body>
			<h1>Boa Tarde 2°TT${"!".repeat(Math.floor(Math.random() * (3 - 1) + 1))}</h1>
			<h2>
				${messages[Math.floor(Math.random() * (messages.length - 1 - 0) + 0)]}
			</h2>
			<div id="versiculo">
				<p>
					"${verticle.text}"
				</p>
				<span>(${verticle.book} ${verticle.chapter}:${verticle.number})</span>
			</div>
		</body>
</html>`;
}

const entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};

export function sanitizeHtml(html) {
  return String(html).replace(/[&<>"'\/]/g, (key) => entityMap[key]);
}
