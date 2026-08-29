// ============================================================
// SE LIGA! — Escolhas que transformam
// Arquivo de conteúdo: personagens, capítulos e situações
// ============================================================

const CHARACTERS = [
  {
    id: "livia",
    name: "Lívia",
    age: 17,
    profile: "Estudante do 3º ano, sonha em ser jornalista. Presta atenção em tudo — e não deixa passar quando algo soa estranho.",
    initial: "L",
    color: "#ff6f61"
  },
  {
    id: "kaique",
    name: "Kaique",
    age: 19,
    profile: "Aprendiz numa empresa de logística. Gosta de skate e de música. Está aprendendo a se posicionar sem medo.",
    initial: "K",
    color: "#6fe7c0"
  },
  {
    id: "aisha",
    name: "Aisha",
    age: 22,
    profile: "Universitária de tecnologia. Quieta, mas segura das próprias ideias. Curte games e está sempre observando os detalhes.",
    initial: "A",
    color: "#b98cff"
  },
  {
    id: "theo",
    name: "Theo",
    age: 16,
    profile: "Aprendiz técnico, adora desenhar. Ainda está descobrindo como reconhecer sinais que sempre estiveram por perto.",
    initial: "T",
    color: "#ffcf6f"
  }
];

// Tipos de indicador: consciencia (c), empatia (e), posicionamento (p), acao (a)

