import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
  getSpeakers() {
    let speakers: any[] = [];
    speakers.push({
      id: '1',
      name: 'André Baltieri',
      image: 'andre-baltieri.png',
      presentation: {
        title: 'Um novo mundo: Progressive Web Apps',
        description: 'Você já parou para pensar como vai ficar o mercado Web com o crescimento exponencial das aplicações Mobile? E como vão ficar as aplicações Web, com os telefones cada vez mais poderosos, com frameworks cada vez melhores? Precisamos conversar sobre PWA!'
      }
    });

    speakers.push({
      id: '2',
      name: 'Bernardo Donadio',
      image: 'bernardo-donadio.png',
      presentation: {
        title: 'Quando a baleia azul encalha',
        description: 'Experiências traumáticas do Docker em produção. Há situações que o Docker pode ser a ferramenta que faltava para automatizar a sua infraestrutura, mas também há de se tomar cuidado com os percalços de arquitetura e bugs eternos no caminho. Entenda quais são os principais cuidados a tomar quando arquitetar um deploy de aplicações dockerizadas, assim como quando *não* usar o Docker.'
      }
    });

    speakers.push({
      id: '3',
      name: 'Carlos Alves',
      image: 'carlos-alves.png',
      presentation: {
        title: 'Evitando o caos nos projetos com princípios, práticas e padrões de desenvolvimento de software',
        description: 'Muitos desenvolvedores tratam questões como: boas práticas, princípios e padrões de projeto como se fossem ações para "enfeitar o código" ou deixar o "desenvolvimento mais complexo". Nesta palestra compartilho técnicas e práticas que venho adotando há alguns anos, para contornar problemas comuns do cotidiano, com menos estresse e danos para os projetos. E com isso agregar mais valor para o cliente, visibilidade para equipe e tornar a vida de desenvolvedor mais fácil.'
      }
    });

    speakers.push({
      id: '4',
      name: 'Eduardo Pires',
      image: 'eduardo-pires.png',
      presentation: {
        title: 'Novidades do ASP.NET Core 2.0',
        description: 'Iremos abordar as grandes novidades e melhorias na versão mais esperada do novo stack da Microsoft. Você verá em detalhes as mudanças e vantagens em optar para esta nova plataforma.'
      }
    });

    speakers.push({
      id: '5',
      name: 'Emmanuel Gomes Brandão',
      image: 'emmanuel-brandao.png',
      presentation: {
        title: 'Automatizando seu pipeline de Docker',
        description: 'Construa e entregue aplicações da sua máquina para o servidor mais eficiente e rápido do que você já fez. Usando ao seu favor contêineres, a nuvem, em um processo de entrega contínua. É Docker no Azure, através do VSTS.'
      }
    });

    speakers.push({
      id: '6',
      name: 'Renato Groffe',
      image: 'renato-groffe.png',
      presentation: {
        title: 'Monitorando APIs REST com o Application Insights',
        description: 'Monitorar APIs REST é uma atividade de extrema importância em projetos complexos. Além de gerar dados úteis para a verificação e correção de falhas, esta atividade fornece ainda informações que podem influenciar ações envolvendo questões como disponibilidade e escalabilidade. Uma solução bastante flexível neste sentido é o Application Insights, alternativa de monitoramento que integra o Microsoft Azure e que pode ser empregada em plataformas como .NET, Java, Node e Ruby.'
      }
    });

    speakers.push({
      id: '7',
      name: 'Rodrigo Branas',
      image: 'rodrigo-branas.png',
      presentation: {
        title: 'Do callback ao async/await',
        description: 'Nesta palestra, vamos abordar diversas formas de lidar com o comportamento assíncrono da linguagem JavaScript, programando juntos em um hands-on cheio de exemplos utilizando callback, promise, generators e async/await.'
      }
    });

    speakers.push({
      id: '8',
      name: 'Rodrigo Kono',
      image: 'rodrigo-kono.png',
      presentation: {
        title: 'Conhecimentos para tomar atitude e migrar sua aplicação para ASP.NET Core',
        description: 'Quando surge uma nova tecnologia é difícil resistir a vontade de querer migrar tudo que se tem. Fato. Porém antes disso, sempre há muitos pontos a levar em consideração. O ASP.NET Core tem uma estrutura incrível e aponta-se entre os 10 melhores frameworks do mundo.Esta sessão irá te ajudar a obter estas informações para realizar a migração da sua aplicação de maneira efetiva. Dentre nosso plano, vamos saber quando você deve migrar, como determinar possíveis pontos críticos, entender novas abordagens que foram modificadas  configurações específicas, entre outros pontos que você irá conferir durante a sessão.'
      }
    });
    return speakers;
  }
}