// CHAPTERS_PADRAO é a trilha usada por qualquer personagem que não tenha
// uma trilha própria definida em STORYLINES (lá embaixo, no fim do arquivo).
const CHAPTERS_PADRAO = [
  // ==========================================================
  // CAPÍTULO 1
  // ==========================================================
  {
    id: 1,
    title: "É só uma brincadeira?",
    subtitle: "Machismo, misoginia e comportamentos normalizados",
    icon: "chapter1",
    situations: [
      {
        ambiente: "Escola / Capacitação",
        bubbles: [
          { who: "narrador", text: "No intervalo, um grupo de colegas comenta em voz alta sobre o corpo de uma colega enquanto ela passa pelo corredor." },
          { who: "colega", text: "Relaxa, {name}, é só brincadeira. Ela nem tá ouvindo." },
          { who: "narrador", text: "Alguns riem. Você percebe que ela ouviu, sim, e abaixou a cabeça." }
        ],
        question: "O que você faz?",
        options: [
          {
            text: "Diz ao grupo que aquele comentário não é engraçado e incomoda a colega.",
            type: "best",
            points: { c: 10, e: 12, p: 12, a: 10 },
            consequence: "O grupo fica em silêncio por um instante. Um dos colegas resmunga 'era só brincadeira', mas dois deles param de rir.",
            pareEPense: "Falar não muda o grupo inteiro na hora — mas quebra o silêncio que faz esse tipo de comentário parecer aceitável.",
            vocesabia: "Comentários sobre o corpo de alguém em público, mesmo 'de brincadeira', são uma forma comum de assédio moral. O riso coletivo costuma mascarar o desconforto real de quem é alvo."
          },
          {
            text: "Ri também, para não destoar do grupo.",
            type: "normaliza",
            points: { c: -5, e: -5, p: -5, a: 0 },
            consequence: "Ninguém questiona nada. A colega se afasta rápido, sem olhar para trás.",
            pareEPense: "Rir junto não machuca ninguém diretamente, mas ensina ao grupo que aquele tipo de comentário é aceitável — e isso tem peso.",
            vocesabia: "A repetição de piadas desse tipo sem nenhuma reação contrária é um dos mecanismos que naturalizam o assédio no dia a dia."
          },
          {
            text: "Não faz nada, mas depois procura a colega a sós para perguntar se ela está bem.",
            type: "neutro",
            points: { c: 6, e: 10, p: 3, a: 6 },
            consequence: "Ela agradece por você ter perguntado. Diz que já ouviu esse tipo de comentário várias vezes e que cansa.",
            pareEPense: "Apoiar em particular já é uma atitude importante. Ainda assim, o comentário no grupo continuou sem ser questionado ali na hora.",
            vocesabia: "Oferecer escuta é uma forma real de apoio — mas ela funciona ainda melhor quando combinada com posicionamento no momento em que a situação acontece."
          },
          {
            text: "Grita com o grupo e chama todos de machistas na frente de todo mundo.",
            type: "confronto",
            points: { c: 4, e: 2, p: 6, a: 2 },
            consequence: "A situação vira uma discussão maior, e a colega que foi alvo do comentário fica ainda mais exposta, no centro da atenção de todos.",
            pareEPense: "Se posicionar é importante, mas a forma também importa: expor a pessoa que foi assediada pode fazer com que ela se sinta pior, não melhor.",
            vocesabia: "Apoiar alguém, na maioria das vezes, funciona melhor quando o foco fica no comportamento incômodo — e não em transformar a vítima em espetáculo."
          }
        ]
      },
      {
        ambiente: "Relacionamento",
        bubbles: [
          { who: "narrador", text: "{name} está conversando sobre política com o namorado/a namorada durante o jantar em família." },
          { who: "parceiro(a)", text: "Amor, você fica tão mais bonita(o) quando não fala desses assuntos sérios... relaxa, não precisa se estressar com isso." },
          { who: "narrador", text: "Todo mundo na mesa ri. {name} sente que a opinião foi jogada para escanteio." }
        ],
        question: "O que está acontecendo aqui?",
        options: [
          {
            text: "Reconhece que a fala desvalorizou sua opinião e diz isso, com calma, na hora.",
            type: "best",
            points: { c: 12, e: 8, p: 12, a: 8 },
            consequence: "O clima fica um pouco tenso, mas depois o parceiro/a reconhece que a fala não fez sentido e pede desculpas.",
            pareEPense: "Dizer 'isso me incomodou' não é drama — é dar nome para algo que estava acontecendo silenciosamente.",
            vocesabia: "Desqualificar a opinião de alguém associando-a à aparência é uma forma comum de silenciamento, muitas vezes disfarçada de elogio."
          },
          {
            text: "Ri também e muda de assunto, achando que está sendo 'exagero' se incomodar.",
            type: "normaliza",
            points: { c: -5, e: -3, p: -6, a: -3 },
            consequence: "A conversa segue tranquila na mesa, mas {name} sai do jantar com uma sensação estranha, difícil de explicar.",
            pareEPense: "Quando engolimos esse tipo de comentário repetidas vezes, começamos a duvidar do próprio incômodo — e isso tem um nome.",
            vocesabia: "Falas que trocam 'sua opinião' por 'sua aparência' reforçam a ideia de que mulheres devem ser vistas, não ouvidas — um padrão antigo do machismo."
          },
          {
            text: "Fica em silêncio na hora, mas conversa sobre isso com o parceiro/a depois, em particular.",
            type: "neutro",
            points: { c: 8, e: 6, p: 6, a: 6 },
            consequence: "A conversa em particular acontece bem. O parceiro/a entende o ponto, mas o momento na mesa passou sem ser questionado.",
            pareEPense: "Conversar depois é válido e muitas vezes até mais produtivo. O importante é que o assunto não fique engolido para sempre.",
            vocesabia: "Situações repetidas de desvalorização, mesmo pequenas, tendem a se acumular — conversar sobre elas cedo evita que se tornem um padrão."
          }
        ]
      },
      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "Está circulando que uma colega de {name} é a favorita para assumir a liderança do setor." },
          { who: "colega mais velho", text: "Liderança pra ela? Duvido que aguente a pressão. Aqui esse cargo sempre foi mais coisa de homem, mas... brincadeira, viu." },
          { who: "narrador", text: "Alguns colegas riem sem graça. Ninguém diz nada." }
        ],
        question: "Você percebe que isso é...",
        options: [
          {
            text: "Diz, com respeito, que competência não tem gênero e que o comentário reforça um preconceito comum.",
            type: "best",
            points: { c: 12, e: 8, p: 14, a: 10 },
            consequence: "O colega mais velho fica sem graça e diz 'não foi por mal'. Mesmo assim, o comentário fica marcado — e não se repete na sua frente.",
            pareEPense: "Dizer 'não foi por mal' não muda o efeito da fala. Questionar com respeito ajuda a mostrar que esse tipo de comentário tem consequência.",
            vocesabia: "Frases como 'brincadeira' funcionam como um escudo para comentários preconceituosos — permitem dizer algo machista sem assumir a responsabilidade por isso."
          },
          {
            text: "Não fala nada, para não criar climão com um colega mais velho.",
            type: "normaliza",
            points: { c: -3, e: -3, p: -8, a: -3 },
            consequence: "O comentário passa batido. Nas próximas semanas, comentários parecidos continuam aparecendo, cada vez com mais naturalidade.",
            pareEPense: "O silêncio, principalmente vindo de várias pessoas ao mesmo tempo, é um dos fatores que mais ajuda esse tipo de comentário a se repetir.",
            vocesabia: "Ambientes de trabalho onde comentários sexistas não são questionados tendem a naturalizar barreiras invisíveis para o crescimento de mulheres na carreira."
          },
          {
            text: "Comenta com a colega, depois, que ficou sabendo do que disseram e que ela merece a vaga.",
            type: "neutro",
            points: { c: 6, e: 10, p: 5, a: 8 },
            consequence: "Ela agradece o apoio, mas comenta que gostaria que alguém tivesse falado algo na hora.",
            pareEPense: "Apoiar em particular importa. Mas em situações assim, o silêncio no momento também tem peso — vale pensar nas duas coisas juntas.",
            vocesabia: "Pesquisas sobre ambientes de trabalho mostram que colegas testemunhas que se posicionam publicamente ajudam a mudar normas de grupo mais rápido do que apoio apenas individual."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 2
  // ==========================================================
  {
    id: 2,
    title: "Você está exagerando",
    subtitle: "Violência psicológica, gaslighting e culpabilização",
    icon: "chapter2",
    situations: [
      {
        ambiente: "Relacionamento",
        bubbles: [
          { who: "narrador", text: "{name} lembra claramente do parceiro/a dizendo que não iria à festa da faculdade." },
          { who: "parceiro(a)", text: "Eu nunca disse isso. Você inventa muita coisa, sério. Às vezes acho que você não confia na sua própria memória." },
          { who: "narrador", text: "{name} sente uma insegurança estranha: será que inventou mesmo?" }
        ],
        question: "O que está acontecendo nessa cena?",
        options: [
          {
            text: "Reconhece que isso pode ser gaslighting — uma tentativa de fazer alguém duvidar da própria percepção.",
            type: "best",
            points: { c: 14, e: 8, p: 8, a: 6 },
            consequence: "Nomear o que está sentindo já ajuda {name} a confiar mais na própria memória, mesmo sem resolver a discussão na hora.",
            pareEPense: "Duvidar de si mesmo o tempo todo, numa relação, não é 'ser inseguro' — pode ser efeito de um padrão repetido de invalidação.",
            vocesabia: "Gaslighting é um padrão de manipulação psicológica em que alguém repetidamente nega fatos, sentimentos ou memórias da outra pessoa, fazendo-a duvidar da própria percepção da realidade."
          },
          {
            text: "Acredita que talvez tenha mesmo se confundido e pede desculpas.",
            type: "normaliza",
            points: { c: -8, e: -3, p: -6, a: -2 },
            consequence: "A discussão termina rápido, mas {name} sai da conversa se sentindo ainda mais insegura sobre a própria memória.",
            pareEPense: "Uma confusão pontual acontece com qualquer pessoa. O problema aparece quando isso vira um padrão repetido, criado por outra pessoa.",
            vocesabia: "Quando questionar a própria memória vira algo frequente dentro de uma relação, vale prestar atenção: pode não ser sobre 'esquecer coisas', mas sobre um padrão de manipulação."
          },
          {
            text: "Anota mentalmente que isso já aconteceu outras vezes e decide conversar com alguém de confiança sobre o assunto.",
            type: "neutro",
            points: { c: 10, e: 6, p: 6, a: 8 },
            consequence: "Ao contar para uma amiga, ela lembra de outros momentos parecidos que {name} tinha comentado antes — e o padrão começa a ficar mais claro.",
            pareEPense: "Falar com alguém de fora ajuda a enxergar padrões que, vivendo dentro da relação, ficam difíceis de perceber sozinho.",
            vocesabia: "Buscar uma segunda perspectiva de alguém de confiança é uma das formas mais eficazes de identificar um padrão de manipulação — porque quem manipula costuma agir de forma isolada, sem testemunhas."
          }
        ]
      },
      {
        ambiente: "Ambiente Familiar",
        bubbles: [
          { who: "narrador", text: "{name} chega em casa chateado(a) depois de um dia difícil e tenta desabafar com um familiar." },
          { who: "familiar", text: "Ah, para de drama. Isso não é nada perto do que eu já passei na sua idade. Você é muito sensível." },
          { who: "narrador", text: "Isso não é a primeira vez que acontece." }
        ],
        question: "O que você percebe nesse padrão?",
        options: [
          {
            text: "Reconhece que sentimentos sendo minimizados repetidamente também é uma forma de violência psicológica.",
            type: "best",
            points: { c: 12, e: 10, p: 6, a: 6 },
            consequence: "{name} entende que não precisa competir por 'quem sofreu mais' para ter direito de sentir o que sente.",
            pareEPense: "Comparar sofrimentos não anula o que alguém está sentindo agora. Cada pessoa tem direito às próprias emoções.",
            vocesabia: "A desvalorização repetida dos sentimentos de alguém, mesmo dentro da família, é uma forma de violência psicológica muitas vezes invisível — porque é tratada como 'jeito de ser'."
          },
          {
            text: "Passa a evitar falar sobre seus sentimentos com essa pessoa, guardando tudo para si.",
            type: "normaliza",
            points: { c: -3, e: -6, p: -3, a: -5 },
            consequence: "{name} se isola cada vez mais das conversas em casa, achando que 'ninguém vai entender mesmo'.",
            pareEPense: "Guardar tudo para si é uma reação compreensível — mas também pode aumentar a sensação de estar sozinho(a) diante do problema.",
            vocesabia: "O isolamento emocional é, muitas vezes, consequência direta da desvalorização repetida dos sentimentos de alguém, e pode dificultar pedir ajuda quando for realmente necessário."
          },
          {
            text: "Busca conversar com esse familiar em outro momento, explicando como esses comentários afetam.",
            type: "neutro",
            points: { c: 8, e: 8, p: 8, a: 8 },
            consequence: "A conversa é difícil, mas o familiar escuta e diz que não tinha percebido o efeito das falas.",
            pareEPense: "Nem toda conversa muda tudo de uma vez, mas abrir esse espaço é um passo real na direção de ser ouvido(a).",
            vocesabia: "Explicar o efeito de uma fala, em vez de apenas reagir a ela, costuma abrir mais espaço para mudança do que o silêncio ou o confronto direto."
          }
        ]
      },
      {
        ambiente: "Relacionamento / Digital",
        bubbles: [
          { who: "narrador", text: "O parceiro/a de {name} pede, 'só dessa vez', para parar de seguir alguns amigos nas redes." },
          { who: "parceiro(a)", text: "Se você me amasse mesmo, não teria problema em fazer isso. Por que você me deixa com ciúme desse jeito?" },
          { who: "narrador", text: "{name} sente que, se recusar, vai ser culpado(a) pela briga que provavelmente vai acontecer." }
        ],
        question: "O que essa fala está fazendo?",
        options: [
          {
            text: "Percebe que a própria vontade de controlar está sendo transformada em culpa de {name}.",
            type: "best",
            points: { c: 14, e: 8, p: 10, a: 8 },
            consequence: "{name} responde que amor não se mede por controle, e que a conversa sobre confiança precisa ser feita de outro jeito.",
            pareEPense: "Colocar a responsabilidade pelo ciúme do outro nas próprias costas é um padrão comum em relações com controle excessivo.",
            vocesabia: "Frases como 'se você me amasse, faria isso' são uma forma de manipulação emocional conhecida como culpabilização — transferem para a vítima a responsabilidade pelo comportamento controlador do outro."
          },
          {
            text: "Aceita parar de seguir os amigos, para evitar o desgaste da discussão.",
            type: "normaliza",
            points: { c: -5, e: -3, p: -8, a: -3 },
            consequence: "A paz dura pouco: em poucos dias, um novo pedido de controle aparece, um pouco maior que o anterior.",
            pareEPense: "Ceder uma vez para evitar conflito é uma escolha comum e compreensível — o importante é notar quando os pedidos começam a se repetir e crescer.",
            vocesabia: "O controle em relacionamentos costuma aparecer de forma gradual, começando com pedidos pequenos que, aceitos, abrem espaço para pedidos cada vez maiores."
          },
          {
            text: "Recusa o pedido, mas evita conversar sobre o motivo, achando que isso só vai piorar a discussão.",
            type: "neutro",
            points: { c: 6, e: 4, p: 6, a: 4 },
            consequence: "A briga acontece de qualquer forma, mas dessa vez {name} não cede à pressão.",
            pareEPense: "Recusar já é um passo importante. Explicar o motivo, quando possível, ajuda o outro a entender que aquilo não é sobre falta de amor.",
            vocesabia: "Nomear o comportamento controlador, com calma, tende a deixar mais claro — para ambos os lados — onde está o limite entre cuidado e controle."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 3
  // ==========================================================
  {
    id: 3,
    title: "Deixa eu explicar",
    subtitle: "Mansplaining, manterrupting e ambientes profissionais",
    icon: "chapter3",
    situations: [
      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "Durante uma reunião, uma colega começa a explicar uma ideia importante para o projeto." },
          { who: "colega", text: "Deixa eu completar aqui... na verdade é assim que funciona." },
          { who: "narrador", text: "Ele repete, com outras palavras, exatamente o que ela ia dizer — como se ela não soubesse do assunto." }
        ],
        question: "O que você percebe nessa situação?",
        options: [
          {
            text: "Diz que ela ainda não tinha terminado e pede para ela concluir a ideia.",
            type: "best",
            points: { c: 10, e: 8, p: 12, a: 10 },
            consequence: "Ela agradece com um olhar e termina a explicação. A reunião segue, mas o padrão fica mais visível para todos.",
            pareEPense: "Devolver a palavra para quem foi interrompida é uma forma simples e eficaz de reequilibrar a conversa.",
            vocesabia: "Interromper repetidamente uma mulher e impedir que ela conclua sua fala pode contribuir para a desvalorização de sua participação — esse padrão é conhecido como manterrupting."
          },
          {
            text: "Não fala nada, porque não quer se meter em assunto que não é com você.",
            type: "normaliza",
            points: { c: -3, e: -3, p: -6, a: -3 },
            consequence: "A reunião segue normalmente, e o mesmo padrão se repete outras vezes ao longo do projeto.",
            pareEPense: "'Não é comigo' costuma ser a razão mais comum para deixar um comportamento assim passar despercebido — mas ele acaba se repetindo justamente por isso.",
            vocesabia: "Ambientes onde interrupções desse tipo não são notadas tendem a reforçar, com o tempo, quem 'tem espaço' para falar em uma reunião."
          },
          {
            text: "Comenta com ela depois, em particular, que percebeu a interrupção e que isso não foi legal.",
            type: "neutro",
            points: { c: 8, e: 10, p: 5, a: 7 },
            consequence: "Ela conta que isso já aconteceu outras vezes com ela e agradece por você ter notado.",
            pareEPense: "Validar o que a pessoa percebeu já ajuda bastante — mesmo quando o momento de agir diretamente já passou.",
            vocesabia: "Muitas vezes quem sofre manterrupting já percebeu o padrão sozinha, mas duvida de si mesma por ninguém mais comentar sobre isso."
          }
        ]
      },
      {
        ambiente: "Escola / Capacitação",
        bubbles: [
          { who: "narrador", text: "Em sala, uma colega levanta a mão e dá a resposta certa para uma pergunta do professor." },
          { who: "narrador", text: "O professor segue explicando, como se ninguém tivesse respondido." },
          { who: "colega", text: "Professor, acho que é X..." },
          { who: "narrador", text: "Minutos depois, um colega dá exatamente a mesma resposta — e é elogiado por isso." }
        ],
        question: "O que aconteceu ali?",
        options: [
          {
            text: "Comenta, educadamente, que ela tinha dado a mesma resposta pouco antes.",
            type: "best",
            points: { c: 12, e: 8, p: 12, a: 8 },
            consequence: "O professor para, pensa um pouco, e reconhece: 'é verdade, foi você quem falou primeiro'.",
            pareEPense: "Dar crédito a quem tinha razão primeiro não tira nada de ninguém — só corrige uma injustiça pequena que passaria despercebida.",
            vocesabia: "Estudos sobre participação em sala de aula mostram que respostas de meninas são, em média, menos reconhecidas do que respostas equivalentes de meninos — um padrão que se repete também em ambientes de trabalho."
          },
          {
            text: "Acha estranho, mas segue a aula normalmente sem comentar nada.",
            type: "normaliza",
            points: { c: -2, e: -2, p: -5, a: -2 },
            consequence: "A aula segue. Ela fica quieta pelo resto do período, e não levanta mais a mão naquele dia.",
            pareEPense: "Perceber e não dizer nada é comum — muita gente também acha que 'não é bem assim' ou duvida do que viu.",
            vocesabia: "A repetição desse tipo de episódio, sem ninguém apontar, tende a fazer com que quem sofre pare de participar, achando que 'não vale a pena'."
          },
          {
            text: "Fala com a colega depois da aula, dizendo que também notou o que aconteceu.",
            type: "neutro",
            points: { c: 8, e: 9, p: 6, a: 6 },
            consequence: "Ela se sente aliviada em saber que não foi só impressão dela.",
            pareEPense: "Confirmar a percepção de alguém é um apoio real, mesmo quando o momento certo de falar na hora já passou.",
            vocesabia: "Sentir que 'só eu percebi isso' é um dos motivos que fazem muita gente duvidar da própria experiência — por isso validar importa tanto."
          }
        ]
      },
      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "Em um projeto em grupo, {name} já domina bem o assunto que está sendo discutido." },
          { who: "colega", text: "Deixa eu te explicar como isso funciona, é bem simples, presta atenção..." },
          { who: "narrador", text: "Ele começa a explicar, do zero, um conceito básico — sem perguntar o que {name} já sabe." }
        ],
        question: "Como {name} pode reagir?",
        options: [
          {
            text: "Diz, com tranquilidade, que já conhece o assunto e sugere ir direto ao ponto que falta discutir.",
            type: "best",
            points: { c: 10, e: 6, p: 12, a: 10 },
            consequence: "O colega fica sem graça por um segundo, mas o grupo segue para a parte que realmente precisava de discussão — e ganha tempo.",
            pareEPense: "Marcar o próprio conhecimento, com firmeza e sem hostilidade, é uma forma eficaz de reequilibrar a conversa.",
            vocesabia: "Explicar algo básico para alguém sem antes checar o que essa pessoa já sabe, presumindo que ela precisa da explicação, é uma manifestação comum de mansplaining."
          },
          {
            text: "Deixa ele explicar tudo de novo, mesmo já sabendo, para não parecer 'grosseiro(a)'.",
            type: "normaliza",
            points: { c: -3, e: -2, p: -8, a: -3 },
            consequence: "A reunião do grupo demora mais do que precisava, e o mesmo padrão se repete nas próximas reuniões.",
            pareEPense: "Evitar parecer grosseiro(a) é uma preocupação comum, mas ela também pode custar tempo, energia e reconhecimento ao longo do tempo.",
            vocesabia: "Aceitar repetidamente explicações desnecessárias, para 'não criar climão', é um dos motivos pelos quais esse padrão costuma passar despercebido em ambientes de trabalho."
          },
          {
            text: "Interrompe de forma seca dizendo 'já sei disso, para de me tratar como boba(o)'.",
            type: "confronto",
            points: { c: 6, e: 2, p: 8, a: 4 },
            consequence: "O clima do grupo fica tenso, e o colega se fecha, dificultando a colaboração no restante do projeto.",
            pareEPense: "Se posicionar é importante — a forma que a gente escolhe também influencia se a mensagem vai ser realmente ouvida.",
            vocesabia: "Marcar um limite com firmeza, mas sem hostilidade, costuma abrir espaço para mudança de comportamento com mais eficácia do que uma reação áspera."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 4
  // ==========================================================
  {
    id: 4,
    title: "Atrás da tela",
    subtitle: "Cultura digital, controle e comportamentos abusivos online",
    icon: "chapter4",
    situations: [
      {
        ambiente: "Ambiente Digital",
        bubbles: [
          { who: "narrador", text: "Em um grupo de mensagens, um colega compartilha um print de uma conversa privada de uma amiga em comum." },
          { who: "colega", text: "Olha só o que ela mandou pro ex dela kkkk, vocês precisam ver isso" },
          { who: "narrador", text: "Vários colegas começam a comentar e rir das mensagens dela." }
        ],
        question: "O que está acontecendo aqui?",
        options: [
          {
            text: "Diz no grupo que aquilo é privado e pede para apagarem o print.",
            type: "best",
            points: { c: 10, e: 10, p: 12, a: 10 },
            consequence: "Alguns colegas concordam e o assunto muda. Outros ficam quietos, mas ninguém comenta mais nada sobre o print.",
            pareEPense: "Defender a privacidade de alguém, mesmo online, é uma forma concreta de agir contra a exposição não consentida.",
            vocesabia: "Compartilhar conversas privadas de alguém sem consentimento é uma violação de privacidade que pode se enquadrar como exposição não consentida, mesmo quando feita 'só de brincadeira' entre amigos."
          },
          {
            text: "Fica só de leitor(a) no grupo, sem comentar nada, mas também sem participar dos risos.",
            type: "neutro",
            points: { c: 4, e: 2, p: 0, a: 0 },
            consequence: "O assunto segue sem ninguém questionar, e o print continua circulando pelo grupo.",
            pareEPense: "Não rir junto já é diferente de participar — mas o silêncio, sozinho, não impede que a exposição continue acontecendo.",
            vocesabia: "A ausência de reação de quem vê esse tipo de conteúdo circular é um dos fatores que permite que ele se espalhe cada vez mais."
          },
          {
            text: "Chama a amiga em particular para avisar que o print está circulando no grupo.",
            type: "neutro",
            points: { c: 8, e: 10, p: 6, a: 10 },
            consequence: "Ela agradece muito o aviso e consegue pedir para o grupo apagar as mensagens antes que se espalhem mais.",
            pareEPense: "Avisar quem está sendo exposto dá a ela a chance de agir — mesmo que o grupo continue comentando por enquanto.",
            vocesabia: "Vítimas de exposição digital costumam descobrir tarde que algo está circulando — avisar rapidamente é uma forma concreta de apoio."
          }
        ]
      },
      {
        ambiente: "Ambiente Digital",
        bubbles: [
          { who: "narrador", text: "Uma amiga de {name} conta que está recebendo mensagens insistentes de uma pessoa que ela já disse 'não' várias vezes." },
          { who: "amiga", text: "Eu bloqueei, mas ele criou outro perfil e voltou a mandar mensagem. Acho que tô exagerando em me incomodar com isso..." },
          { who: "narrador", text: "Ela parece insegura sobre se deveria mesmo se preocupar." }
        ],
        question: "O que você diz para ela?",
        options: [
          {
            text: "Diz que isso não é exagero — é perseguição, e que ela merece se sentir segura, inclusive online.",
            type: "best",
            points: { c: 12, e: 12, p: 10, a: 12 },
            consequence: "Ela se sente validada e junto com você começa a guardar prints como registro, e pensa em buscar apoio de um adulto de confiança ou canal apropriado.",
            pareEPense: "Nomear o que está acontecendo com clareza ajuda a pessoa a parar de duvidar do próprio incômodo.",
            vocesabia: "Insistir em contato após recusas repetidas, inclusive criando novos perfis para contornar bloqueios, é uma forma de perseguição (stalking) — um comportamento sério, mesmo quando acontece 'só' pela internet."
          },
          {
            text: "Diz para ela apenas ignorar, que 'com o tempo ele cansa'.",
            type: "normaliza",
            points: { c: -5, e: -5, p: -5, a: -6 },
            consequence: "Ela segue recebendo mensagens por mais um tempo, cada vez mais insegura sobre se deveria fazer algo a respeito.",
            pareEPense: "Esperar alguém 'cansar' coloca toda a responsabilidade sobre quem já está incomodado(a) — e nem sempre funciona.",
            vocesabia: "Comportamentos de perseguição digital tendem a se intensificar quando não são levados a sério logo no início."
          },
          {
            text: "Sugere que ela mesma confronte a pessoa diretamente, sozinha, para 'resolver de uma vez'.",
            type: "confronto",
            points: { c: 3, e: 3, p: 4, a: 2 },
            consequence: "O confronto direto pode deixar a pessoa que está perseguindo ainda mais insistente — ou colocar sua amiga em uma situação de risco desnecessário.",
            pareEPense: "A vontade de 'resolver logo' é compreensível, mas em situações de perseguição, agir sozinho(a) pode ser mais arriscado do que buscar apoio.",
            vocesabia: "Especialistas em segurança digital recomendam registrar provas (prints, datas) e buscar apoio de adultos de confiança ou canais apropriados, em vez de confronto direto em situações de perseguição."
          }
        ]
      },
      {
        ambiente: "Ambiente Digital",
        bubbles: [
          { who: "narrador", text: "No post de uma amiga, aparecem vários comentários de ódio e misóginos sobre a aparência e as opiniões dela." },
          { who: "narrador", text: "Alguns colegas conhecidos de {name} curtem esses comentários, e um deles até adiciona um comentário parecido." }
        ],
        question: "O que fazer diante disso?",
        options: [
          {
            text: "Comenta apoiando a amiga publicamente e denuncia os comentários mais graves na plataforma.",
            type: "best",
            points: { c: 10, e: 12, p: 10, a: 12 },
            consequence: "A amiga vê seu comentário de apoio e se sente menos sozinha em meio aos ataques. Alguns comentários são removidos após a denúncia.",
            pareEPense: "Apoio público não muda a internet inteira, mas muda a experiência de quem está sendo atacado naquele momento.",
            vocesabia: "As plataformas digitais possuem ferramentas de denúncia para discurso de ódio — usá-las é uma forma concreta e acessível de agir diante desse tipo de comportamento."
          },
          {
            text: "Rola o feed e segue em frente, achando que 'não é da sua conta'.",
            type: "normaliza",
            points: { c: -4, e: -6, p: -4, a: -6 },
            consequence: "Os comentários continuam se acumulando, e a amiga se sente cada vez mais exposta e sozinha.",
            pareEPense: "Discurso de ódio online costuma crescer justamente quando ninguém reage — o silêncio coletivo funciona como combustível.",
            vocesabia: "Pesquisas sobre discurso de ódio mostram que a ausência de reação de espectadores é um dos fatores que mais contribui para a escalada desse tipo de ataque."
          },
          {
            text: "Manda uma mensagem privada para a amiga dizendo que viu os comentários e que está do lado dela.",
            type: "neutro",
            points: { c: 8, e: 10, p: 6, a: 8 },
            consequence: "Ela agradece muito a mensagem — diz que estava se sentindo sozinha vendo os comentários se acumularem.",
            pareEPense: "O apoio privado já ajuda bastante. Combinado com uma ação pública (como denunciar), o efeito costuma ser ainda maior.",
            vocesabia: "Vítimas de ataques coordenados online costumam relatar que o apoio de pessoas próximas, mesmo privado, faz diferença real no enfrentamento da situação."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 5
  // ==========================================================
  {
    id: 5,
    title: "Você viu. E agora?",
    subtitle: "O que fazer ao presenciar uma situação de violência",
    icon: "chapter5",
    situations: [
      {
        ambiente: "Testemunha — Escola",
        bubbles: [
          { who: "narrador", text: "{name} percebe que um amigo tem ficado cada vez mais controlador com a namorada: decide quem ela pode ver, o que ela pode vestir, e se irrita quando ela conversa com outras pessoas." },
          { who: "narrador", text: "Ela parece cada vez mais isolada dos próprios amigos." }
        ],
        question: "O que fazer diante disso, com segurança?",
        options: [
          {
            text: "Procura conversar com a garota, sem julgamento, apenas para deixar claro que ela pode contar com você.",
            type: "best",
            points: { c: 10, e: 14, p: 10, a: 12 },
            consequence: "Ela fica surpresa, mas agradece. Diz que já vinha se sentindo sozinha e que talvez precise mesmo conversar sobre isso com alguém.",
            pareEPense: "Manter a porta aberta, sem pressionar, é muitas vezes mais eficaz do que tentar 'resolver' a situação por ela.",
            vocesabia: "Isolar a pessoa de amigos e familiares é um padrão comum em relacionamentos controladores — manter o vínculo com quem está isolado(a) é uma das formas mais eficazes de apoio."
          },
          {
            text: "Confronta o amigo diretamente na frente de todo mundo, chamando ele de abusivo.",
            type: "confronto",
            points: { c: 4, e: 2, p: 6, a: 2 },
            consequence: "O amigo fica na defensiva e nega tudo. A namorada dele fica constrangida com a exposição pública e se afasta ainda mais.",
            pareEPense: "Expor publicamente raramente muda o comportamento de quem controla — e pode colocar a pessoa controlada em uma posição ainda mais difícil.",
            vocesabia: "Especialistas recomendam abordar esse tipo de situação com cuidado e em particular, priorizando sempre a segurança de quem está sendo controlado(a)."
          },
          {
            text: "Acha que não é da sua conta, já que é 'relacionamento dos dois'.",
            type: "normaliza",
            points: { c: -5, e: -8, p: -6, a: -8 },
            consequence: "A situação segue como está. Meses depois, {name} descobre que ela vinha se sentindo sozinha havia tempo.",
            pareEPense: "'Não é da minha conta' costuma parecer respeito à privacidade — mas também pode significar deixar alguém sozinho(a) justamente quando mais precisa de apoio.",
            vocesabia: "Testemunhas que se mantêm próximas e disponíveis, sem julgar, são frequentemente citadas por sobreviventes de relacionamentos abusivos como um fator importante para conseguir buscar ajuda."
          }
        ]
      },
      {
        ambiente: "Testemunha — Ambiente Social",
        bubbles: [
          { who: "narrador", text: "Em uma festa, {name} percebe que uma amiga está visivelmente desconfortável com alguém insistindo para ficar perto dela, mesmo após ela se afastar algumas vezes." },
          { who: "narrador", text: "Ela lança um olhar rápido em direção a {name}, como quem pede ajuda." }
        ],
        question: "Como {name} pode agir com segurança?",
        options: [
          {
            text: "Se aproxima com naturalidade e 'puxa' a amiga para outro assunto ou lugar, sem confronto direto.",
            type: "best",
            points: { c: 8, e: 12, p: 10, a: 14 },
            consequence: "A amiga se afasta da situação com alívio e agradece depois, dizendo que não sabia como sair dali sozinha.",
            pareEPense: "Intervir de forma discreta, criando uma saída, costuma ser mais seguro e eficaz do que um confronto direto.",
            vocesabia: "Essa estratégia é chamada de 'intervenção do espectador' (bystander intervention) e é amplamente recomendada como uma forma segura de ajudar em situações de desconforto ou risco em ambientes sociais."
          },
          {
            text: "Finge não perceber, achando que não é sua função se meter.",
            type: "normaliza",
            points: { c: -4, e: -8, p: -4, a: -8 },
            consequence: "A amiga permanece desconfortável por mais tempo, até conseguir se afastar sozinha, mais tarde.",
            pareEPense: "Um olhar pedindo ajuda costuma ser um sinal claro — perceber e não agir pode deixar alguém sozinho(a) justamente no momento em que mais precisa.",
            vocesabia: "Pesquisas sobre comportamento de espectadores mostram que a maioria das pessoas relata querer ajudar, mas hesita por não saber como agir com segurança — por isso conhecer estratégias práticas faz diferença."
          },
          {
            text: "Vai direto confrontar a pessoa insistente, de forma agressiva, na frente de todos.",
            type: "confronto",
            points: { c: 4, e: 4, p: 6, a: 4 },
            consequence: "A situação pode escalar rapidamente e colocar tanto {name} quanto a amiga em risco desnecessário.",
            pareEPense: "Querer proteger alguém é importante — mas colocar a própria segurança em risco não é a única forma de ajudar, nem sempre a mais eficaz.",
            vocesabia: "Criar uma distração ou uma saída discreta costuma ser mais seguro do que o confronto direto, especialmente em ambientes com álcool ou multidões."
          }
        ]
      },
      {
        ambiente: "Reflexão pessoal",
        bubbles: [
          { who: "narrador", text: "Um amigo comenta, de forma leve, algo parecido com uma piada que {name} mesmo(a) já fez no passado, sem perceber o efeito dela." },
          { who: "amigo", text: "Lembra quando você falou aquilo? Todo mundo riu na hora, mas hoje eu penso diferente sobre esse tipo de comentário." },
          { who: "narrador", text: "{name} para para pensar sobre isso." }
        ],
        question: "O que essa reflexão representa?",
        options: [
          {
            text: "Reconhece que também já normalizou coisas sem perceber — e que reconhecer isso faz parte de mudar.",
            type: "best",
            points: { c: 14, e: 10, p: 10, a: 10 },
            consequence: "{name} agradece ao amigo por ter trazido isso à tona, e os dois conversam sobre como pensam diferente hoje.",
            pareEPense: "Ninguém nasce sabendo reconhecer tudo. Perceber os próprios deslizes, sem se culpar excessivamente, é parte real do aprendizado.",
            vocesabia: "Refletir sobre as próprias atitudes passadas, com honestidade e sem autopunição excessiva, é reconhecido como um passo importante no desenvolvimento da empatia e da consciência social."
          },
          {
            text: "Fica na defensiva e diz que 'não tem nada demais, todo mundo fazia piadas assim antes'.",
            type: "normaliza",
            points: { c: -6, e: -4, p: -6, a: -4 },
            consequence: "A conversa esfria ali. {name} perde a chance de refletir sobre algo que poderia ajudar a entender melhor as próprias atitudes.",
            pareEPense: "'Todo mundo fazia' explica por que algo era comum — mas não explica por que continuaria sendo aceitável hoje.",
            vocesabia: "A defensividade diante de uma autocrítica é uma reação humana comum, mas pode fechar a porta para aprendizados importantes sobre o próprio comportamento."
          },
          {
            text: "Concorda por educação, mas não pensa realmente sobre o assunto depois.",
            type: "neutro",
            points: { c: 2, e: 2, p: 0, a: 0 },
            consequence: "A conversa segue para outro assunto, e {name} esquece do comentário logo em seguida.",
            pareEPense: "Concordar na hora é fácil — o desafio real está em deixar essa reflexão realmente mudar alguma atitude no futuro.",
            vocesabia: "Mudança de comportamento costuma exigir mais do que reconhecer um erro passado uma única vez — envolve repetição e atenção contínua às próprias atitudes."
          }
        ]
      }
    ]
  }
];

// ============================================================
// STORYLINES — capítulos por personagem
// ============================================================
// Por padrão, TODO personagem usa CHAPTERS_PADRAO (definido acima).
// Para dar um capítulo (ou uma trilha inteira) diferente a um personagem
// específico, basta criar uma chave com o id do personagem e colocar um
// array de capítulos no MESMO FORMATO de CHAPTERS_PADRAO (mesma estrutura
// de "situations", "bubbles", "options" etc — copie um capítulo existente
// como ponto de partida).
//
// Regra simples:
//   - Personagem SEM entrada aqui (ou com valor null/ausente) → joga CHAPTERS_PADRAO.
//   - Personagem COM um array aqui → joga SOMENTE esse array (substitui
//     o padrão inteiro, não soma com ele).
//
// Exemplo pronto para editar (comentado): daria à Lívia um Capítulo 1
// diferente, mantendo os capítulos 2 a 5 do padrão.
//
// STORYLINES.livia = [
//   {
//     id: 1,
//     title: "Título só da Lívia",
//     subtitle: "Foco específico da trilha dela",
//     icon: "chapter1",
//     situations: [ /* copie o formato de uma situação existente aqui */ ]
//   },
//   ...CHAPTERS_PADRAO.slice(1) // reaproveita os capítulos 2 a 5 do padrão
// ];

const STORYLINES = {
  default: CHAPTERS_PADRAO,
  livia: null,
  kaique: null,
  aisha: null,
  theo: null
};

STORYLINES.livia = [

  // ==========================================================
  // CAPÍTULO 1
  // ==========================================================
  {
    id: 1,
    title: "Quando parece normal",
    subtitle: "Reconhecendo comportamentos que muitas vezes são naturalizados",
    icon: "chapter1",

    situations: [

      // SITUAÇÃO 1
      {
        ambiente: "Escola",
        bubbles: [
          {
            who: "narrador",
            text: "Durante um trabalho em grupo, Lívia começa a apresentar uma ideia que pesquisou durante vários dias."
          },
          {
            who: "colega",
            text: "Calma, deixa que eu explico. Acho que você complicou demais."
          },
          {
            who: "narrador",
            text: "Antes que Lívia termine, ele começa a explicar a mesma ideia para o restante do grupo."
          }
        ],

        question: "Como Lívia pode reagir?",

        options: [
          {
            text: "Diz que ainda não terminou e pede para concluir sua explicação.",
            type: "best",
            points: { c: 10, e: 8, p: 12, a: 10 },
            consequence: "Lívia retoma a palavra e explica sua ideia. O grupo percebe que ela tinha pesquisado exatamente o ponto que estava sendo discutido.",
            pareEPense: "Você não precisa abrir mão da sua voz para evitar um conflito. É possível estabelecer um limite com firmeza e respeito.",
            vocesabia: "Interromper alguém repetidamente pode diminuir seu espaço de participação. Quando isso acontece de forma recorrente, pode estar relacionado ao manterrupting."
          },

          {
            text: "Deixa o colega falar e não comenta nada.",
            type: "normaliza",
            points: { c: -3, e: -3, p: -6, a: -3 },
            consequence: "O grupo segue ouvindo o colega, e Lívia acaba não apresentando a ideia que havia preparado.",
            pareEPense: "Evitar conflito pode parecer mais fácil naquele momento, mas o silêncio pode fazer comportamentos como esse continuarem.",
            vocesabia: "Nem toda interrupção é necessariamente manterrupting. O contexto e a repetição do comportamento são importantes para identificar o padrão."
          },

          {
            text: "Espera o colega terminar e depois explica que gostaria de concluir sua própria ideia.",
            type: "neutro",
            points: { c: 8, e: 10, p: 8, a: 8 },
            consequence: "O colega percebe que interrompeu e deixa Lívia continuar.",
            pareEPense: "Nem sempre a outra pessoa percebe o impacto de uma interrupção. Explicar o que aconteceu pode abrir espaço para uma mudança.",
            vocesabia: "Uma comunicação clara sobre limites pode ajudar a evitar que pequenos comportamentos se tornem padrões."
          }
        ]
      },

      // SITUAÇÃO 2
      {
        ambiente: "Capacitação",
        bubbles: [
          {
            who: "narrador",
            text: "Durante uma atividade, Lívia responde corretamente a uma pergunta feita pelo instrutor."
          },
          {
            who: "narrador",
            text: "Um colega interrompe e diz:"
          },
          {
            who: "colega",
            text: "Na verdade, eu acho que ela quis dizer outra coisa. É mais ou menos assim..."
          },
          {
            who: "narrador",
            text: "Ele começa a explicar a resposta de Lívia como se ela não soubesse o que estava falando."
          }
        ],

        question: "O que Lívia pode fazer?",

        options: [
          {
            text: "Diz que entende a explicação, mas que conhece o assunto e gostaria de terminar seu raciocínio.",
            type: "best",
            points: { c: 12, e: 8, p: 12, a: 10 },
            consequence: "Lívia explica novamente seu raciocínio e o instrutor confirma que sua resposta estava correta.",
            pareEPense: "Ser questionada não significa que você precisa aceitar que outra pessoa fale por você.",
            vocesabia: "Quando alguém presume que uma mulher não entende determinado assunto e começa a explicar algo que ela já domina, isso pode ser uma manifestação de mansplaining."
          },

          {
            text: "Fica quieta porque talvez ele realmente saiba mais.",
            type: "normaliza",
            points: { c: -5, e: -3, p: -7, a: -3 },
            consequence: "O colega termina a explicação e recebe elogios pela resposta que, originalmente, havia sido dada por Lívia.",
            pareEPense: "Duvidar de si mesmo diante da confiança de outra pessoa é comum. Mas confiança não é sinônimo de conhecimento.",
            vocesabia: "Mansplaining não significa simplesmente um homem explicar algo para uma mulher. O problema está na atitude de presumir que ela não sabe, especialmente quando já demonstrou conhecimento."
          },

          {
            text: "Pergunta ao colega por que ele acha que ela não sabe responder.",
            type: "confronto",
            points: { c: 6, e: 4, p: 8, a: 5 },
            consequence: "O colega fica desconfortável e diz que só estava tentando ajudar.",
            pareEPense: "Questionar o comportamento pode ser válido, mas escolher as palavras ajuda a manter a conversa produtiva.",
            vocesabia: "Nem toda explicação indesejada é mansplaining. É importante observar se existe uma presunção de inferioridade ou falta de conhecimento."
          }
        ]
      },

      // SITUAÇÃO 3
      {
        ambiente: "Redes sociais",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia publica uma foto e recebe um comentário de um conhecido."
          },
          {
            who: "colega",
            text: "Você até parece inteligente quando fica quietinha."
          },
          {
            who: "narrador",
            text: "Outras pessoas começam a curtir o comentário."
          }
        ],

        question: "O que essa situação revela?",

        options: [
          {
            text: "Percebe que o comentário tenta diminuir Lívia por expressar suas opiniões.",
            type: "best",
            points: { c: 12, e: 10, p: 10, a: 10 },
            consequence: "Lívia decide não aceitar aquele comportamento como algo normal e conversa com uma amiga sobre o ocorrido.",
            pareEPense: "Uma fala pode parecer pequena isoladamente, mas comentários repetidos que diminuem alguém podem afetar sua confiança.",
            vocesabia: "Violência psicológica nem sempre aparece como uma agressão explícita. Desqualificação, humilhação e tentativas constantes de diminuir alguém também podem ser sinais importantes."
          },

          {
            text: "Ignora porque acha que comentários na internet não devem ser levados a sério.",
            type: "normaliza",
            points: { c: -3, e: -4, p: -4, a: -3 },
            consequence: "Lívia ignora o comentário, mas percebe que aquele tipo de provocação começa a aparecer com frequência.",
            pareEPense: "Nem todo comentário precisa de uma resposta. Mas quando um comportamento se repete e começa a afetar alguém, vale prestar atenção.",
            vocesabia: "A violência psicológica também pode acontecer por meios digitais."
          },

          {
            text: "Responde imediatamente insultando o colega de volta.",
            type: "confronto",
            points: { c: 3, e: 2, p: 2, a: 2 },
            consequence: "Os dois começam uma discussão pública e outros usuários entram na briga.",
            pareEPense: "Sentir raiva diante de uma provocação é compreensível. Porém, responder no mesmo tom pode fazer a situação crescer.",
            vocesabia: "Em situações online, bloquear, denunciar e buscar apoio podem ser alternativas mais seguras do que entrar em uma discussão."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 2
  // ==========================================================
  {
    id: 2,
    title: "Será que eu estou exagerando?",
    subtitle: "Gaslighting e violência psicológica",
    icon: "chapter2",

    situations: [

      // SITUAÇÃO 1
      {
        ambiente: "Relacionamento",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia lembra de uma conversa que teve com seu namorado no dia anterior."
          },
          {
            who: "livia",
            text: "Você disse ontem que não queria ir à festa."
          },
          {
            who: "parceiro(a)",
            text: "Eu nunca disse isso. Você está inventando coisas de novo."
          },
          {
            who: "narrador",
            text: "Lívia tenta lembrar exatamente da conversa, mas começa a duvidar da própria memória."
          }
        ],

        question: "O que Lívia deve perceber?",

        options: [
          {
            text: "Percebe que, se isso acontece repetidamente, pode ser um padrão de gaslighting.",
            type: "best",
            points: { c: 14, e: 10, p: 10, a: 8 },
            consequence: "Lívia entende que uma discordância isolada é diferente de ser constantemente levada a duvidar da própria percepção.",
            pareEPense: "Discordar de alguém não é necessariamente manipulação. O alerta aparece quando a pessoa é repetidamente levada a questionar sua própria realidade.",
            vocesabia: "Gaslighting é um padrão de manipulação psicológica que pode fazer uma pessoa duvidar da própria memória, percepção ou sentimentos."
          },

          {
            text: "Pede desculpas imediatamente porque provavelmente entendeu tudo errado.",
            type: "normaliza",
            points: { c: -7, e: -3, p: -7, a: -2 },
            consequence: "A discussão termina, mas Lívia continua se perguntando se pode confiar na própria memória.",
            pareEPense: "Uma pessoa pode realmente se lembrar de algo errado. O problema é quando a dúvida sobre si mesma passa a acontecer constantemente.",
            vocesabia: "O gaslighting costuma ser percebido pelo padrão de comportamento, e não por uma única discordância."
          },

          {
            text: "Conversa sobre o ocorrido com alguém de confiança.",
            type: "neutro",
            points: { c: 10, e: 10, p: 8, a: 10 },
            consequence: "Ao conversar, Lívia consegue organizar melhor o que aconteceu e percebe que situações parecidas já aconteceram outras vezes.",
            pareEPense: "Conversar com alguém de confiança pode ajudar a organizar pensamentos e perceber padrões.",
            vocesabia: "Buscar apoio não significa que você é incapaz de resolver seus próprios problemas."
          }
        ]
      },

      // SITUAÇÃO 2
      {
        ambiente: "Família",
        bubbles: [
          {
            who: "narrador",
            text: "Depois de um dia difícil, Lívia tenta conversar com um familiar."
          },
          {
            who: "familiar",
            text: "Você reclama de tudo. Na sua idade eu passava por coisas muito piores."
          },
          {
            who: "narrador",
            text: "Isso acontece sempre que Lívia tenta falar sobre algo que está sentindo."
          }
        ],

        question: "O que Lívia pode perceber?",

        options: [
          {
            text: "Percebe que seus sentimentos estão sendo constantemente desvalorizados.",
            type: "best",
            points: { c: 12, e: 12, p: 8, a: 10 },
            consequence: "Lívia entende que não precisa provar que sofreu mais que alguém para ter direito de se sentir mal.",
            pareEPense: "O sofrimento de outra pessoa não torna o seu sentimento menos válido.",
            vocesabia: "Desvalorizar repetidamente sentimentos, ridicularizar emoções ou chamar alguém constantemente de 'dramático' pode contribuir para violência psicológica."
          },

          {
            text: "Decide nunca mais contar seus problemas para ninguém.",
            type: "normaliza",
            points: { c: -4, e: -7, p: -5, a: -6 },
            consequence: "Lívia passa a guardar tudo para si e se distancia das pessoas.",
            pareEPense: "Se fechar pode parecer uma forma de proteção, mas ninguém precisa enfrentar situações difíceis completamente sozinho.",
            vocesabia: "Ter uma rede de apoio é importante para enfrentar situações de violência ou sofrimento."
          },

          {
            text: "Procura outro momento para explicar como essas falas fazem ela se sentir.",
            type: "neutro",
            points: { c: 9, e: 10, p: 8, a: 9 },
            consequence: "O familiar percebe que aquelas falas estavam machucando Lívia e a conversa muda de tom.",
            pareEPense: "Falar sobre o impacto de determinado comportamento pode ajudar a estabelecer limites.",
            vocesabia: "Comunicação e limites podem ajudar em relações saudáveis, mas ninguém é obrigado a permanecer em uma conversa que ofereça risco."
          }
        ]
      },

      // SITUAÇÃO 3
      {
        ambiente: "Relacionamento / Digital",
        bubbles: [
          {
            who: "narrador",
            text: "O namorado de Lívia pergunta com quem ela está conversando."
          },
          {
            who: "parceiro(a)",
            text: "Se você não tem nada para esconder, me mostra suas mensagens."
          },
          {
            who: "narrador",
            text: "Quando Lívia recusa, ele responde:"
          },
          {
            who: "parceiro(a)",
            text: "Então você prefere esconder coisas de mim."
          }
        ],

        question: "O que está acontecendo?",

        options: [
          {
            text: "Percebe que a privacidade dela está sendo transformada em motivo de culpa.",
            type: "best",
            points: { c: 14, e: 9, p: 12, a: 10 },
            consequence: "Lívia afirma que confiança não significa abrir mão da própria privacidade.",
            pareEPense: "Amor e confiança não exigem que uma pessoa abandone seus limites pessoais.",
            vocesabia: "Controle sobre mensagens, amizades, roupas ou contatos pode fazer parte de comportamentos abusivos quando usado para controlar ou intimidar alguém."
          },

          {
            text: "Entrega o celular para evitar uma discussão.",
            type: "normaliza",
            points: { c: -5, e: -4, p: -8, a: -4 },
            consequence: "A discussão termina, mas novas cobranças aparecem posteriormente.",
            pareEPense: "Ceder para evitar uma briga pode parecer a solução mais fácil naquele momento, mas é importante observar quando isso vira um padrão.",
            vocesabia: "Controle excessivo pode aumentar gradualmente dentro de uma relação."
          },

          {
            text: "Diz que prefere conversar sobre confiança sem precisar entregar suas mensagens.",
            type: "neutro",
            points: { c: 10, e: 10, p: 10, a: 9 },
            consequence: "Lívia deixa claro seu limite e abre espaço para uma conversa sobre confiança.",
            pareEPense: "Um limite não precisa ser uma agressão. Ele pode ser uma forma de comunicar aquilo que você considera saudável para uma relação.",
            vocesabia: "Relacionamentos saudáveis respeitam limites, privacidade e autonomia."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 3
  // ==========================================================
  {
    id: 3,
    title: "Deixa eu terminar",
    subtitle: "Mansplaining, manterrupting e apagamento da voz",
    icon: "chapter3",

    situations: [

      // SITUAÇÃO 1
      {
        ambiente: "Escola",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia apresenta uma sugestão durante uma atividade escolar."
          },
          {
            who: "colega",
            text: "Espera, deixa eu explicar porque acho que você não entendeu como funciona."
          },
          {
            who: "narrador",
            text: "Ele começa a explicar justamente o ponto que Lívia estava apresentando."
          }
        ],

        question: "O que Lívia pode fazer?",

        options: [
          {
            text: "Pede para concluir sua ideia antes que ele continue.",
            type: "best",
            points: { c: 12, e: 8, p: 12, a: 10 },
            consequence: "Lívia termina sua explicação e mostra que já havia considerado exatamente o ponto apresentado pelo colega.",
            pareEPense: "Você não precisa provar que sabe mais do que alguém. Às vezes, basta deixar claro que você ainda não terminou.",
            vocesabia: "Mansplaining envolve explicar algo para uma mulher de maneira condescendente, especialmente quando ela já demonstra conhecimento sobre o assunto."
          },

          {
            text: "Deixa o colega explicar para evitar uma discussão.",
            type: "normaliza",
            points: { c: -4, e: -3, p: -7, a: -3 },
            consequence: "A ideia de Lívia acaba sendo apresentada pelo colega.",
            pareEPense: "Quando isso acontece repetidamente, a pessoa pode começar a perder espaço e confiança para participar.",
            vocesabia: "Reconhecer padrões de interrupção e desvalorização é um primeiro passo para enfrentá-los."
          },

          {
            text: "Interrompe o colega e diz que ele está sendo machista.",
            type: "confronto",
            points: { c: 5, e: 3, p: 7, a: 4 },
            consequence: "O clima da reunião fica tenso e o grupo começa a discutir sobre o comportamento.",
            pareEPense: "Nomear um problema pode ser importante, mas uma abordagem clara e específica sobre o comportamento pode facilitar a conversa.",
            vocesabia: "Dizer 'você está sendo machista' pode gerar uma reação defensiva. Em algumas situações, apontar diretamente o comportamento pode ser mais produtivo."
          }
        ]
      },

      // SITUAÇÃO 2
      {
        ambiente: "Escola",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia participa de uma discussão em sala e começa a apresentar um argumento."
          },
          {
            who: "colega",
            text: "Não, não é bem assim..."
          },
          {
            who: "narrador",
            text: "Ele interrompe antes que ela termine."
          },
          {
            who: "narrador",
            text: "Pouco depois, outro colega fala exatamente a mesma ideia e todos começam a discutir o assunto."
          }
        ],

        question: "O que poderia acontecer agora?",

        options: [
          {
            text: "Lívia pede a palavra novamente e explica que aquela era justamente a ideia que estava apresentando.",
            type: "best",
            points: { c: 12, e: 8, p: 12, a: 10 },
            consequence: "A turma percebe a situação e o professor devolve a palavra para Lívia.",
            pareEPense: "Reivindicar espaço de fala não significa querer falar mais que os outros. Significa também ter a chance de concluir seu pensamento.",
            vocesabia: "O manterrupting ocorre quando uma mulher é interrompida de maneira que dificulta ou impede que ela conclua sua fala."
          },

          {
            text: "Não fala nada e deixa a discussão continuar.",
            type: "normaliza",
            points: { c: -4, e: -4, p: -7, a: -3 },
            consequence: "A ideia é discutida sem que Lívia seja reconhecida por tê-la apresentado primeiro.",
            pareEPense: "Quando ninguém reconhece quem trouxe uma ideia inicialmente, o apagamento pode passar despercebido.",
            vocesabia: "Dar crédito às contribuições das pessoas também é uma forma de construir ambientes mais respeitosos."
          },

          {
            text: "Comenta depois da aula com uma colega sobre o que aconteceu.",
            type: "neutro",
            points: { c: 8, e: 10, p: 6, a: 8 },
            consequence: "A colega conta que já havia percebido situações semelhantes e as duas conversam sobre como poderiam agir.",
            pareEPense: "Às vezes, conversar com alguém ajuda a confirmar uma percepção e pensar em estratégias para situações futuras.",
            vocesabia: "Ter apoio de outras pessoas pode diminuir a sensação de estar sozinho diante de uma situação desconfortável."
          }
        ]
      },

      // SITUAÇÃO 3
      {
        ambiente: "Projeto escolar",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia passa vários dias pesquisando informações para o projeto do grupo."
          },
          {
            who: "colega",
            text: "Eu posso explicar isso para vocês. É bem simples."
          },
          {
            who: "narrador",
            text: "Ele começa a explicar conceitos básicos que Lívia acabou de apresentar."
          }
        ],

        question: "Como responder?",

        options: [
          {
            text: "Diz que já conhece o assunto e sugere que o grupo avance para a parte que ainda precisa ser resolvida.",
            type: "best",
            points: { c: 11, e: 8, p: 12, a: 10 },
            consequence: "O grupo percebe que Lívia já havia pesquisado o assunto e consegue avançar no projeto.",
            pareEPense: "Você pode estabelecer um limite sem transformar a conversa em uma disputa sobre quem sabe mais.",
            vocesabia: "Mansplaining não é simplesmente ensinar. O contexto, o tom e a presunção de que a mulher não sabe são importantes."
          },

          {
            text: "Deixa ele explicar tudo novamente.",
            type: "normaliza",
            points: { c: -3, e: -2, p: -7, a: -3 },
            consequence: "O grupo perde tempo e Lívia deixa de apresentar parte da pesquisa que preparou.",
            pareEPense: "Ser educado não significa precisar aceitar sempre uma situação que diminui sua participação.",
            vocesabia: "Estabelecer limites também faz parte de relações e ambientes respeitosos."
          },

          {
            text: "Pergunta ao colega se ele gostaria que ela explicasse algo que ele acabou de pesquisar.",
            type: "confronto",
            points: { c: 6, e: 4, p: 7, a: 5 },
            consequence: "O colega percebe a indireta e a conversa fica um pouco desconfortável.",
            pareEPense: "Ironia pode expressar seu incômodo, mas nem sempre ajuda a resolver o problema.",
            vocesabia: "Comunicação direta e respeitosa costuma ser mais eficiente para estabelecer limites."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 4
  // ==========================================================
  {
    id: 4,
    title: "Do outro lado da tela",
    subtitle: "Violência psicológica e comportamentos abusivos no ambiente digital",
    icon: "chapter4",

    situations: [

      // SITUAÇÃO 1
      {
        ambiente: "Ambiente Digital",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia publica um vídeo falando sobre uma opinião que considera importante."
          },
          {
            who: "comentário",
            text: "Nossa, você fala demais. Ninguém quer ouvir mulher dando opinião sobre isso."
          },
          {
            who: "narrador",
            text: "Outras pessoas começam a responder ao comentário."
          }
        ],

        question: "O que Lívia pode fazer?",

        options: [
          {
            text: "Denuncia o comentário e, se quiser, bloqueia a conta para preservar seu espaço.",
            type: "best",
            points: { c: 10, e: 10, p: 10, a: 12 },
            consequence: "Lívia decide não alimentar a discussão e utiliza as ferramentas disponíveis na plataforma.",
            pareEPense: "Você não precisa convencer alguém que está tentando te atacar. Proteger seu espaço também é uma forma de cuidado.",
            vocesabia: "Ataques baseados no gênero podem contribuir para ambientes digitais hostis e também podem afetar emocionalmente quem os recebe."
          },

          {
            text: "Responde todos os comentários tentando provar que está certa.",
            type: "normaliza",
            points: { c: 2, e: -2, p: -2, a: -3 },
            consequence: "A discussão cresce e Lívia passa muito tempo tentando responder às provocações.",
            pareEPense: "Nem toda provocação precisa ser respondida. Escolher onde colocar sua energia também é importante.",
            vocesabia: "Bloquear e denunciar conteúdos abusivos são recursos disponíveis em muitas plataformas."
          },

          {
            text: "Apaga todas as suas redes porque acha que não vale mais a pena falar sobre suas opiniões.",
            type: "normaliza",
            points: { c: -6, e: -8, p: -6, a: -6 },
            consequence: "Lívia se afasta das redes por um tempo e sente que perdeu um espaço onde gostava de se expressar.",
            pareEPense: "A responsabilidade pelo comportamento abusivo não é de quem foi atacado.",
            vocesabia: "Quando ataques fazem alguém abandonar espaços digitais, eles podem acabar funcionando como uma forma de silenciamento."
          }
        ]
      },

      // SITUAÇÃO 2
      {
        ambiente: "Relacionamento / Digital",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia recebe uma mensagem do namorado perguntando por que ela demorou quinze minutos para responder."
          },
          {
            who: "parceiro(a)",
            text: "Eu sei que você estava online. Quem estava falando com você?"
          },
          {
            who: "narrador",
            text: "Ele começa a pedir explicações sobre cada pessoa com quem Lívia conversa."
          }
        ],

        question: "O que Lívia deve observar?",

        options: [
          {
            text: "Percebe que a cobrança constante pode estar ultrapassando o cuidado e se tornando controle.",
            type: "best",
            points: { c: 13, e: 9, p: 12, a: 10 },
            consequence: "Lívia decide conversar sobre seus limites e sobre como aquele comportamento está afetando sua liberdade.",
            pareEPense: "Preocupação e controle não são a mesma coisa. Uma relação saudável precisa respeitar a autonomia de cada pessoa.",
            vocesabia: "Cobranças constantes, vigilância e exigência de acesso a informações pessoais podem fazer parte de comportamentos de controle."
          },

          {
            text: "Começa a responder imediatamente para evitar novas cobranças.",
            type: "normaliza",
            points: { c: -4, e: -4, p: -8, a: -4 },
            consequence: "Lívia passa a sentir que precisa estar disponível o tempo todo.",
            pareEPense: "Quando alguém começa a mudar toda a própria rotina por medo da reação do parceiro, vale observar esse padrão.",
            vocesabia: "Controle pode aparecer de maneiras pequenas e crescer gradualmente."
          },

          {
            text: "Bloqueia o parceiro imediatamente sem explicar nada.",
            type: "confronto",
            points: { c: 6, e: 4, p: 8, a: 6 },
            consequence: "O parceiro tenta entrar em contato por outros meios e a situação fica mais tensa.",
            pareEPense: "Cada situação é diferente. Quando existe medo ou risco, buscar apoio antes de tomar decisões pode ser importante.",
            vocesabia: "Se uma situação de relacionamento fizer você sentir medo, procure uma pessoa de confiança ou um serviço de apoio."
          }
        ]
      },

      // SITUAÇÃO 3
      {
        ambiente: "Grupo de mensagens",
        bubbles: [
          {
            who: "narrador",
            text: "Em um grupo de colegas, alguém compartilha uma mensagem privada que Lívia havia enviado."
          },
          {
            who: "colega",
            text: "Olha o que ela mandou kkkkk."
          },
          {
            who: "narrador",
            text: "Várias pessoas começam a fazer piadas."
          }
        ],

        question: "O que pode ser feito?",

        options: [
          {
            text: "Pede que parem de compartilhar a conversa e procura apoio para lidar com a exposição.",
            type: "best",
            points: { c: 10, e: 12, p: 10, a: 12 },
            consequence: "Algumas pessoas percebem que passaram do limite e a conversa é encerrada.",
            pareEPense: "Uma conversa privada não deixa de ser privada só porque alguém decidiu compartilhá-la.",
            vocesabia: "Expor mensagens ou informações privadas sem consentimento pode causar constrangimento e sofrimento e deve ser levado a sério."
          },

          {
            text: "Ri junto para mostrar que não se importa.",
            type: "normaliza",
            points: { c: -4, e: -5, p: -5, a: -4 },
            consequence: "As pessoas continuam fazendo piadas porque entendem que Lívia não se incomodou.",
            pareEPense: "Rir para esconder o desconforto é uma reação comum. Mas isso não significa que aquilo deixou de ser inadequado.",
            vocesabia: "Demonstrar desconforto ou procurar apoio pode ser importante quando alguém ultrapassa seus limites."
          },

          {
            text: "Sai do grupo sem falar com ninguém.",
            type: "neutro",
            points: { c: 5, e: 4, p: 4, a: 5 },
            consequence: "Lívia se afasta da situação, mas continua preocupada com onde aquela mensagem pode chegar.",
            pareEPense: "Afastar-se pode ajudar a interromper o contato naquele momento, mas buscar apoio também pode ser importante.",
            vocesabia: "Guardar registros da situação pode ajudar caso seja necessário explicar posteriormente o que aconteceu."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 5
  // ==========================================================
  {
    id: 5,
    title: "Agora eu percebo",
    subtitle: "Reconhecer, apoiar e transformar atitudes",
    icon: "chapter5",

    situations: [

      // SITUAÇÃO 1
      {
        ambiente: "Escola",
        bubbles: [
          {
            who: "narrador",
            text: "Durante uma atividade, Lívia percebe que uma colega está sendo interrompida sempre que tenta falar."
          },
          {
            who: "colega",
            text: "Deixa eu falar, você já explicou isso."
          },
          {
            who: "narrador",
            text: "A colega tenta continuar, mas é interrompida novamente."
          }
        ],

        question: "O que Lívia pode fazer?",

        options: [
          {
            text: "Intervém de forma tranquila e diz que a colega ainda não terminou de falar.",
            type: "best",
            points: { c: 12, e: 12, p: 12, a: 12 },
            consequence: "A colega consegue concluir seu raciocínio e agradece a Lívia depois.",
            pareEPense: "Às vezes, uma pequena intervenção é suficiente para devolver a alguém o espaço que estava sendo tirado.",
            vocesabia: "Quem presencia uma situação também pode contribuir para interromper um padrão de violência ou desrespeito."
          },

          {
            text: "Não interfere porque a situação não envolve diretamente Lívia.",
            type: "normaliza",
            points: { c: -4, e: -6, p: -6, a: -5 },
            consequence: "A colega desiste de falar e permanece em silêncio durante o restante da atividade.",
            pareEPense: "Você não precisa ser a pessoa diretamente afetada para reconhecer que algo está errado.",
            vocesabia: "Testemunhas podem ajudar criando espaços mais seguros e respeitosos."
          },

          {
            text: "Interrompe o colega de forma agressiva e começa uma discussão.",
            type: "confronto",
            points: { c: 5, e: 4, p: 7, a: 5 },
            consequence: "A discussão cresce e a atividade precisa ser interrompida.",
            pareEPense: "Intervir é importante, mas sempre que possível vale pensar em uma forma que não aumente o conflito.",
            vocesabia: "Existem diferentes maneiras de intervir. Nem sempre o confronto direto é a opção mais segura."
          }
        ]
      },

      // SITUAÇÃO 2
      {
        ambiente: "Capacitação / Trabalho",
        bubbles: [
          {
            who: "narrador",
            text: "Um colega faz uma piada dizendo que uma aprendiz é 'sensível demais' porque reclamou de uma situação que a deixou desconfortável."
          },
          {
            who: "colega",
            text: "Hoje em dia qualquer coisa é motivo para drama."
          },
          {
            who: "narrador",
            text: "Lívia percebe que outras pessoas ficam em silêncio."
          }
        ],

        question: "Como Lívia pode agir?",

        options: [
          {
            text: "Diz que o desconforto da colega merece ser respeitado e que chamar alguém de 'dramático' não resolve a situação.",
            type: "best",
            points: { c: 12, e: 10, p: 12, a: 12 },
            consequence: "O grupo fica mais atento à situação e a colega percebe que não está sozinha.",
            pareEPense: "Validar alguém não significa concordar com tudo. Significa reconhecer que aquela pessoa merece ser ouvida.",
            vocesabia: "Minimizar constantemente sentimentos pode contribuir para violência psicológica e fazer a pessoa duvidar do próprio direito de se sentir incomodada."
          },

          {
            text: "Fica em silêncio para não criar um clima ruim no ambiente.",
            type: "normaliza",
            points: { c: -3, e: -5, p: -6, a: -4 },
            consequence: "Ninguém questiona o comentário e a colega fica cada vez mais quieta.",
            pareEPense: "O silêncio pode ser confortável para quem observa, mas pode ser muito diferente para quem está sendo desvalorizado.",
            vocesabia: "Apoio de colegas pode fazer diferença para quem enfrenta situações de desrespeito."
          },

          {
            text: "Diz que o colega é uma pessoa horrível e começa a discutir com ele.",
            type: "confronto",
            points: { c: 4, e: 3, p: 5, a: 3 },
            consequence: "O colega se fecha e a discussão passa a ser sobre os insultos, e não sobre o comportamento inicial.",
            pareEPense: "Criticar o comportamento pode ser mais produtivo do que atacar a pessoa.",
            vocesabia: "Uma intervenção pode ser firme sem precisar transformar a situação em uma disputa pessoal."
          }
        ]
      },

      // SITUAÇÃO 3
      {
        ambiente: "Reflexão pessoal",
        bubbles: [
          {
            who: "narrador",
            text: "Lívia lembra de algumas situações em que riu de comentários que hoje percebe que poderiam ter machucado alguém."
          },
          {
            who: "narrador",
            text: "Ela percebe que nem sempre reconhecia essas atitudes como um problema."
          }
        ],

        question: "O que Lívia pode fazer com essa reflexão?",

        options: [
          {
            text: "Reconhece o que aprendeu e decide prestar mais atenção às próprias atitudes daqui para frente.",
            type: "best",
            points: { c: 14, e: 12, p: 12, a: 14 },
            consequence: "Lívia entende que aprender também significa revisar comportamentos e escolher agir de outra maneira.",
            pareEPense: "Reconhecer que você poderia ter agido diferente não significa se condenar. Significa perceber que é possível mudar.",
            vocesabia: "Prevenção também envolve observar nossas próprias atitudes e questionar comportamentos que foram tratados como normais."
          },

          {
            text: "Diz para si mesma que não tem problema porque todo mundo fazia aquilo.",
            type: "normaliza",
            points: { c: -6, e: -5, p: -6, a: -5 },
            consequence: "Lívia encerra a reflexão sem pensar sobre como poderia agir diferente.",
            pareEPense: "Algo ser comum não significa necessariamente que seja saudável ou respeitoso.",
            vocesabia: "Questionar comportamentos normalizados é uma parte importante da prevenção da violência."
          },

          {
            text: "Fica se culpando por tudo que já fez e decide não falar sobre o assunto.",
            type: "neutro",
            points: { c: 5, e: -2, p: 4, a: 2 },
            consequence: "Lívia entende que reconhecer erros é importante, mas percebe que culpa sozinha não produz mudança.",
            pareEPense: "O objetivo da reflexão não é procurar culpados, mas aprender a reconhecer e transformar comportamentos.",
            vocesabia: "Educação para prevenção envolve aprendizado contínuo, reflexão e mudança de atitudes."
          }
        ]
      }
    ]
  }

];

STORYLINES.kaique = [
  // ==========================================================
  // CAPÍTULO 1 — KAIQUE
  // ==========================================================
  {
    id: 1,
    title: "Só estou tentando ajudar",
    subtitle: "Quando uma ajuda passa a ser controle",
    icon: "chapter1",
    situations: [

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          {
            who: "narrador",
            text: "Kaique está aprendendo uma nova tarefa no trabalho. Ele começa a fazer sozinho, mas um colega fica observando cada movimento."
          },
          {
            who: "colega",
            text: "Deixa que eu faço. Você ainda não sabe fazer isso direito."
          },
          {
            who: "narrador",
            text: "Kaique percebe que o colega nem deixou que ele terminasse de tentar."
          }
        ],
        question: "Como Kaique pode reagir?",
        options: [
          {
            text: "Diz que agradece a ajuda, mas gostaria de tentar primeiro e pedir orientação se precisar.",
            type: "best",
            points: { c: 12, e: 10, p: 12, a: 10 },
            consequence: "O colega hesita, mas deixa Kaique continuar. Quando ele encontra uma dificuldade, pede ajuda e consegue terminar a tarefa.",
            pareEPense: "Ajudar alguém não significa tirar dela a oportunidade de aprender. Orientar é diferente de fazer tudo pela pessoa.",
            vocesabia: "Em ambientes de aprendizagem, impedir constantemente alguém de tentar pode diminuir sua autonomia e confiança."
          },
          {
            text: "Deixa o colega fazer tudo, porque talvez realmente não seja capaz.",
            type: "normaliza",
            points: { c: -5, e: -5, p: -7, a: -3 },
            consequence: "O colega assume a tarefa e Kaique passa a depender dele cada vez mais.",
            pareEPense: "Quando alguém faz você acreditar que não consegue antes mesmo de tentar, sua confiança pode ser afetada.",
            vocesabia: "A desvalorização constante da capacidade de alguém pode fazer parte de padrões de violência psicológica."
          },
          {
            text: "Fala que não precisa de ajuda e sai irritado da situação.",
            type: "confronto",
            points: { c: 5, e: 3, p: 7, a: 3 },
            consequence: "O colega interpreta a reação como grosseria e o clima entre os dois fica ruim.",
            pareEPense: "Colocar um limite é importante, mas podemos fazer isso sem transformar a situação em uma briga.",
            vocesabia: "Comunicar limites de maneira clara e respeitosa pode ajudar a evitar conflitos desnecessários."
          }
        ]
      },

      {
        ambiente: "Relacionamento",
        bubbles: [
          {
            who: "narrador",
            text: "Kaique recebe uma mensagem de uma amiga. A pessoa com quem ele está se relacionando vê a notificação."
          },
          {
            who: "parceiro(a)",
            text: "Quem é? Me mostra a conversa."
          },
          {
            who: "narrador",
            text: "Kaique explica que é apenas uma amiga, mas o pedido continua."
          }
        ],
        question: "O que Kaique percebe nessa situação?",
        options: [
          {
            text: "Percebe que confiança não significa abrir mão da própria privacidade e conversa sobre isso.",
            type: "best",
            points: { c: 13, e: 9, p: 12, a: 10 },
            consequence: "Kaique explica que entende o sentimento do parceiro(a), mas não acha saudável ter que provar constantemente onde está e com quem conversa.",
            pareEPense: "Ciúme pode existir em uma relação, mas não precisa se transformar em controle.",
            vocesabia: "Exigir acesso constante a mensagens e contatos pode ser um comportamento controlador quando usado para vigiar ou limitar a autonomia do parceiro."
          },
          {
            text: "Entrega o celular para provar que não está escondendo nada.",
            type: "normaliza",
            points: { c: -5, e: -3, p: -8, a: -4 },
            consequence: "A situação termina naquele momento, mas alguns dias depois surge uma nova cobrança.",
            pareEPense: "Provar sua inocência uma vez pode parecer simples. O problema aparece quando provar deixa de ser exceção e vira obrigação.",
            vocesabia: "Controle excessivo pode começar com pequenas exigências e aumentar gradualmente."
          },
          {
            text: "Diz que ninguém tem direito de perguntar nada e encerra a conversa.",
            type: "confronto",
            points: { c: 6, e: 3, p: 7, a: 4 },
            consequence: "Kaique estabelece um limite, mas a conversa termina em uma discussão.",
            pareEPense: "Ter privacidade é importante. Explicar o limite pode ajudar a transformar uma discussão em uma conversa sobre confiança.",
            vocesabia: "Relacionamentos saudáveis envolvem confiança, comunicação e respeito aos limites individuais."
          }
        ]
      },

      {
        ambiente: "Ambiente Familiar",
        bubbles: [
          {
            who: "narrador",
            text: "Kaique chega em casa cansado depois da capacitação. Ele comenta que teve um dia difícil."
          },
          {
            who: "familiar",
            text: "Você reclama demais. Na sua idade eu trabalhava muito mais e não ficava fazendo drama."
          },
          {
            who: "narrador",
            text: "Kaique fica quieto. Ele percebe que isso acontece sempre que tenta falar sobre o que sente."
          }
        ],
        question: "O que seria uma atitude saudável?",
        options: [
          {
            text: "Reconhecer que seus sentimentos são válidos e procurar alguém de confiança para conversar.",
            type: "best",
            points: { c: 12, e: 12, p: 8, a: 10 },
            consequence: "Kaique conversa com uma pessoa de confiança e percebe que não precisa esconder tudo o que sente.",
            pareEPense: "Você não precisa ter vivido o pior problema do mundo para ter direito de estar cansado ou triste.",
            vocesabia: "A invalidação repetida dos sentimentos pode afetar a autoestima e dificultar que uma pessoa procure ajuda."
          },
          {
            text: "Decide nunca mais falar sobre seus problemas com ninguém.",
            type: "normaliza",
            points: { c: -5, e: -7, p: -4, a: -6 },
            consequence: "Kaique começa a guardar tudo para si e se afasta das pessoas.",
            pareEPense: "Se calar pode parecer uma forma de evitar conflitos, mas também pode aumentar o isolamento.",
            vocesabia: "O isolamento emocional pode ser uma consequência de ambientes onde sentimentos são constantemente desvalorizados."
          },
          {
            text: "Responde que o familiar também reclama e começa uma discussão.",
            type: "confronto",
            points: { c: 5, e: 2, p: 6, a: 2 },
            consequence: "A conversa vira uma troca de acusações e ninguém consegue realmente explicar o que sente.",
            pareEPense: "Defender-se é legítimo, mas responder ao ataque com outro ataque pode impedir que o problema seja compreendido.",
            vocesabia: "Comunicação assertiva procura expressar sentimentos e limites sem transformar a conversa em uma disputa."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 2 — KAIQUE
  // ==========================================================
  {
    id: 2,
    title: "Será que foi culpa minha?",
    subtitle: "Culpabilização e manipulação emocional",
    icon: "chapter2",
    situations: [

      {
        ambiente: "Relacionamento",
        bubbles: [
          {
            who: "narrador",
            text: "Kaique combina de encontrar alguns amigos depois da capacitação."
          },
          {
            who: "parceiro(a)",
            text: "Você sabia que eu não gosto quando você sai sem mim."
          },
          {
            who: "narrador",
            text: "Quando Kaique diz que já havia combinado, ouve uma resposta inesperada."
          },
          {
            who: "parceiro(a)",
            text: "Se você realmente se importasse comigo, não iria."
          }
        ],
        question: "O que está acontecendo?",
        options: [
          {
            text: "Percebe que o sentimento do parceiro está sendo usado para pressioná-lo e conversa sobre limites.",
            type: "best",
            points: { c: 14, e: 9, p: 12, a: 10 },
            consequence: "Kaique explica que se importar com alguém não significa abandonar amigos ou deixar de ter sua própria vida.",
            pareEPense: "Amor não deveria exigir que você abra mão constantemente de quem você é.",
            vocesabia: "A manipulação emocional pode envolver frases que fazem alguém se sentir culpado por exercer escolhas normais e independentes."
          },
          {
            text: "Cancela o encontro para evitar que o parceiro fique chateado.",
            type: "normaliza",
            points: { c: -6, e: -4, p: -8, a: -4 },
            consequence: "O conflito desaparece naquele momento, mas situações parecidas começam a acontecer com mais frequência.",
            pareEPense: "Evitar uma discussão pode trazer paz por algumas horas, mas não resolve necessariamente o problema.",
            vocesabia: "Abrir mão repetidamente de atividades, amizades ou escolhas para evitar reações do parceiro pode ser um sinal de controle."
          },
          {
            text: "Diz que o parceiro está sendo ridículo e sai sem conversar.",
            type: "confronto",
            points: { c: 5, e: 2, p: 7, a: 3 },
            consequence: "Kaique mantém seu compromisso, mas a discussão continua depois.",
            pareEPense: "Discordar é diferente de desrespeitar. Um limite pode ser firme sem diminuir a outra pessoa.",
            vocesabia: "Comunicação respeitosa não significa aceitar comportamentos controladores; significa estabelecer limites sem agressividade."
          }
        ]
      },

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          {
            who: "narrador",
            text: "Kaique percebe que um colega sempre entrega tarefas atrasadas. Em uma reunião, o colega coloca a culpa nele."
          },
          {
            who: "colega",
            text: "Eu só não consegui entregar porque o Kaique não me passou as informações direito."
          },
          {
            who: "narrador",
            text: "Kaique sabe que havia enviado as informações no prazo."
          }
        ],
        question: "O que Kaique pode fazer?",
        options: [
          {
            text: "Apresenta os fatos com calma e mostra quando as informações foram enviadas.",
            type: "best",
            points: { c: 13, e: 7, p: 13, a: 10 },
            consequence: "A equipe verifica as mensagens e percebe que as informações realmente haviam sido enviadas.",
            pareEPense: "Quando alguém tenta colocar em você a responsabilidade por algo que não fez, fatos ajudam a separar percepção de realidade.",
            vocesabia: "Guardar registros de tarefas, mensagens e combinados pode ajudar a esclarecer situações de conflito no ambiente de trabalho."
          },
          {
            text: "Pede desculpas mesmo sabendo que não foi responsável.",
            type: "normaliza",
            points: { c: -7, e: -3, p: -7, a: -3 },
            consequence: "O problema é encerrado rapidamente, mas o colega passa a responsabilizar Kaique por outras situações.",
            pareEPense: "Pedir desculpas por tudo para evitar conflitos pode fazer com que outras pessoas continuem transferindo responsabilidades para você.",
            vocesabia: "A culpabilização constante pode prejudicar a autoestima e dificultar o estabelecimento de limites."
          },
          {
            text: "Acusa o colega de mentiroso e começa a discutir na frente de todos.",
            type: "confronto",
            points: { c: 6, e: 2, p: 7, a: 3 },
            consequence: "A discussão cresce e o foco da reunião deixa de ser o problema original.",
            pareEPense: "Defender-se é importante, mas concentrar-se nos fatos costuma ser mais eficaz do que atacar a pessoa.",
            vocesabia: "Em conflitos profissionais, comunicar fatos e evidências ajuda a reduzir interpretações pessoais."
          }
        ]
      },

      {
        ambiente: "Ambiente Digital",
        bubbles: [
          {
            who: "narrador",
            text: "Kaique publica uma foto com amigos. Pouco depois, recebe uma mensagem de alguém próximo."
          },
          {
            who: "pessoa",
            text: "Você sabia que eu ficaria mal vendo isso. Parece que você faz essas coisas só para me provocar."
          },
          {
            who: "narrador",
            text: "Kaique começa a pensar se realmente fez algo errado."
          }
        ],
        question: "Como interpretar essa situação?",
        options: [
          {
            text: "Percebe que a reação da outra pessoa não significa automaticamente que Kaique tenha feito algo errado.",
            type: "best",
            points: { c: 13, e: 8, p: 11, a: 9 },
            consequence: "Kaique responde que entende que a pessoa ficou incomodada, mas não aceita ser responsabilizado por sentimentos que não provocou intencionalmente.",
            pareEPense: "Podemos considerar os sentimentos de alguém sem assumir automaticamente a culpa por eles.",
            vocesabia: "Culpabilização emocional acontece quando uma pessoa é constantemente responsabilizada pelos sentimentos, reações ou escolhas de outra."
          },
          {
            text: "Apaga a foto imediatamente e promete não fazer mais isso.",
            type: "normaliza",
            points: { c: -5, e: -4, p: -7, a: -3 },
            consequence: "A situação termina, mas novas cobranças aparecem sobre outras publicações.",
            pareEPense: "Ceder sempre para evitar desconforto pode transformar uma situação pontual em um padrão de controle.",
            vocesabia: "Controle sobre redes sociais pode começar com pedidos aparentemente pequenos."
          },
          {
            text: "Responde que a pessoa está sendo tóxica e bloqueia imediatamente.",
            type: "confronto",
            points: { c: 6, e: 3, p: 7, a: 3 },
            consequence: "Kaique encerra a conversa, mas fica sem entender se havia outra maneira de estabelecer o limite.",
            pareEPense: "Bloquear pode ser necessário em algumas situações. Quando existe espaço para diálogo seguro, porém, estabelecer limites claramente também pode ser útil.",
            vocesabia: "Ninguém é obrigado a permanecer em uma conversa que se tornou abusiva ou insegura."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 3 — KAIQUE
  // ==========================================================
  {
    id: 3,
    title: "Deixa eu terminar",
    subtitle: "Manterrupting e respeito à fala",
    icon: "chapter3",
    situations: [

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          {
            who: "narrador",
            text: "Durante uma reunião, uma colega começa a apresentar uma ideia."
          },
          {
            who: "colega",
            text: "Eu pensei que poderíamos..."
          },
          {
            who: "outro colega",
            text: "Não, isso não vai funcionar. O melhor seria..."
          },
          {
            who: "narrador",
            text: "Ela tenta continuar, mas é interrompida novamente."
          }
        ],
        question: "O que Kaique pode fazer?",
        options: [
          {
            text: "Pede para deixarem a colega terminar antes de responder.",
            type: "best",
            points: { c: 12, e: 10, p: 12, a: 10 },
            consequence: "A colega consegue concluir a ideia. Depois, o grupo pode discutir se a proposta funciona ou não.",
            pareEPense: "Discordar de uma ideia não exige impedir alguém de terminar de apresentá-la.",
            vocesabia: "Manterrupting é o termo usado para descrever interrupções frequentes que impedem mulheres de concluir suas falas, especialmente em contextos onde isso se repete."
          },
          {
            text: "Não interfere porque acredita que cada pessoa precisa defender sua própria ideia.",
            type: "normaliza",
            points: { c: -3, e: -3, p: -6, a: -3 },
            consequence: "A colega desiste de apresentar a proposta e fica em silêncio pelo restante da reunião.",
            pareEPense: "Às vezes, criar espaço para alguém falar é justamente uma forma de colaboração.",
            vocesabia: "Interrupções frequentes podem fazer com que pessoas deixem de participar de reuniões e discussões."
          },
          {
            text: "Interrompe o colega que interrompeu e começa a discutir com ele.",
            type: "confronto",
            points: { c: 5, e: 3, p: 8, a: 3 },
            consequence: "Kaique chama atenção para o problema, mas a reunião fica tensa.",
            pareEPense: "O objetivo não é criar uma disputa sobre quem pode falar, e sim garantir que todos tenham espaço.",
            vocesabia: "Intervenções curtas e objetivas podem ser suficientes para devolver a palavra sem transformar a situação em confronto."
          }
        ]
      },

      {
        ambiente: "Escola / Capacitação",
        bubbles: [
          {
            who: "narrador",
            text: "Durante uma atividade, uma colega explica uma solução para o problema."
          },
          {
            who: "colega",
            text: "Acho que podemos resolver dessa forma..."
          },
          {
            who: "outro aluno",
            text: "Isso é muito básico. Deixa que eu explico."
          },
          {
            who: "narrador",
            text: "Ele começa a explicar a mesma ideia como se ela não soubesse do assunto."
          }
        ],
        question: "O que Kaique identifica?",
        options: [
          {
            text: "Percebe que ela está sendo interrompida e que sua capacidade está sendo desvalorizada.",
            type: "best",
            points: { c: 13, e: 9, p: 12, a: 9 },
            consequence: "Kaique pede que a colega continue explicando e reconhece que ela já havia apresentado aquela solução.",
            pareEPense: "Reconhecer o conhecimento de alguém também é uma forma de respeito.",
            vocesabia: "Mansplaining descreve situações em que um homem explica algo a uma mulher de maneira condescendente, presumindo que ela não sabe sobre o assunto."
          },
          {
            text: "Acha que ele está apenas tentando ajudar e não interfere.",
            type: "normaliza",
            points: { c: -3, e: -2, p: -6, a: -2 },
            consequence: "A colega deixa de explicar e o colega assume a conversa.",
            pareEPense: "Nem toda explicação é mansplaining. O contexto importa: presumir que alguém não sabe, ignorar o que ela acabou de explicar e tomar sua fala são sinais importantes.",
            vocesabia: "O mansplaining está relacionado não apenas a explicar, mas também à forma condescendente e à presunção de falta de conhecimento."
          },
          {
            text: "Faz uma piada sobre o colega estar tentando aparecer.",
            type: "confronto",
            points: { c: 5, e: 3, p: 6, a: 3 },
            consequence: "Alguns riem, mas a situação continua sem que a colega consiga recuperar o espaço.",
            pareEPense: "Uma piada pode chamar atenção para o problema, mas nem sempre resolve a situação de quem teve a fala tomada.",
            vocesabia: "Uma intervenção mais direta pode ser simplesmente devolver a palavra para quem estava falando."
          }
        ]
      },

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          {
            who: "narrador",
            text: "Uma colega apresenta uma solução para um problema que a equipe enfrenta."
          },
          {
            who: "narrador",
            text: "Ninguém comenta. Alguns minutos depois, outro colega apresenta a mesma solução."
          },
          {
            who: "colega",
            text: "Boa ideia! Podemos fazer exatamente isso."
          }
        ],
        question: "O que Kaique faz?",
        options: [
          {
            text: "Lembra ao grupo que a colega havia apresentado aquela ideia primeiro.",
            type: "best",
            points: { c: 12, e: 10, p: 13, a: 10 },
            consequence: "O colega reconhece que realmente não tinha percebido que a ideia já havia sido apresentada.",
            pareEPense: "Dar crédito é simples, mas pode fazer uma grande diferença para quem está tentando ser ouvido.",
            vocesabia: "Ideias apresentadas por mulheres podem receber menos reconhecimento em ambientes onde sua participação já é desvalorizada."
          },
          {
            text: "Não fala nada porque a ideia será utilizada de qualquer maneira.",
            type: "normaliza",
            points: { c: -3, e: -3, p: -6, a: -3 },
            consequence: "A ideia é adotada, mas a colega não recebe reconhecimento pela contribuição.",
            pareEPense: "O resultado importa, mas reconhecer quem contribuiu também faz parte de um ambiente justo.",
            vocesabia: "Reconhecimento profissional influencia motivação, confiança e percepção de pertencimento."
          },
          {
            text: "Fala que o colega roubou a ideia dela.",
            type: "confronto",
            points: { c: 6, e: 3, p: 7, a: 3 },
            consequence: "A situação vira uma discussão sobre quem teve a ideia primeiro.",
            pareEPense: "É possível corrigir a situação sem transformar o momento em uma acusação.",
            vocesabia: "Uma intervenção objetiva, como 'ela acabou de sugerir isso', pode ser suficiente para devolver o crédito."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 4 — KAIQUE
  // ==========================================================
  {
    id: 4,
    title: "Não é só uma mensagem",
    subtitle: "Controle, pressão e violência psicológica no digital",
    icon: "chapter4",
    situations: [

      {
        ambiente: "Ambiente Digital",
        bubbles: [
          {
            who: "narrador",
            text: "Uma amiga de Kaique publica uma foto. Pouco depois, recebe várias mensagens de alguém criticando sua roupa."
          },
          {
            who: "pessoa",
            text: "Você não deveria postar uma foto assim. Depois não reclama quando os outros comentarem."
          },
          {
            who: "narrador",
            text: "A amiga começa a apagar a foto."
          }
        ],
        question: "Como Kaique pode agir?",
        options: [
          {
            text: "Conversa com a amiga e reforça que ninguém tem direito de controlar o que ela publica por meio de culpa ou ameaça.",
            type: "best",
            points: { c: 12, e: 11, p: 10, a: 11 },
            consequence: "A amiga percebe que estava apagando a foto mais por medo da reação daquela pessoa do que por vontade própria.",
            pareEPense: "Uma pessoa pode escolher não publicar algo. Outra coisa é sentir que precisa apagar por medo ou pressão.",
            vocesabia: "Controle e humilhação podem acontecer também por meio das redes sociais."
          },
          {
            text: "Diz para ela simplesmente ignorar e continuar postando.",
            type: "neutro",
            points: { c: 5, e: 6, p: 5, a: 6 },
            consequence: "Ela agradece o conselho, mas continua insegura sobre as mensagens.",
            pareEPense: "Ignorar pode funcionar em algumas situações, mas quando existe um padrão de perseguição ou ameaça, é importante buscar apoio.",
            vocesabia: "Guardar registros de mensagens pode ser importante quando comportamentos abusivos continuam acontecendo."
          },
          {
            text: "Vai até a pessoa e ameaça fazer a mesma coisa com ela.",
            type: "confronto",
            points: { c: 2, e: 2, p: 3, a: 2 },
            consequence: "A discussão aumenta e outras pessoas entram no conflito.",
            pareEPense: "Defender alguém não significa responder à violência com mais violência.",
            vocesabia: "Em situações digitais, denunciar, bloquear e buscar apoio pode ser mais seguro do que partir para confronto."
          }
        ]
      },

      {
        ambiente: "Relacionamento / Digital",
        bubbles: [
          {
            who: "narrador",
            text: "Um conhecido conta para Kaique que o parceiro dele exige localização em tempo real o dia inteiro."
          },
          {
            who: "conhecido",
            text: "Se eu desligo a localização, começa uma discussão. Ele diz que é porque se preocupa comigo."
          },
          {
            who: "narrador",
            text: "Kaique percebe que o conhecido parece desconfortável com a situação."
          }
        ],
        question: "O que Kaique pode dizer?",
        options: [
          {
            text: "Diz que preocupação não deveria exigir vigilância constante e pergunta se ele se sente seguro para conversar sobre isso.",
            type: "best",
            points: { c: 13, e: 12, p: 10, a: 12 },
            consequence: "O conhecido conta que já tinha vontade de falar sobre isso, mas tinha medo de parecer ingrato.",
            pareEPense: "Cuidado e controle podem parecer semelhantes por fora. Uma pergunta importante é: existe liberdade para dizer não?",
            vocesabia: "Monitoramento constante de localização pode ser uma forma de controle quando não existe consentimento livre ou quando há pressão para manter o compartilhamento."
          },
          {
            text: "Diz que ele deveria terminar imediatamente.",
            type: "confronto",
            points: { c: 5, e: 4, p: 6, a: 3 },
            consequence: "O conhecido fica na defensiva e muda de assunto.",
            pareEPense: "Dar ordens sobre uma relação pode afastar alguém que já está vivendo uma situação difícil.",
            vocesabia: "Apoiar alguém sem julgá-lo pode facilitar que essa pessoa procure ajuda quando estiver preparada."
          },
          {
            text: "Diz que isso é normal em relacionamentos e que não precisa se preocupar.",
            type: "normaliza",
            points: { c: -7, e: -8, p: -8, a: -6 },
            consequence: "O conhecido conclui que talvez esteja realmente exagerando.",
            pareEPense: "Algo ser comum não significa que seja saudável.",
            vocesabia: "Comportamentos controladores podem ser normalizados socialmente justamente porque aparecem disfarçados de cuidado ou ciúme."
          }
        ]
      },

      {
        ambiente: "Ambiente Digital",
        bubbles: [
          {
            who: "narrador",
            text: "No grupo da turma, alguém começa a fazer comentários depreciativos sobre uma menina."
          },
          {
            who: "colega",
            text: "Ela se acha demais. Aposto que só conseguiu aquela oportunidade porque é bonita."
          },
          {
            who: "narrador",
            text: "Outras pessoas começam a curtir a mensagem."
          }
        ],
        question: "O que Kaique pode fazer?",
        options: [
          {
            text: "Não participa dos comentários e diz que a conquista dela não deveria ser diminuída por sua aparência.",
            type: "best",
            points: { c: 11, e: 9, p: 12, a: 10 },
            consequence: "Alguns colegas param de interagir com a mensagem e o assunto muda.",
            pareEPense: "Questionar comentários que diminuem alguém pela aparência ajuda a quebrar padrões que parecem normais no grupo.",
            vocesabia: "Desqualificar mulheres atribuindo suas conquistas à aparência reforça estereótipos de gênero e pode contribuir para ambientes hostis."
          },
          {
            text: "Não comenta nada porque não foi ele quem escreveu.",
            type: "normaliza",
            points: { c: -3, e: -4, p: -5, a: -4 },
            consequence: "A mensagem continua recebendo curtidas e outras pessoas entram na conversa.",
            pareEPense: "Não participar já é diferente de incentivar, mas uma intervenção segura pode ajudar a impedir que o comportamento seja normalizado.",
            vocesabia: "Testemunhas também podem influenciar as normas de um grupo quando escolhem não reforçar comportamentos abusivos."
          },
          {
            text: "Responde com outra ofensa para defender a menina.",
            type: "confronto",
            points: { c: 4, e: 3, p: 6, a: 3 },
            consequence: "O grupo entra em uma sequência de provocações.",
            pareEPense: "Defender alguém não exige reproduzir a mesma lógica de humilhação.",
            vocesabia: "Intervenções objetivas e focadas no comportamento costumam ser mais produtivas do que ataques pessoais."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 5 — KAIQUE
  // ==========================================================
  {
    id: 5,
    title: "Agora eu percebo",
    subtitle: "Reconhecer, apoiar e transformar atitudes",
    icon: "chapter5",
    situations: [

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          {
            who: "narrador",
            text: "Kaique percebe que, em algumas reuniões, costumava interromper colegas sem perceber."
          },
          {
            who: "narrador",
            text: "Um dia, uma colega diz: 'Espera só um pouquinho, eu ainda não terminei'."
          },
          {
            who: "narrador",
            text: "Kaique percebe que aquilo que parecia apenas uma interrupção pequena para ele estava acontecendo com frequência."
          }
        ],
        question: "Como Kaique pode reagir?",
        options: [
          {
            text: "Reconhece o comportamento, pede desculpas e passa a prestar mais atenção antes de interromper.",
            type: "best",
            points: { c: 15, e: 12, p: 12, a: 12 },
            consequence: "Kaique percebe que começa a ouvir mais e interromper menos. As reuniões ficam mais equilibradas.",
            pareEPense: "Reconhecer um comportamento não significa se considerar uma pessoa ruim. Significa estar disposto a melhorar.",
            vocesabia: "A reflexão sobre atitudes próprias é uma parte importante da prevenção de comportamentos que podem reproduzir desigualdades."
          },
          {
            text: "Diz que todo mundo interrompe e que ela está exagerando.",
            type: "normaliza",
            points: { c: -7, e: -6, p: -8, a: -5 },
            consequence: "A colega deixa de falar sobre o assunto e passa a evitar trabalhar diretamente com Kaique.",
            pareEPense: "O fato de um comportamento ser comum não significa que seu impacto deixe de existir.",
            vocesabia: "Minimizar repetidamente o incômodo de alguém pode contribuir para ambientes onde as pessoas deixam de comunicar problemas."
          },
          {
            text: "Fica extremamente envergonhado e decide não participar mais das reuniões.",
            type: "neutro",
            points: { c: 5, e: 4, p: 4, a: 2 },
            consequence: "Kaique evita novas interrupções, mas também deixa de contribuir com suas próprias ideias.",
            pareEPense: "Aprender com um erro não exige desaparecer. O objetivo é mudar o comportamento, não deixar de participar.",
            vocesabia: "Reflexão saudável envolve reconhecer erros sem transformar um comportamento específico em uma definição completa sobre quem somos."
          }
        ]
      },

      {
        ambiente: "Amizade",
        bubbles: [
          {
            who: "narrador",
            text: "Um amigo de Kaique faz uma piada sobre uma garota do grupo."
          },
          {
            who: "amigo",
            text: "Calma, é brincadeira. Você sabe que ela nem liga."
          },
          {
            who: "narrador",
            text: "Kaique percebe que ela ficou desconfortável, mesmo sem responder."
          }
        ],
        question: "O que Kaique pode fazer?",
        options: [
          {
            text: "Diz que a brincadeira não foi legal e muda o foco da conversa sem expor ainda mais a garota.",
            type: "best",
            points: { c: 12, e: 10, p: 12, a: 11 },
            consequence: "O amigo fica sem graça, mas para com a piada. A garota consegue permanecer na conversa sem ser colocada ainda mais no centro.",
            pareEPense: "Às vezes uma intervenção simples já basta para interromper uma situação desconfortável.",
            vocesabia: "Intervenções de espectadores podem ajudar a reduzir comportamentos abusivos quando acontecem de forma segura."
          },
          {
            text: "Ri junto para não ficar contra o grupo.",
            type: "normaliza",
            points: { c: -6, e: -6, p: -7, a: -5 },
            consequence: "A garota se afasta do grupo e a brincadeira continua.",
            pareEPense: "Rir pode parecer uma atitude pequena, mas também comunica ao grupo que aquele comportamento é aceitável.",
            vocesabia: "A aprovação social, mesmo através de risadas, pode reforçar comportamentos preconceituosos."
          },
          {
            text: "Expulsa o amigo do grupo e diz que ele é uma pessoa horrível.",
            type: "confronto",
            points: { c: 5, e: 3, p: 7, a: 3 },
            consequence: "A situação vira uma discussão maior e o grupo se divide.",
            pareEPense: "É possível reprovar uma atitude sem transformar imediatamente a pessoa inteira em um rótulo.",
            vocesabia: "Focar no comportamento ajuda a criar espaço para responsabilização e mudança."
          }
        ]
      },

      {
        ambiente: "Reflexão pessoal",
        bubbles: [
          {
            who: "narrador",
            text: "Depois de passar por diferentes situações, Kaique lembra de momentos em que achou que certos comportamentos eram apenas 'coisa de relacionamento' ou 'brincadeira'."
          },
          {
            who: "narrador",
            text: "Agora ele percebe que alguns deles envolviam controle, desvalorização ou silenciamento."
          }
        ],
        question: "O que Kaique leva dessa experiência?",
        options: [
          {
            text: "Entende que reconhecer violências invisíveis é também perceber comportamentos que foram normalizados.",
            type: "best",
            points: { c: 15, e: 12, p: 14, a: 13 },
            consequence: "Kaique percebe que pequenas atitudes podem contribuir para ambientes mais respeitosos — inclusive quando ele é apenas uma testemunha.",
            pareEPense: "Nem sempre a violência aparece de forma óbvia. Aprender a reconhecer os sinais é o primeiro passo para poder agir.",
            vocesabia: "Violências psicológicas e comportamentos como gaslighting, mansplaining e manterrupting podem ser difíceis de identificar justamente porque muitas vezes são tratados como algo normal."
          },
          {
            text: "Conclui que esses problemas são exagerados e que as pessoas precisam aprender a ignorar.",
            type: "normaliza",
            points: { c: -8, e: -8, p: -10, a: -8 },
            consequence: "Kaique continua interpretando situações de desrespeito como problemas pequenos que não precisam ser enfrentados.",
            pareEPense: "Ignorar um comportamento não faz necessariamente com que ele desapareça.",
            vocesabia: "A naturalização de comportamentos abusivos pode dificultar que vítimas e testemunhas reconheçam quando é necessário buscar ajuda."
          },
          {
            text: "Decide que precisa resolver todos os problemas dos outros sozinho.",
            type: "confronto",
            points: { c: 6, e: 6, p: 5, a: 4 },
            consequence: "Kaique percebe que querer ajudar é importante, mas que algumas situações exigem apoio de pessoas responsáveis ou profissionais.",
            pareEPense: "Ajudar não significa carregar sozinho um problema que não é só seu.",
            vocesabia: "Em situações de violência ou risco, buscar apoio de pessoas de confiança e serviços especializados pode ser mais seguro do que tentar resolver tudo sozinho."
          }
        ]
      }
    ]
  }
];

STORYLINES.aisha = [

  // ==========================================================
  // CAPÍTULO 1
  // ==========================================================
  {
    id: 1,
    title: "Você nem entende disso",
    subtitle: "Quando o conhecimento de uma mulher é colocado em dúvida",
    icon: "chapter1",

    situations: [

      {
        ambiente: "Faculdade / Tecnologia",

        bubbles: [
          {
            who: "narrador",
            text: "{name} está em um trabalho da faculdade sobre desenvolvimento de um aplicativo. Ela pesquisou bastante sobre a tecnologia que o grupo decidiu utilizar."
          },
          {
            who: "colega",
            text: "Aisha, acho melhor deixar essa parte comigo. Esse negócio de programação é meio complicado. Você pode cuidar do layout."
          },
          {
            who: "narrador",
            text: "{name} percebe que ele nem perguntou sobre sua experiência com programação."
          }
        ],

        question: "Como {name} pode reagir?",

        options: [

          {
            text: "Explica que conhece a tecnologia e que pode contribuir também na parte de programação.",
            type: "best",

            points: {
              c: 12,
              e: 8,
              p: 14,
              a: 10
            },

            consequence:
              "Aisha mostra o que já desenvolveu e o grupo percebe que ela realmente domina o assunto.",

            pareEPense:
              "Não é preciso aceitar um papel menor só porque alguém presumiu que você não sabe fazer determinada coisa.",

            vocesabia:
              "Questionar ou diminuir a capacidade de uma mulher em uma área considerada 'masculina', sem considerar seu conhecimento real, pode reforçar estereótipos de gênero."
          },

          {
            text: "Aceita cuidar apenas do layout para evitar uma discussão com o grupo.",
            type: "normaliza",

            points: {
              c: -4,
              e: -3,
              p: -8,
              a: -3
            },

            consequence:
              "Aisha fica responsável por uma parte que nem queria fazer e percebe que suas habilidades foram ignoradas.",

            pareEPense:
              "Evitar conflito pode parecer mais fácil naquele momento, mas também pode fazer com que outras pessoas continuem decidindo o que você é capaz de fazer.",

            vocesabia:
              "Estereótipos podem influenciar a distribuição de tarefas em grupos, fazendo com que mulheres sejam direcionadas para funções consideradas mais 'femininas'."
          },

          {
            text: "Pergunta ao colega por que ele acha que ela não consegue fazer essa parte.",
            type: "neutro",

            points: {
              c: 8,
              e: 8,
              p: 8,
              a: 8
            },

            consequence:
              "O colega percebe que não tinha nenhuma razão concreta e admite que simplesmente presumiu que ela não sabia.",

            pareEPense:
              "Às vezes, uma pergunta simples faz a outra pessoa perceber um preconceito que estava passando despercebido.",

            vocesabia:
              "Questionar uma suposição pode ajudar a tornar visíveis preconceitos que normalmente aparecem de maneira indireta."
          }
        ]
      },

      {
        ambiente: "Faculdade / Trabalho em grupo",

        bubbles: [
          {
            who: "narrador",
            text: "{name} começa a apresentar uma solução que encontrou para um problema do projeto."
          },
          {
            who: "colega",
            text: "Calma, deixa eu explicar porque acho que vocês não entenderam."
          },
          {
            who: "narrador",
            text: "Ele começa a explicar exatamente a mesma ideia que Aisha estava apresentando."
          }
        ],

        question: "O que está acontecendo?",

        options: [

          {
            text: "Interrompe educadamente e diz que aquela era justamente a ideia que ela estava explicando.",
            type: "best",

            points: {
              c: 12,
              e: 8,
              p: 12,
              a: 10
            },

            consequence:
              "O grupo percebe a situação e pede para Aisha continuar explicando sua proposta.",

            pareEPense:
              "Reconhecer a própria ideia e recuperar a palavra não é falta de educação.",

            vocesabia:
              "Quando alguém assume que precisa explicar algo que uma mulher já demonstrou conhecer, especialmente de maneira condescendente, isso pode ser uma manifestação de mansplaining."
          },

          {
            text: "Deixa o colega terminar porque não quer parecer competitiva.",
            type: "normaliza",

            points: {
              c: -3,
              e: -3,
              p: -7,
              a: -3
            },

            consequence:
              "O colega termina a explicação e recebe os elogios pela solução que Aisha havia apresentado.",

            pareEPense:
              "Abrir mão da própria voz repetidamente pode fazer com que outras pessoas acabem recebendo reconhecimento pelo seu trabalho.",

            vocesabia:
              "Interrupções e apropriação de ideias podem contribuir para que mulheres tenham menos reconhecimento em ambientes acadêmicos e profissionais."
          },

          {
            text: "Espera ele terminar e depois explica novamente que a ideia havia sido apresentada por ela.",
            type: "neutro",

            points: {
              c: 8,
              e: 7,
              p: 8,
              a: 8
            },

            consequence:
              "O grupo percebe a situação e volta a atenção para Aisha.",

            pareEPense:
              "Nem sempre conseguimos reagir imediatamente. Ainda assim, é possível recuperar o espaço depois.",

            vocesabia:
              "Dar crédito à pessoa que apresentou originalmente uma ideia é uma forma simples de combater a invisibilização."
          }
        ]
      },

      {
        ambiente: "Universidade",

        bubbles: [
          {
            who: "narrador",
            text: "{name} recebe uma nota baixa em um trabalho. Ela acredita que houve um erro na correção e procura o professor para conversar."
          },
          {
            who: "professor",
            text: "Aisha, talvez você esteja levando isso para o lado pessoal. Você parece muito preocupada com a nota."
          },
          {
            who: "narrador",
            text: "Ele não responde aos pontos que ela apresentou sobre a correção."
          }
        ],

        question: "O que {name} percebe nessa situação?",

        options: [

          {
            text: "Volta aos critérios da atividade e pede que os pontos sejam analisados objetivamente.",
            type: "best",

            points: {
              c: 12,
              e: 7,
              p: 12,
              a: 10
            },

            consequence:
              "Ao analisar os critérios, o professor percebe que realmente havia um ponto que precisava ser revisto.",

            pareEPense:
              "Questionar uma decisão com argumentos concretos não significa estar exagerando.",

            vocesabia:
              "Desviar uma discussão objetiva para características emocionais da pessoa pode funcionar como uma forma de deslegitimar sua fala."
          },

          {
            text: "Pede desculpas por ter questionado e vai embora.",
            type: "normaliza",

            points: {
              c: -5,
              e: -4,
              p: -7,
              a: -4
            },

            consequence:
              "Aisha deixa a sala sem saber se sua dúvida realmente fazia sentido.",

            pareEPense:
              "Ser chamada de 'emocional' ou 'exagerada' não significa automaticamente que sua percepção esteja errada.",

            vocesabia:
              "Rotular mulheres como excessivamente emocionais pode ser utilizado para desviar a atenção do conteúdo do que elas estão dizendo."
          },

          {
            text: "Pergunta calmamente quais critérios foram utilizados para chegar àquela nota.",
            type: "neutro",

            points: {
              c: 9,
              e: 8,
              p: 9,
              a: 8
            },

            consequence:
              "O professor apresenta os critérios e Aisha consegue avaliar melhor se concorda ou não com a avaliação.",

            pareEPense:
              "Transformar uma discussão emocional em uma conversa baseada em fatos pode ajudar a manter o foco no problema.",

            vocesabia:
              "Perguntas objetivas ajudam a diferenciar uma discordância legítima de uma reação baseada apenas em percepções pessoais."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 2
  // ==========================================================
  {
    id: 2,
    title: "Será que eu estou louca?",
    subtitle: "Gaslighting e a dúvida sobre a própria percepção",
    icon: "chapter2",

    situations: [

      {
        ambiente: "Relacionamento",

        bubbles: [
          {
            who: "narrador",
            text: "{name} conversa com o parceiro sobre uma situação que a deixou desconfortável na noite anterior."
          },
          {
            who: "parceiro(a)",
            text: "Você está inventando isso. Eu nunca falei desse jeito com você."
          },
          {
            who: "narrador",
            text: "Aisha lembra claramente da conversa, mas começa a questionar se talvez esteja interpretando tudo errado."
          }
        ],

        question: "O que pode estar acontecendo?",

        options: [

          {
            text: "Percebe que, se isso acontece repetidamente, pode ser um padrão de gaslighting.",
            type: "best",

            points: {
              c: 14,
              e: 10,
              p: 10,
              a: 8
            },

            consequence:
              "Aisha começa a observar outras situações semelhantes e percebe que aquela não foi a primeira vez.",

            pareEPense:
              "Uma discordância isolada não significa necessariamente manipulação. O alerta aparece quando negar fatos e sentimentos vira um padrão.",

            vocesabia:
              "Gaslighting é um padrão de manipulação que pode fazer uma pessoa duvidar da própria memória, percepção ou interpretação dos acontecimentos."
          },

          {
            text: "Aceita que provavelmente está errada e pede desculpas.",
            type: "normaliza",

            points: {
              c: -7,
              e: -4,
              p: -7,
              a: -3
            },

            consequence:
              "A discussão termina, mas Aisha começa a duvidar cada vez mais da própria memória.",

            pareEPense:
              "Questionar a própria memória ocasionalmente é normal. O problema é quando outra pessoa constantemente faz você acreditar que não pode confiar em si mesma.",

            vocesabia:
              "A repetição da invalidação pode afetar a confiança que uma pessoa tem em suas próprias percepções."
          },

          {
            text: "Conversa com uma pessoa de confiança para comparar as situações e entender melhor o que está acontecendo.",
            type: "neutro",

            points: {
              c: 10,
              e: 10,
              p: 7,
              a: 10
            },

            consequence:
              "Ao conversar com alguém de confiança, Aisha consegue organizar melhor os acontecimentos e identificar padrões.",

            pareEPense:
              "Buscar uma perspectiva externa pode ajudar quando estamos envolvidos emocionalmente em uma situação.",

            vocesabia:
              "Conversar com pessoas de confiança pode ajudar a reconhecer padrões de comportamento que são difíceis de perceber quando estamos dentro da situação."
          }
        ]
      },

      {
        ambiente: "Relacionamento / Digital",

        bubbles: [
          {
            who: "narrador",
            text: "{name} percebe que o parceiro costuma exigir respostas imediatas às mensagens."
          },
          {
            who: "parceiro(a)",
            text: "Você ficou duas horas sem responder. Se realmente gostasse de mim, não faria isso."
          },
          {
            who: "narrador",
            text: "Quando Aisha tenta explicar que estava estudando, ele diz que ela está procurando desculpas."
          }
        ],

        question: "Como interpretar essa situação?",

        options: [

          {
            text: "Percebe que o carinho está sendo usado como justificativa para controlar seu tempo.",
            type: "best",

            points: {
              c: 13,
              e: 9,
              p: 11,
              a: 10
            },

            consequence:
              "Aisha explica que estar em um relacionamento não significa precisar estar disponível o tempo inteiro.",

            pareEPense:
              "Amor e cuidado não deveriam exigir que alguém abandone sua autonomia.",

            vocesabia:
              "Controle excessivo de comunicação, cobranças constantes e exigência de disponibilidade podem fazer parte de relações controladoras."
          },

          {
            text: "Começa a responder imediatamente todas as mensagens para evitar novas discussões.",
            type: "normaliza",

            points: {
              c: -5,
              e: -4,
              p: -8,
              a: -4
            },

            consequence:
              "A cobrança diminui por alguns dias, mas logo surge outra exigência.",

            pareEPense:
              "Ceder constantemente para evitar conflitos pode fazer com que o comportamento controlador aumente.",

            vocesabia:
              "Comportamentos de controle podem se intensificar gradualmente quando passam a ser tratados como uma obrigação normal do relacionamento."
          },

          {
            text: "Explica que estava ocupada e pergunta se existe uma expectativa de que ela responda imediatamente.",
            type: "neutro",

            points: {
              c: 9,
              e: 8,
              p: 8,
              a: 8
            },

            consequence:
              "A conversa ajuda Aisha a entender melhor o que o parceiro espera e a estabelecer seus próprios limites.",

            pareEPense:
              "Conversar claramente sobre expectativas ajuda a diferenciar cuidado de controle.",

            vocesabia:
              "Relacionamentos saudáveis permitem que cada pessoa tenha seu próprio tempo, atividades e espaço."
          }
        ]
      },

      {
        ambiente: "Universidade",

        bubbles: [
          {
            who: "narrador",
            text: "{name} percebe que uma colega frequentemente faz comentários diminuindo suas ideias durante trabalhos em grupo."
          },
          {
            who: "colega",
            text: "Você sempre acha que sabe tudo. Talvez o problema seja você levar as coisas muito a sério."
          },
          {
            who: "narrador",
            text: "Aisha começa a pensar se realmente está exagerando."
          }
        ],

        question: "O que seria importante observar?",

        options: [

          {
            text: "Perceber se esse comportamento acontece repetidamente e se as críticas são usadas para desvalorizar suas ideias.",
            type: "best",

            points: {
              c: 12,
              e: 8,
              p: 12,
              a: 8
            },

            consequence:
              "Aisha percebe que não se trata de um comentário isolado, mas de um padrão que acontece em quase todos os trabalhos.",

            pareEPense:
              "Um comentário desagradável é diferente de um padrão constante de desvalorização.",

            vocesabia:
              "A violência psicológica pode aparecer de maneira sutil, por meio de humilhações, desvalorização e críticas constantes."
          },

          {
            text: "Decide que precisa mudar sua personalidade para que os colegas parem de reclamar.",
            type: "normaliza",

            points: {
              c: -5,
              e: -5,
              p: -7,
              a: -5
            },

            consequence:
              "Aisha começa a falar cada vez menos durante os trabalhos para evitar novas críticas.",

            pareEPense:
              "Adaptar-se constantemente para evitar que outras pessoas te diminuam pode fazer você perder espaço e confiança.",

            vocesabia:
              "A desvalorização constante pode fazer com que uma pessoa passe a limitar sua própria participação."
          },

          {
            text: "Conversa com outra colega para entender se ela também percebe esse comportamento.",
            type: "neutro",

            points: {
              c: 9,
              e: 9,
              p: 7,
              a: 9
            },

            consequence:
              "A colega confirma que já havia percebido situações semelhantes.",

            pareEPense:
              "Às vezes, perceber que outras pessoas também notaram ajuda a entender que não foi apenas uma impressão sua.",

            vocesabia:
              "Observar a frequência e o contexto de determinados comportamentos é importante para identificar padrões."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 3
  // ==========================================================
  {
    id: 3,
    title: "Eu estava falando",
    subtitle: "Manterrupting e o direito de ser ouvida",
    icon: "chapter3",

    situations: [

      {
        ambiente: "Faculdade",

        bubbles: [
          {
            who: "narrador",
            text: "Durante uma apresentação, Aisha começa a explicar a parte técnica do projeto."
          },
          {
            who: "colega",
            text: "Só um segundo, porque essa parte é mais complicada..."
          },
          {
            who: "narrador",
            text: "Ele interrompe Aisha antes que ela termine e assume a explicação."
          }
        ],

        question: "O que você faria?",

        options: [

          {
            text: "Pede para terminar sua explicação antes de passar a palavra.",
            type: "best",

            points: {
              c: 12,
              e: 8,
              p: 13,
              a: 10
            },

            consequence:
              "Aisha conclui sua explicação e depois permite que o colega acrescente o que considera necessário.",

            pareEPense:
              "Interromper uma interrupção também pode ser necessário para recuperar o espaço de fala.",

            vocesabia:
              "Manterrupting é o termo usado para descrever interrupções que impedem uma mulher de concluir sua fala, especialmente em contextos onde isso acontece de forma recorrente."
          },

          {
            text: "Deixa o colega continuar porque acha que talvez ele explique melhor.",
            type: "normaliza",

            points: {
              c: -4,
              e: -3,
              p: -8,
              a: -3
            },

            consequence:
              "O colega termina a explicação e a apresentação segue sem que Aisha consiga concluir seu raciocínio.",

            pareEPense:
              "Ser interrompida repetidamente pode fazer com que você passe a duvidar do próprio direito de ocupar aquele espaço.",

            vocesabia:
              "Interrupções frequentes podem reduzir a participação e a visibilidade de mulheres em reuniões, salas de aula e apresentações."
          },

          {
            text: "Espera o colega terminar e retoma a explicação de onde parou.",
            type: "neutro",

            points: {
              c: 8,
              e: 7,
              p: 8,
              a: 8
            },

            consequence:
              "Aisha recupera a palavra e termina a parte que estava apresentando.",

            pareEPense:
              "Mesmo quando a interrupção acontece, retomar a palavra pode ajudar a manter sua participação.",

            vocesabia:
              "Retomar uma fala interrompida é uma estratégia simples para evitar que a interrupção encerre completamente sua participação."
          }
        ]
      },

      {
        ambiente: "Trabalho / Reunião",

        bubbles: [
          {
            who: "narrador",
            text: "Em uma reunião, Aisha apresenta uma sugestão para melhorar um processo."
          },
          {
            who: "colega",
            text: "Não, não é bem assim..."
          },
          {
            who: "narrador",
            text: "Antes que ela consiga explicar, outro colega começa a falar por cima dela."
          }
        ],

        question: "Como agir?",

        options: [

          {
            text: "Espera uma pausa e diz: 'Eu gostaria de terminar minha ideia antes de ouvirmos outras sugestões.'",
            type: "best",

            points: {
              c: 12,
              e: 9,
              p: 13,
              a: 10
            },

            consequence:
              "A equipe percebe que Aisha ainda não havia terminado e permite que ela conclua.",

            pareEPense:
              "Estabelecer um limite claro não precisa significar criar um conflito.",

            vocesabia:
              "Frases objetivas podem ajudar a recuperar o espaço de fala sem transformar necessariamente a situação em uma discussão."
          },

          {
            text: "Fica em silêncio e deixa os colegas continuarem.",
            type: "normaliza",

            points: {
              c: -4,
              e: -4,
              p: -8,
              a: -4
            },

            consequence:
              "A ideia de Aisha não é discutida e a reunião passa para outro assunto.",

            pareEPense:
              "Quando uma pessoa é interrompida repetidamente, seu silêncio pode ser interpretado como falta de interesse, mesmo quando não é.",

            vocesabia:
              "A participação equilibrada em reuniões depende também de garantir que todas as pessoas tenham oportunidade de concluir suas ideias."
          },

          {
            text: "Depois da reunião, conversa com a liderança sobre a frequência das interrupções.",
            type: "neutro",

            points: {
              c: 9,
              e: 8,
              p: 8,
              a: 9
            },

            consequence:
              "A liderança reconhece que o padrão estava acontecendo e decide observar melhor as próximas reuniões.",

            pareEPense:
              "Nem todo problema precisa ser resolvido no calor do momento.",

            vocesabia:
              "Levar padrões recorrentes de comportamento à liderança pode ser uma alternativa quando o problema continua acontecendo."
          }
        ]
      },

      {
        ambiente: "Faculdade / Tecnologia",

        bubbles: [
          {
            who: "narrador",
            text: "{name} está explicando para o grupo como resolveu um erro no código."
          },
          {
            who: "colega",
            text: "Acho que você está complicando. É só fazer desse jeito aqui."
          },
          {
            who: "narrador",
            text: "Ele interrompe e mostra uma solução diferente, sem deixar Aisha terminar."
          }
        ],

        question: "O que seria importante fazer?",

        options: [

          {
            text: "Termina de explicar sua solução e depois compara as duas alternativas com o grupo.",
            type: "best",

            points: {
              c: 12,
              e: 8,
              p: 14,
              a: 10
            },

            consequence:
              "O grupo percebe que as duas soluções têm pontos diferentes e decide analisar ambas.",

            pareEPense:
              "Não é preciso transformar uma discordância em uma disputa. Primeiro, todos precisam ter espaço para apresentar suas ideias.",

            vocesabia:
              "Uma discordância técnica é saudável. O problema está quando alguém não permite que a outra pessoa conclua sua explicação."
          },

          {
            text: "Desiste de explicar porque o colega parece ter mais confiança.",
            type: "normaliza",

            points: {
              c: -5,
              e: -4,
              p: -8,
              a: -4
            },

            consequence:
              "A solução de Aisha nem chega a ser analisada pelo grupo.",

            pareEPense:
              "Confiança ao falar não significa necessariamente conhecimento maior.",

            vocesabia:
              "A maneira como alguém fala pode influenciar a percepção de competência, mesmo quando o conteúdo apresentado é equivalente."
          },

          {
            text: "Pergunta se ele pode esperar ela terminar antes de apresentar a outra solução.",
            type: "neutro",

            points: {
              c: 9,
              e: 7,
              p: 10,
              a: 8
            },

            consequence:
              "Ele espera e, depois, apresenta sua alternativa.",

            pareEPense:
              "Uma frase simples pode estabelecer uma regra de conversa que beneficia todo o grupo.",

            vocesabia:
              "Garantir que cada pessoa conclua sua explicação melhora a qualidade da discussão e reduz interrupções desnecessárias."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 4
  // ==========================================================
  {
    id: 4,
    title: "Do outro lado da tela",
    subtitle: "Gaslighting, misoginia e violência psicológica no ambiente digital",
    icon: "chapter4",

    situations: [

      {
        ambiente: "Ambiente Digital",

        bubbles: [
          {
            who: "narrador",
            text: "{name} publica nas redes sociais um projeto de tecnologia que desenvolveu na faculdade."
          },
          {
            who: "usuário",
            text: "Isso aí qualquer homem que entende de tecnologia faria em uma tarde. Você só ganhou atenção porque é mulher."
          },
          {
            who: "narrador",
            text: "Outras pessoas começam a curtir e compartilhar o comentário."
          }
        ],

        question: "Como reagir?",

        options: [

          {
            text: "Não entra na discussão e utiliza as ferramentas da plataforma para denunciar ataques que violarem as regras.",
            type: "best",

            points: {
              c: 10,
              e: 10,
              p: 10,
              a: 12
            },

            consequence:
              "Aisha evita transformar os comentários em uma discussão interminável e mantém o foco no trabalho que realizou.",

            pareEPense:
              "Nem toda provocação precisa receber uma resposta. Proteger sua segurança e seu bem-estar também é agir.",

            vocesabia:
              "Ataques direcionados à identidade ou ao gênero podem fazer parte de formas de assédio e violência digital."
          },

          {
            text: "Passa horas discutindo com as pessoas para provar que entende de tecnologia.",
            type: "normaliza",

            points: {
              c: -3,
              e: -6,
              p: -4,
              a: -7
            },

            consequence:
              "A discussão cresce e mais pessoas entram nos comentários.",

            pareEPense:
              "Você não precisa convencer desconhecidos na internet sobre o seu valor ou conhecimento.",

            vocesabia:
              "Discussões prolongadas com contas que buscam provocar podem aumentar a exposição ao assédio."
          },

          {
            text: "Bloqueia as contas que continuam atacando e conversa com amigos sobre o que aconteceu.",
            type: "neutro",

            points: {
              c: 8,
              e: 10,
              p: 7,
              a: 10
            },

            consequence:
              "Aisha reduz o contato com os comentários e recebe apoio das pessoas próximas.",

            pareEPense:
              "Estabelecer limites digitais também faz parte de cuidar de si.",

            vocesabia:
              "Bloquear, silenciar e denunciar contas são recursos que podem ajudar a reduzir interações abusivas."
          }
        ]
      },

      {
        ambiente: "Ambiente Digital / Relacionamento",

        bubbles: [
          {
            who: "narrador",
            text: "{name} percebe que o parceiro começou a pedir senhas e acesso às suas redes sociais."
          },
          {
            who: "parceiro(a)",
            text: "Se você não tem nada para esconder, não deveria ter problema em me passar sua senha."
          },
          {
            who: "narrador",
            text: "Aisha sente que recusar vai fazer parecer que está escondendo alguma coisa."
          }
        ],

        question: "O que essa situação revela?",

        options: [

          {
            text: "Percebe que privacidade não significa esconder algo e estabelece um limite sobre suas contas.",
            type: "best",

            points: {
              c: 14,
              e: 9,
              p: 12,
              a: 12
            },

            consequence:
              "Aisha explica que suas contas pessoais continuam sendo privadas mesmo estando em um relacionamento.",

            pareEPense:
              "Confiança não deveria exigir abrir mão de toda a sua privacidade.",

            vocesabia:
              "Exigir senhas, monitorar mensagens ou controlar redes sociais pode fazer parte de comportamentos de controle em relacionamentos."
          },

          {
            text: "Entrega as senhas para provar que não está escondendo nada.",
            type: "normaliza",

            points: {
              c: -6,
              e: -5,
              p: -9,
              a: -5
            },

            consequence:
              "Depois das senhas, novas cobranças aparecem sobre quem Aisha segue e com quem conversa.",

            pareEPense:
              "Ceder à primeira exigência não garante que o controle vai parar.",

            vocesabia:
              "Comportamentos de controle digital podem começar com pequenas exigências e aumentar gradualmente."
          },

          {
            text: "Pergunta por que ele precisa ter acesso às contas para confiar nela.",
            type: "neutro",

            points: {
              c: 10,
              e: 8,
              p: 9,
              a: 9
            },

            consequence:
              "A conversa mostra que a questão não era segurança, mas insegurança e necessidade de controle.",

            pareEPense:
              "Perguntar a razão de uma exigência pode ajudar a revelar o que realmente está por trás dela.",

            vocesabia:
              "Confiança em uma relação é construída por respeito e diálogo, não necessariamente pelo acesso às contas pessoais."
          }
        ]
      },

      {
        ambiente: "Redes sociais",

        bubbles: [
          {
            who: "narrador",
            text: "Depois de Aisha publicar uma opinião sobre tecnologia, uma pessoa começa a responder todos os seus posts."
          },
          {
            who: "usuário",
            text: "Você está ficando sensível demais. É só opinião. Se não aguenta crítica, não poste nada."
          },
          {
            who: "narrador",
            text: "As mensagens continuam mesmo depois que Aisha pede para a pessoa parar."
          }
        ],

        question: "O que fazer?",

        options: [

          {
            text: "Guarda registros das mensagens, bloqueia a pessoa e procura ajuda se os ataques continuarem ou se houver ameaça.",
            type: "best",

            points: {
              c: 12,
              e: 12,
              p: 10,
              a: 14
            },

            consequence:
              "Aisha evita continuar a interação e mantém registros caso precise denunciar a situação.",

            pareEPense:
              "Discordar de uma opinião é diferente de perseguir ou intimidar alguém.",

            vocesabia:
              "Quando interações online se transformam em perseguição, ameaças ou assédio repetido, guardar registros pode ser importante para buscar ajuda."
          },

          {
            text: "Continua respondendo para mostrar que não é 'sensível demais'.",
            type: "normaliza",

            points: {
              c: -4,
              e: -6,
              p: -5,
              a: -7
            },

            consequence:
              "A pessoa continua provocando e a quantidade de mensagens aumenta.",

            pareEPense:
              "Você não precisa provar sua resistência para alguém que está ultrapassando seus limites.",

            vocesabia:
              "Pessoas que praticam assédio online podem usar provocações sucessivas para manter a vítima envolvida na interação."
          },

          {
            text: "Pede ajuda a amigos e pergunta quais ferramentas de denúncia a plataforma oferece.",
            type: "neutro",

            points: {
              c: 9,
              e: 11,
              p: 7,
              a: 11
            },

            consequence:
              "Aisha descobre recursos de bloqueio e denúncia que ainda não conhecia.",

            pareEPense:
              "Você não precisa saber sozinho(a) como lidar com uma situação difícil.",

            vocesabia:
              "Conhecer ferramentas de segurança e denúncia pode ajudar usuários a lidar melhor com situações de assédio digital."
          }
        ]
      }
    ]
  },


  // ==========================================================
  // CAPÍTULO 5
  // ==========================================================
  {
    id: 5,
    title: "E se eu fizer diferente?",
    subtitle: "Reconhecer, agir e transformar comportamentos",
    icon: "chapter5",

    situations: [

      {
        ambiente: "Faculdade",

        bubbles: [
          {
            who: "narrador",
            text: "{name} percebe que uma colega ficou em silêncio depois de ser interrompida várias vezes durante uma apresentação."
          },
          {
            who: "narrador",
            text: "Quando a apresentação termina, a colega guarda suas coisas rapidamente."
          }
        ],

        question: "O que Aisha pode fazer?",

        options: [

          {
            text: "Pergunta se ela está bem e comenta que percebeu as interrupções durante a apresentação.",
            type: "best",

            points: {
              c: 12,
              e: 14,
              p: 10,
              a: 12
            },

            consequence:
              "A colega diz que ficou frustrada, mas se sente melhor por saber que alguém percebeu o que aconteceu.",

            pareEPense:
              "Às vezes, saber que alguém percebeu uma situação já faz a pessoa se sentir menos sozinha.",

            vocesabia:
              "Apoiar alguém que sofreu uma situação desconfortável pode ser uma forma importante de fortalecer redes de apoio."
          },

          {
            text: "Não fala nada porque acha que ela deveria resolver sozinha.",
            type: "normaliza",

            points: {
              c: -4,
              e: -7,
              p: -5,
              a: -7
            },

            consequence:
              "A colega vai embora acreditando que ninguém percebeu o que aconteceu.",

            pareEPense:
              "Não saber o que dizer não significa que você não possa demonstrar apoio.",

            vocesabia:
              "A falta de reação de testemunhas pode fazer com que situações de desrespeito pareçam normais."
          },

          {
            text: "Conta que também já percebeu interrupções semelhantes acontecendo com outras colegas.",
            type: "neutro",

            points: {
              c: 9,
              e: 12,
              p: 8,
              a: 10
            },

            consequence:
              "As duas percebem que aquele comportamento não aconteceu apenas uma vez.",

            pareEPense:
              "Conversar sobre padrões ajuda a transformar experiências individuais em uma reflexão coletiva.",

            vocesabia:
              "Identificar padrões é importante para entender que determinados comportamentos não são necessariamente casos isolados."
          }
        ]
      },


      {
        ambiente: "Trabalho / Aprendizagem",

        bubbles: [
          {
            who: "narrador",
            text: "Durante uma reunião, um colega interrompe uma aprendiz várias vezes."
          },
          {
            who: "colega",
            text: "Calma, deixa eu terminar. Você pode falar depois."
          },
          {
            who: "narrador",
            text: "Aisha percebe que ninguém reage."
          }
        ],

        question: "Qual seria uma atitude de apoio?",

        options: [

          {
            text: "Diz: 'Ela ainda não terminou. Vamos deixar ela concluir e depois você complementa.'",
            type: "best",

            points: {
              c: 13,
              e: 10,
              p: 14,
              a: 12
            },

            consequence:
              "A aprendiz retoma a fala e termina sua explicação.",

            pareEPense:
              "Às vezes, uma pequena intervenção é suficiente para devolver a alguém o espaço que foi retirado.",

            vocesabia:
              "Intervenções de espectadores podem ajudar a interromper padrões de desrespeito em ambientes coletivos."
          },

          {
            text: "Não interfere porque acredita que a reunião não é problema seu.",
            type: "normaliza",

            points: {
              c: -4,
              e: -5,
              p: -7,
              a: -5
            },

            consequence:
              "A aprendiz não consegue terminar sua ideia e fica quieta pelo restante da reunião.",

            pareEPense:
              "Quando ninguém reage, um comportamento inadequado pode parecer normal para todo mundo.",

            vocesabia:
              "Testemunhas têm um papel importante na construção de ambientes mais respeitosos."
          },

          {
            text: "Espera a reunião acabar e depois diz à aprendiz que percebeu o que aconteceu.",
            type: "neutro",

            points: {
              c: 8,
              e: 12,
              p: 6,
              a: 9
            },

            consequence:
              "A aprendiz agradece e conta que isso já aconteceu outras vezes.",

            pareEPense:
              "Mesmo depois do acontecimento, demonstrar que você percebeu e se importa pode fazer diferença.",

            vocesabia:
              "Apoio individual pode ajudar uma pessoa a perceber que sua experiência foi válida e que ela não está sozinha."
          }
        ]
      },


      {
        ambiente: "Reflexão pessoal",

        bubbles: [
          {
            who: "narrador",
            text: "{name} lembra de uma situação antiga em que interrompeu alguém durante uma discussão porque achava que sua própria opinião era mais importante."
          },
          {
            who: "narrador",
            text: "Agora, depois de tudo que aprendeu, ela percebe que poderia ter agido de outra maneira."
          }
        ],

        question: "O que fazer com essa percepção?",

        options: [

          {
            text: "Reconhece o erro e decide prestar mais atenção para não repetir o comportamento.",
            type: "best",

            points: {
              c: 15,
              e: 12,
              p: 12,
              a: 14
            },

            consequence:
              "Aisha entende que aprender sobre violência também significa observar as próprias atitudes.",

            pareEPense:
              "Reconhecer um comportamento inadequado não significa ser uma pessoa ruim. Significa ter oportunidade de fazer diferente.",

            vocesabia:
              "A prevenção da violência também envolve reconhecer comportamentos naturalizados e desenvolver novas formas de se relacionar."
          },

          {
            text: "Pensa que isso não importa porque aconteceu há muito tempo.",
            type: "normaliza",

            points: {
              c: -4,
              e: -5,
              p: -6,
              a: -5
            },

            consequence:
              "Aisha deixa a reflexão de lado e segue sem pensar sobre o assunto.",

            pareEPense:
              "O passado não pode ser alterado, mas as atitudes futuras podem.",

            vocesabia:
              "Refletir sobre comportamentos passados pode ajudar a evitar que padrões problemáticos sejam repetidos."
          },

          {
            text: "Decide conversar com a pessoa caso tenha oportunidade e reconhecer que poderia ter agido diferente.",
            type: "neutro",

            points: {
              c: 12,
              e: 12,
              p: 9,
              a: 12
            },

            consequence:
              "Quando encontra a pessoa, Aisha reconhece sua atitude e pede desculpas sem tentar justificar o comportamento.",

            pareEPense:
              "Pedir desculpas de verdade não apaga o que aconteceu, mas pode demonstrar responsabilidade e disposição para mudar.",

            vocesabia:
              "Assumir responsabilidade por comportamentos inadequados é parte importante da construção de relações mais respeitosas."
          }
        ]
      }
    ]
  }

];

STORYLINES.theo = [
  // ==========================================================
  // CAPÍTULO 1
  // ==========================================================
  {
    id: 1,
    title: "Era só uma piada",
    subtitle: "Quando uma brincadeira deixa de ser engraçada",
    icon: "chapter1",
    situations: [

      {
        ambiente: "Escola / Capacitação",
        bubbles: [
          { who: "narrador", text: "Durante uma atividade, uma colega apresenta seu trabalho para a turma. Alguns meninos começam a fazer comentários sobre a aparência dela." },
          { who: "colega", text: "Ih, Theo, olha só... ela veio toda produzida hoje. Deve estar querendo chamar atenção." },
          { who: "narrador", text: "Alguns alunos riem. A colega para de falar por alguns segundos e parece desconfortável." }
        ],
        question: "O que Theo pode fazer?",
        options: [
          {
            text: "Dizer que o comentário não tem graça e que ela deveria poder apresentar sem ser alvo desse tipo de comentário.",
            type: "best",
            points: { c: 12, e: 12, p: 12, a: 10 },
            consequence: "Os colegas ficam sem graça. A colega respira fundo e continua sua apresentação.",
            pareEPense: "Nem toda brincadeira precisa ser aceita só porque algumas pessoas estão rindo. Perceber o desconforto de quem virou alvo também importa.",
            vocesabia: "Comentários sobre aparência podem contribuir para a objetificação e constrangimento de meninas e mulheres, especialmente quando acontecem repetidamente."
          },
          {
            text: "Ri junto, porque não quer parecer chato na frente dos amigos.",
            type: "normaliza",
            points: { c: -6, e: -6, p: -6, a: -2 },
            consequence: "A colega termina a apresentação rapidamente e evita participar novamente.",
            pareEPense: "Às vezes rimos apenas para acompanhar o grupo. Mesmo assim, nossa reação pode ajudar a mostrar que aquele comportamento é aceitável.",
            vocesabia: "A naturalização de comentários ofensivos acontece muitas vezes quando o grupo trata a situação como uma simples brincadeira."
          },
          {
            text: "Não ri, mas também não fala nada.",
            type: "neutro",
            points: { c: 5, e: 4, p: 3, a: 2 },
            consequence: "Theo não participa dos comentários, mas percebe que ninguém interrompe a situação.",
            pareEPense: "Não participar já é diferente de incentivar. Mas, quando for seguro, também podemos ajudar quem está sendo alvo.",
            vocesabia: "Testemunhas podem ter um papel importante na prevenção de situações de violência e constrangimento."
          }
        ]
      },

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "No intervalo do trabalho, alguns colegas conversam sobre uma aprendiz que foi escolhida para apresentar um projeto." },
          { who: "colega", text: "Colocaram ela para apresentar? Achei que precisavam de alguém que entendesse de verdade." },
          { who: "narrador", text: "Outro colega responde rindo: 'É, mas ela sabe falar bonito. Já ajuda'." }
        ],
        question: "O que Theo percebe nessa conversa?",
        options: [
          {
            text: "Percebe que estão desvalorizando a capacidade dela e questiona o comentário.",
            type: "best",
            points: { c: 12, e: 8, p: 12, a: 10 },
            consequence: "Um dos colegas diz que estava brincando, mas Theo percebe que a competência dela foi colocada em dúvida sem motivo.",
            pareEPense: "Questionar a competência de alguém sem conhecer seu trabalho pode reforçar preconceitos que parecem pequenos, mas se repetem.",
            vocesabia: "Comentários que associam mulheres à aparência ou à capacidade de 'falar bonito', em vez de reconhecer suas competências, podem reforçar estereótipos de gênero."
          },
          {
            text: "Fica quieto porque acha que é apenas uma opinião dos colegas.",
            type: "normaliza",
            points: { c: -4, e: -4, p: -7, a: -3 },
            consequence: "A conversa continua e outros comentários sobre ela aparecem.",
            pareEPense: "Nem todo comentário preconceituoso parece grave isoladamente. O problema pode aparecer quando esse padrão se repete.",
            vocesabia: "A repetição de comentários que diminuem a capacidade profissional de mulheres pode contribuir para ambientes de trabalho desrespeitosos."
          },
          {
            text: "Depois, comenta com a colega que torce para que a apresentação dela dê certo.",
            type: "neutro",
            points: { c: 7, e: 8, p: 5, a: 7 },
            consequence: "Ela agradece e diz que estava nervosa antes da apresentação.",
            pareEPense: "Demonstrar apoio também faz diferença, principalmente quando alguém está sendo desvalorizado pelos outros.",
            vocesabia: "O apoio de colegas pode contribuir para que pessoas que sofrem desvalorização não se sintam isoladas."
          }
        ]
      },

      {
        ambiente: "Ambiente Digital",
        bubbles: [
          { who: "narrador", text: "No grupo de amigos, alguém envia uma foto de uma menina da escola sem que ela saiba." },
          { who: "colega", text: "Olha isso kkkkk. Não manda pra ela que ela vai ficar brava." },
          { who: "narrador", text: "Outros começam a compartilhar a imagem." }
        ],
        question: "O que Theo pode fazer?",
        options: [
          {
            text: "Pedir para não compartilharem a foto e lembrar que ela não autorizou a divulgação.",
            type: "best",
            points: { c: 12, e: 12, p: 12, a: 10 },
            consequence: "Alguns param de compartilhar. Um amigo apaga a imagem do próprio celular.",
            pareEPense: "Antes de compartilhar uma imagem de alguém, é importante pensar se aquela pessoa autorizou e como ela pode se sentir.",
            vocesabia: "Compartilhar imagens de outras pessoas sem consentimento pode causar exposição, constrangimento e consequências que continuam mesmo depois que a postagem é apagada."
          },
          {
            text: "Não compartilha, mas deixa o grupo continuar porque não quer arrumar confusão.",
            type: "neutro",
            points: { c: 3, e: 3, p: 2, a: 2 },
            consequence: "A imagem continua circulando entre os integrantes do grupo.",
            pareEPense: "Não participar é importante, mas também podemos interromper a circulação quando percebemos que alguém está sendo exposto.",
            vocesabia: "Conteúdos compartilhados em grupos podem sair rapidamente do controle e alcançar pessoas que não faziam parte da conversa original."
          },
          {
            text: "Envia a foto para outro amigo, mas pede para ele não compartilhar.",
            type: "normaliza",
            points: { c: -7, e: -7, p: -8, a: -4 },
            consequence: "O amigo acaba enviando para outra pessoa e a imagem continua circulando.",
            pareEPense: "Mesmo com a intenção de 'mostrar só para alguém', cada novo compartilhamento aumenta a exposição da pessoa.",
            vocesabia: "Na internet, depois que um conteúdo é compartilhado, pode ser difícil controlar onde ele vai parar."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 2
  // ==========================================================
  {
    id: 2,
    title: "Será que eu entendi errado?",
    subtitle: "Gaslighting e violência psicológica",
    icon: "chapter2",
    situations: [

      {
        ambiente: "Relacionamento",
        bubbles: [
          { who: "narrador", text: "Um amigo de Theo conta que discutiu com a namorada. Ele diz que ela ficou chateada com algo que ele falou." },
          { who: "amigo", text: "Eu só falei que ela estava exagerando. Agora ela diz que eu fiz ela se sentir mal." },
          { who: "narrador", text: "Theo percebe que o amigo parece realmente não entender por que aquilo a afetou." }
        ],
        question: "O que Theo pode pensar sobre a situação?",
        options: [
          {
            text: "Que mesmo sem intenção de machucar, é importante ouvir quando alguém diz que uma fala causou desconforto.",
            type: "best",
            points: { c: 12, e: 12, p: 10, a: 10 },
            consequence: "O amigo começa a pensar sobre o que aconteceu e decide conversar com ela sem tentar diminuir o que ela sentiu.",
            pareEPense: "Não precisamos concordar com tudo que alguém sente para respeitar que aquela emoção existe.",
            vocesabia: "Invalidar repetidamente sentimentos, dizendo que a pessoa está 'louca', 'dramática' ou 'exagerando', pode fazer parte de padrões de violência psicológica."
          },
          {
            text: "Dizer para o amigo esquecer isso porque provavelmente foi só uma discussão normal.",
            type: "normaliza",
            points: { c: -4, e: -6, p: -5, a: -3 },
            consequence: "O amigo não conversa mais sobre o assunto e o problema fica sem ser discutido.",
            pareEPense: "Discussões acontecem em qualquer relação. O importante é observar quando determinados comportamentos se tornam repetitivos.",
            vocesabia: "Um conflito isolado não é necessariamente violência. É importante observar frequência, controle, humilhação e outros padrões."
          },
          {
            text: "Dizer que ele deveria pedir desculpas imediatamente, sem ouvir o que aconteceu.",
            type: "confronto",
            points: { c: 5, e: 5, p: 4, a: 4 },
            consequence: "O amigo se fecha e sente que Theo está julgando a situação sem conhecê-la completamente.",
            pareEPense: "Apoiar alguém também significa ouvir antes de tirar conclusões.",
            vocesabia: "Nem todo conflito em um relacionamento caracteriza violência. Contexto e repetição são importantes para compreender a situação."
          }
        ]
      },

      {
        ambiente: "Ambiente Familiar",
        bubbles: [
          { who: "narrador", text: "Theo chega em casa depois de receber uma crítica na capacitação e comenta que ficou chateado." },
          { who: "familiar", text: "Você leva tudo para o lado pessoal. Na minha época ninguém ficava reclamando por qualquer coisa." },
          { who: "narrador", text: "Theo fica pensando se realmente está exagerando." }
        ],
        question: "O que Theo precisa lembrar?",
        options: [
          {
            text: "Que sentir-se mal com uma situação não significa automaticamente estar exagerando.",
            type: "best",
            points: { c: 12, e: 10, p: 8, a: 8 },
            consequence: "Theo entende que pode avaliar o que aconteceu sem simplesmente ignorar seus sentimentos.",
            pareEPense: "Sentimentos não precisam ser comparados para serem válidos.",
            vocesabia: "A invalidação constante de emoções pode afetar a confiança que uma pessoa tem na própria percepção e nos próprios sentimentos."
          },
          {
            text: "Decide que realmente é sensível demais e para de contar o que sente.",
            type: "normaliza",
            points: { c: -6, e: -7, p: -5, a: -6 },
            consequence: "Theo começa a guardar situações que o incomodam para si.",
            pareEPense: "Guardar tudo pode parecer mais fácil no momento, mas pode aumentar a sensação de isolamento.",
            vocesabia: "Quando sentimentos são constantemente desvalorizados, algumas pessoas passam a evitar falar sobre eles."
          },
          {
            text: "Começa uma discussão dizendo que ninguém nunca entende seus sentimentos.",
            type: "confronto",
            points: { c: 5, e: 3, p: 5, a: 3 },
            consequence: "A conversa vira uma discussão maior e ninguém consegue realmente ouvir o outro.",
            pareEPense: "Defender seus sentimentos é importante, mas encontrar uma forma de conversar pode aumentar as chances de ser ouvido.",
            vocesabia: "Comunicação assertiva busca expressar sentimentos e limites sem transformar necessariamente a conversa em uma disputa."
          }
        ]
      },

      {
        ambiente: "Relacionamento / Digital",
        bubbles: [
          { who: "narrador", text: "Uma amiga conta para Theo que o namorado fica bravo quando ela demora para responder mensagens." },
          { who: "amiga", text: "Ele fala que eu faço ele ficar ansioso. Às vezes acho que a culpa é minha mesmo." },
          { who: "narrador", text: "Theo percebe que ela começou a mudar sua rotina para evitar que ele fique bravo." }
        ],
        question: "O que Theo pode perceber?",
        options: [
          {
            text: "Que transferir para ela a responsabilidade pelas próprias reações pode ser uma forma de pressão emocional.",
            type: "best",
            points: { c: 13, e: 12, p: 10, a: 10 },
            consequence: "Theo conversa com ela sem culpá-la e lembra que ela também tem direito ao próprio tempo e aos próprios limites.",
            pareEPense: "Cuidar dos sentimentos de alguém não significa ser responsável por controlar todas as reações dessa pessoa.",
            vocesabia: "Culpa e pressão emocional podem ser utilizadas para controlar comportamentos dentro de relacionamentos."
          },
          {
            text: "Dizer para ela responder mais rápido para evitar as brigas.",
            type: "normaliza",
            points: { c: -7, e: -6, p: -7, a: -4 },
            consequence: "Ela passa a ficar ainda mais preocupada em responder imediatamente.",
            pareEPense: "Evitar conflitos a qualquer custo pode fazer com que uma pessoa abandone seus próprios limites.",
            vocesabia: "Controle excessivo pode começar com comportamentos aparentemente pequenos e aumentar gradualmente."
          },
          {
            text: "Dizer para ela terminar imediatamente, sem perguntar mais nada.",
            type: "confronto",
            points: { c: 4, e: 3, p: 4, a: 2 },
            consequence: "Ela se sente pressionada por Theo e decide não contar mais detalhes sobre o relacionamento.",
            pareEPense: "Apoiar alguém não significa tomar todas as decisões por essa pessoa.",
            vocesabia: "Ao apoiar alguém em uma situação difícil, ouvir sem julgamento e respeitar sua autonomia pode ser mais útil do que pressionar por uma decisão."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 3
  // ==========================================================
  {
    id: 3,
    title: "Deixa eu terminar",
    subtitle: "Manterrupting e o direito de ser ouvido",
    icon: "chapter3",
    situations: [

      {
        ambiente: "Capacitação",
        bubbles: [
          { who: "narrador", text: "Durante uma atividade, uma colega começa a explicar uma solução para o problema proposto." },
          { who: "colega", text: "Na verdade, eu pensei que poderíamos..." },
          { who: "outro colega", text: "Não, não. O melhor seria fazer assim." },
          { who: "narrador", text: "Ele interrompe antes que ela termine de explicar." }
        ],
        question: "O que Theo pode fazer?",
        options: [
          {
            text: "Pedir para ela terminar de explicar antes de continuarem a discussão.",
            type: "best",
            points: { c: 12, e: 10, p: 12, a: 10 },
            consequence: "Ela conclui a ideia e o grupo percebe que sua sugestão tinha uma solução interessante.",
            pareEPense: "Dar espaço para alguém concluir uma ideia parece simples, mas pode mudar completamente a qualidade de uma conversa.",
            vocesabia: "Interrupções frequentes podem reduzir a participação de mulheres em reuniões e discussões."
          },
          {
            text: "Deixar a discussão seguir porque não quer se envolver.",
            type: "normaliza",
            points: { c: -4, e: -4, p: -6, a: -3 },
            consequence: "A colega não consegue explicar sua ideia e participa menos do restante da atividade.",
            pareEPense: "Quando ninguém percebe ou questiona interrupções repetidas, elas podem se tornar parte normal daquele ambiente.",
            vocesabia: "Manterrupting é um termo usado para descrever interrupções recorrentes que impedem uma mulher de concluir sua fala."
          },
          {
            text: "Interromper o colega também, falando mais alto para disputar espaço.",
            type: "confronto",
            points: { c: 5, e: 3, p: 6, a: 3 },
            consequence: "A conversa vira uma disputa de quem consegue falar mais alto.",
            pareEPense: "O problema da interrupção não costuma ser resolvido criando outra interrupção.",
            vocesabia: "Intervenções assertivas, como devolver a palavra a quem foi interrompido, podem ser mais produtivas do que transformar a conversa em uma disputa."
          }
        ]
      },

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "Durante uma reunião, uma colega apresenta um desenho que fez para melhorar a organização de um processo." },
          { who: "colega", text: "Eu pensei em organizar essa etapa dessa forma porque..." },
          { who: "outro colega", text: "Isso não vai funcionar. Eu já trabalho aqui há mais tempo." },
          { who: "narrador", text: "Ele não deixa que ela termine a explicação." }
        ],
        question: "O que está acontecendo?",
        options: [
          {
            text: "Percebe que experiência não dá a alguém o direito de impedir outra pessoa de apresentar uma ideia.",
            type: "best",
            points: { c: 12, e: 9, p: 12, a: 10 },
            consequence: "A colega consegue terminar sua proposta e explica um detalhe que o grupo ainda não tinha considerado.",
            pareEPense: "Ter mais experiência não significa automaticamente ter sempre a melhor ideia.",
            vocesabia: "Desvalorizar uma ideia antes mesmo de ouvi-la pode reforçar hierarquias e preconceitos dentro do ambiente profissional."
          },
          {
            text: "Concorda com o colega mais velho porque ele provavelmente sabe mais.",
            type: "normaliza",
            points: { c: -5, e: -4, p: -7, a: -3 },
            consequence: "A proposta dela é descartada sem que o grupo tenha ouvido a explicação completa.",
            pareEPense: "Experiência pode ser importante, mas ouvir uma ideia antes de julgá-la também é.",
            vocesabia: "Ambientes inclusivos valorizam contribuições independentemente de gênero, idade ou posição hierárquica."
          },
          {
            text: "Diz que o colega está sendo machista imediatamente, sem explicar o motivo.",
            type: "confronto",
            points: { c: 5, e: 2, p: 7, a: 3 },
            consequence: "O colega fica na defensiva e a discussão passa a ser sobre a acusação, não sobre a proposta.",
            pareEPense: "Nomear um comportamento pode ser importante, mas explicar o que aconteceu ajuda a manter o foco no problema.",
            vocesabia: "Intervenções claras e específicas tendem a facilitar conversas sobre comportamentos inadequados."
          }
        ]
      },

      {
        ambiente: "Escola / Capacitação",
        bubbles: [
          { who: "narrador", text: "Uma colega responde corretamente a uma pergunta durante uma atividade." },
          { who: "colega", text: "A resposta é X porque..." },
          { who: "narrador", text: "Antes que ela termine, outro aluno fala a mesma resposta por cima." },
          { who: "professor", text: "Muito bem! Exatamente isso." }
        ],
        question: "O que Theo pode fazer?",
        options: [
          {
            text: "Lembrar que ela estava explicando a resposta antes e reconhecer a contribuição dela.",
            type: "best",
            points: { c: 12, e: 10, p: 12, a: 10 },
            consequence: "O professor percebe o que aconteceu e dá espaço para ela concluir.",
            pareEPense: "Dar crédito não diminui ninguém. Pelo contrário: ajuda a tornar a participação mais justa.",
            vocesabia: "Reconhecer quem contribuiu primeiro é uma forma simples de combater apagamentos em conversas e atividades."
          },
          {
            text: "Não falar nada porque a resposta já foi dada.",
            type: "normaliza",
            points: { c: -3, e: -3, p: -5, a: -2 },
            consequence: "A situação passa sem que ninguém reconheça que ela havia começado a responder.",
            pareEPense: "Pequenos apagamentos podem parecer insignificantes, mas quando se repetem podem fazer alguém parar de participar.",
            vocesabia: "A falta de reconhecimento pode contribuir para que pessoas deixem de compartilhar ideias em ambientes coletivos."
          },
          {
            text: "Fazer uma piada sobre o colega ter 'roubado' a resposta.",
            type: "neutro",
            points: { c: 4, e: 3, p: 3, a: 3 },
            consequence: "Alguns riem, mas a colega continua sem receber reconhecimento pela explicação.",
            pareEPense: "Uma piada pode chamar atenção para algo, mas também pode esconder o problema em vez de resolvê-lo.",
            vocesabia: "Intervenções diretas e respeitosas podem ser mais eficazes para corrigir situações de apagamento."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 4
  // ==========================================================
  {
    id: 4,
    title: "Só estou tentando ajudar",
    subtitle: "Mansplaining e quando a explicação vira desvalorização",
    icon: "chapter4",
    situations: [

      {
        ambiente: "Tecnologia / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "Durante uma atividade de tecnologia, uma colega mostra que conseguiu resolver um problema de programação." },
          { who: "colega", text: "Nossa, você conseguiu? Deixa que eu te mostro como funciona de verdade." },
          { who: "narrador", text: "Ele começa a explicar conceitos básicos que ela já tinha utilizado para resolver o problema." }
        ],
        question: "O que Theo percebe?",
        options: [
          {
            text: "Que explicar algo sem verificar o conhecimento da pessoa pode acabar desvalorizando sua capacidade.",
            type: "best",
            points: { c: 12, e: 10, p: 12, a: 10 },
            consequence: "Theo pergunta se ela quer ajuda antes de continuar a conversa.",
            pareEPense: "Ajudar é diferente de presumir que alguém não sabe.",
            vocesabia: "Mansplaining descreve situações em que um homem explica algo a uma mulher de forma condescendente, especialmente quando presume que ela sabe menos sem verificar."
          },
          {
            text: "Acha que ele está apenas tentando ser gentil.",
            type: "normaliza",
            points: { c: -3, e: -2, p: -6, a: -2 },
            consequence: "A colega deixa de mostrar outras soluções para evitar receber explicações desnecessárias.",
            pareEPense: "Uma boa intenção não elimina necessariamente o efeito de uma atitude.",
            vocesabia: "O contexto importa: explicar algo não é automaticamente mansplaining. O problema está na presunção, no tom condescendente e na desvalorização."
          },
          {
            text: "Diz que ele está fazendo mansplaining na frente de todo mundo.",
            type: "confronto",
            points: { c: 7, e: 4, p: 8, a: 4 },
            consequence: "Ele fica constrangido e a conversa se transforma em uma discussão sobre o termo.",
            pareEPense: "Identificar o comportamento é importante, mas explicar o que está acontecendo pode ser mais produtivo do que apenas rotular a pessoa.",
            vocesabia: "Nem toda explicação feita por um homem para uma mulher é mansplaining. É importante observar o contexto e a forma como a explicação acontece."
          }
        ]
      },

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "Uma colega apresenta para Theo uma solução que criou para organizar uma planilha." },
          { who: "colega", text: "Ah, eu posso te mostrar uma maneira mais fácil." },
          { who: "narrador", text: "Ela explica que já conhece aquela ferramenta e mostra que utilizou uma função mais avançada." }
        ],
        question: "Como Theo deveria reagir?",
        options: [
          {
            text: "Pergunta como ela fez e reconhece que ela já tinha conhecimento sobre a ferramenta.",
            type: "best",
            points: { c: 12, e: 10, p: 10, a: 12 },
            consequence: "Theo aprende uma nova forma de utilizar a ferramenta e percebe que tinha subestimado o conhecimento dela.",
            pareEPense: "Às vezes o melhor jeito de ajudar é primeiro perguntar o que a outra pessoa já sabe.",
            vocesabia: "Evitar pressuposições sobre o conhecimento de alguém ajuda a construir ambientes mais colaborativos."
          },
          {
            text: "Continua explicando mesmo depois que ela diz que já conhece a ferramenta.",
            type: "normaliza",
            points: { c: -5, e: -4, p: -7, a: -3 },
            consequence: "Ela desiste de tentar explicar sua solução e deixa Theo continuar falando.",
            pareEPense: "Quando alguém diz que já conhece determinado assunto, insistir na explicação pode transformar uma tentativa de ajuda em desvalorização.",
            vocesabia: "Ouvir o que a outra pessoa está dizendo e adaptar a comunicação é parte de uma interação respeitosa."
          },
          {
            text: "Diz que ela está tentando competir com ele.",
            type: "confronto",
            points: { c: -2, e: -4, p: -3, a: -2 },
            consequence: "A colega fica desconfortável e a colaboração entre os dois diminui.",
            pareEPense: "Uma conversa sobre conhecimento não precisa virar uma disputa sobre quem sabe mais.",
            vocesabia: "Colaboração saudável permite que diferentes pessoas compartilhem conhecimentos sem transformar a conversa em competição."
          }
        ]
      },

      {
        ambiente: "Projeto em grupo",
        bubbles: [
          { who: "narrador", text: "Durante um projeto, uma colega apresenta uma solução para um problema que o grupo vinha tentando resolver." },
          { who: "colega", text: "Eu testei essa alternativa e funcionou." },
          { who: "outro colega", text: "Você tem certeza? Talvez eu precise explicar melhor como isso funciona." },
          { who: "narrador", text: "Theo percebe que ela parece irritada, mas continua ouvindo." }
        ],
        question: "Qual seria uma boa intervenção?",
        options: [
          {
            text: "Perguntar se ela pode mostrar o teste que fez e deixar que explique sua própria solução.",
            type: "best",
            points: { c: 12, e: 12, p: 12, a: 10 },
            consequence: "Ela mostra o teste e o grupo percebe que a solução realmente funciona.",
            pareEPense: "Dar espaço para a pessoa explicar o próprio trabalho é uma maneira simples de demonstrar respeito.",
            vocesabia: "Reconhecer a autoria e o conhecimento de colegas ajuda a evitar situações de desvalorização."
          },
          {
            text: "Deixar os dois discutirem porque é problema deles.",
            type: "normaliza",
            points: { c: -3, e: -3, p: -5, a: -2 },
            consequence: "A discussão continua e o projeto demora mais para avançar.",
            pareEPense: "Às vezes uma pequena intervenção pode impedir que uma situação se transforme em um conflito maior.",
            vocesabia: "Testemunhas podem ajudar a redirecionar conversas quando percebem que alguém está sendo sistematicamente desconsiderado."
          },
          {
            text: "Falar que o colega é arrogante e começar uma discussão com ele.",
            type: "confronto",
            points: { c: 4, e: 3, p: 6, a: 3 },
            consequence: "O colega se irrita e o grupo perde o foco do projeto.",
            pareEPense: "É possível questionar um comportamento sem transformar a situação em um ataque pessoal.",
            vocesabia: "Focar no comportamento específico costuma ser mais produtivo do que atacar características pessoais."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CAPÍTULO 5
  // ==========================================================
  {
    id: 5,
    title: "Agora eu percebo",
    subtitle: "Reconhecer, agir e transformar",
    icon: "chapter5",
    situations: [

      {
        ambiente: "Reflexão pessoal",
        bubbles: [
          { who: "narrador", text: "Theo lembra de uma situação antiga em que fez uma piada sobre uma colega e todos riram." },
          { who: "narrador", text: "Na época, ele achou que não tinha problema porque ela também riu." },
          { who: "narrador", text: "Agora, depois de tudo que aprendeu, ele percebe que talvez ela tenha rido apenas para não ficar constrangida." }
        ],
        question: "O que Theo pode fazer com essa percepção?",
        options: [
          {
            text: "Reconhecer que pode ter errado e usar esse aprendizado para mudar suas atitudes.",
            type: "best",
            points: { c: 14, e: 12, p: 12, a: 12 },
            consequence: "Theo entende que aprender também significa rever atitudes que antes pareciam normais.",
            pareEPense: "Reconhecer um erro não apaga o passado, mas pode mudar o que fazemos daqui para frente.",
            vocesabia: "Refletir sobre comportamentos naturalizados é uma parte importante da prevenção da violência e da construção de relações mais respeitosas."
          },
          {
            text: "Pensar que, se ela riu, então não poderia ter sido algo errado.",
            type: "normaliza",
            points: { c: -6, e: -6, p: -7, a: -5 },
            consequence: "Theo mantém a ideia de que uma situação só é problemática quando a pessoa demonstra claramente que ficou incomodada.",
            pareEPense: "As pessoas nem sempre conseguem demonstrar desconforto na hora. Por isso, respeito não depende apenas da reação imediata.",
            vocesabia: "Constrangimento, medo ou pressão social podem fazer alguém rir ou permanecer em silêncio mesmo quando está desconfortável."
          },
          {
            text: "Ficar se culpando e concluir que é uma pessoa ruim.",
            type: "confronto",
            points: { c: 4, e: 4, p: 5, a: 4 },
            consequence: "Theo fica preso à culpa e não consegue pensar sobre como poderia agir diferente.",
            pareEPense: "Reconhecer um erro é diferente de acreditar que somos definidos por ele. O aprendizado precisa levar à mudança.",
            vocesabia: "Reflexão responsável envolve reconhecer atitudes, compreender seus efeitos e buscar comportamentos melhores."
          }
        ]
      },

      {
        ambiente: "Trabalho / Aprendizagem",
        bubbles: [
          { who: "narrador", text: "Durante uma reunião, Theo percebe que uma colega está sendo interrompida novamente." },
          { who: "narrador", text: "Dessa vez, ele reconhece imediatamente o padrão que antes não percebia." },
          { who: "narrador", text: "Ela tenta continuar falando, mas outro colega começa a falar por cima." }
        ],
        question: "O que Theo faz?",
        options: [
          {
            text: "Diz: 'Espera um pouco, ela ainda não terminou. Pode continuar.'",
            type: "best",
            points: { c: 14, e: 12, p: 14, a: 12 },
            consequence: "A colega conclui sua ideia. Theo percebe que uma intervenção simples pode mudar o rumo da conversa.",
            pareEPense: "Você não precisa fazer um grande discurso para agir. Às vezes, devolver a palavra já faz diferença.",
            vocesabia: "Intervenções de espectadores podem ajudar a interromper padrões de comportamento inadequado em ambientes coletivos."
          },
          {
            text: "Pensa que agora sabe reconhecer o problema, mas continua sem fazer nada.",
            type: "neutro",
            points: { c: 3, e: 3, p: 2, a: 2 },
            consequence: "Theo percebe que reconhecer uma situação é apenas o primeiro passo.",
            pareEPense: "Conhecimento é importante, mas a proposta da prevenção é transformar aquilo que aprendemos em atitudes.",
            vocesabia: "A prevenção da violência envolve informação, reflexão e também ações concretas e seguras."
          },
          {
            text: "Interrompe o colega gritando para que ele cale a boca.",
            type: "confronto",
            points: { c: 5, e: 3, p: 7, a: 3 },
            consequence: "A colega consegue falar, mas o clima da reunião fica tenso.",
            pareEPense: "Intervir é importante, mas a forma escolhida também pode influenciar o resultado.",
            vocesabia: "Uma intervenção assertiva pode estabelecer limites sem necessariamente aumentar o conflito."
          }
        ]
      },

      {
        ambiente: "Ambiente Digital",
        bubbles: [
          { who: "narrador", text: "No grupo de amigos, alguém começa a fazer comentários depreciativos sobre uma menina que publicou um vídeo." },
          { who: "colega", text: "Olha ela querendo aparecer de novo kkkkk." },
          { who: "narrador", text: "Theo percebe que alguns amigos começam a compartilhar o vídeo e fazer comentários sobre o corpo dela." }
        ],
        question: "Depois de tudo que aprendeu, o que Theo faz?",
        options: [
          {
            text: "Pede para pararem de compartilhar o vídeo e diz que não acha correto transformar a pessoa em motivo de humilhação.",
            type: "best",
            points: { c: 14, e: 12, p: 14, a: 12 },
            consequence: "O grupo fica quieto por alguns segundos. Um amigo apaga a mensagem e outro muda de assunto.",
            pareEPense: "Talvez Theo não consiga mudar todos ao redor, mas pode escolher não contribuir para aquilo e deixar claro que não considera normal.",
            vocesabia: "Atitudes de testemunhas podem ajudar a reduzir a normalização de comportamentos ofensivos, inclusive em ambientes digitais."
          },
          {
            text: "Sai do grupo para não precisar ver aquilo, mas não fala nada.",
            type: "neutro",
            points: { c: 4, e: 5, p: 3, a: 4 },
            consequence: "Theo deixa de participar, mas o conteúdo continua circulando entre os outros.",
            pareEPense: "Se afastar de uma situação desconfortável pode ser necessário. Quando for seguro, também podemos pensar em outras formas de interromper o comportamento.",
            vocesabia: "Cada situação exige uma estratégia diferente. Segurança e contexto devem ser considerados antes de qualquer intervenção."
          },
          {
            text: "Faz uma piada também, porque não quer parecer diferente dos amigos.",
            type: "normaliza",
            points: { c: -7, e: -7, p: -8, a: -5 },
            consequence: "Os amigos continuam rindo e o conteúdo recebe ainda mais atenção.",
            pareEPense: "Depois de aprender a reconhecer uma violência, escolher continuar participando dela é também uma escolha.",
            vocesabia: "A pressão do grupo pode influenciar comportamentos, mas cada pessoa também pode ajudar a mudar a cultura do próprio grupo."
          }
        ]
      }
    ]
  }
];

const PERFIS = [
  {
    id: "observador",
    min: 0, max: 40,
    nome: "OBSERVADOR",
    descricao: "Você está começando a prestar atenção em coisas que antes passavam despercebidas. Perceber já é o primeiro passo — e ele importa mais do que parece.",
    frase: "Reconhecer é o primeiro passo."
  },
  {
    id: "consciente",
    min: 41, max: 65,
    nome: "CONSCIENTE",
    descricao: "Você já reconhece sinais de violências invisíveis e está desenvolvendo um olhar mais atento sobre situações do cotidiano. Seguir prestando atenção faz diferença.",
    frase: "Questionar é se posicionar."
  },
  {
    id: "agente",
    min: 66, max: 85,
    nome: "AGENTE",
    descricao: "Você demonstrou disposição para agir, apoiar e se posicionar diante de situações difíceis — mesmo quando isso exige coragem.",
    frase: "Agir com responsabilidade é transformar."
  },
  {
    id: "multiplicador",
    min: 86, max: 100,
    nome: "MULTIPLICADOR",
    descricao: "Suas escolhas mostraram consciência, empatia e coragem para agir de forma consistente. Pessoas como você ajudam a mudar o que é considerado 'normal' ao redor.",
    frase: "O respeito também começa nas pequenas escolhas."
  }
];

const EAGORA_ACOES = [
  { numero: "01", titulo: "RECONHEÇA", texto: "Aprenda a identificar comportamentos que podem indicar violência, mesmo quando parecem pequenos ou disfarçados de brincadeira." },
  { numero: "02", titulo: "NÃO NORMALIZE", texto: "Nem tudo que é tratado como 'brincadeira' ou 'ciúme' deve ser considerado normal. Questionar é o primeiro passo." },
  { numero: "03", titulo: "APOIE", texto: "Se alguém confiar em você, escute sem julgar. Às vezes, só saber que não está sozinho(a) já faz diferença." },
  { numero: "04", titulo: "PROCURE AJUDA", texto: "Busque uma pessoa ou serviço de confiança quando necessário. Você não precisa — e não deve — enfrentar situações de risco sozinho(a)." },
  { numero: "05", titulo: "COMPARTILHE", texto: "Leve essa conversa para seus amigos, sua família, sua escola e seu ambiente de trabalho. Educação não termina quando o jogo acaba." }
];
