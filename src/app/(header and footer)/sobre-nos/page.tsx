"use client"

import HeroSection from "@/components/hero-section/hero-section";
import TextImage from "@/components/text-image/TextImage"
import Image from "next/image"
import React from "react";

export default function SobreNos(){
    
    function scrollTo(e:React.MouseEvent<HTMLLIElement>,id:string){
        e.preventDefault(); // Evita o comportamento padrão
        const targetElement = document.getElementById(id);
        if(!targetElement) return;
        // Scroll suave até o topo do elemento
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Alinha o topo do elemento com o topo da janela
        });
    }
    
    return (
        <>
            <section className="flex items-center justify-center flex-col p-35 bg-gray-200">
                <h1 className="ff-SourGummy-bold text-center text-6xl mb-10">Instituto Diomício Freitas: <br/>Transformando Vidas com Educação e Inclusão</h1>
                <p className="ff-NunitoSans text-center w-1/2">Há mais de 35 anos, o Instituto Diomício Freitas promove a inclusão e o desenvolvimento de jovens e adultos com deficiência intelectual. Com foco na valorização das diferenças, a instituição oferece educação de qualidade e oportunidades para que cada aluno conquiste sua autonomia, exerça sua cidadania e seja protagonista de sua história. Aqui, cada passo dado é um avanço rumo a um futuro mais justo e igualitário para todos.  </p>
            </section>
            <section className="pl-80 pr-80 pt-40 pb-30">
                <ul className="w-full flex items-start justify-between">
                <li
                    className="cursor-pointer"
                    onClick={(e) => scrollTo(e, 'nossasHistorias')}
                >
                    <a>Nossa história</a>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={(e) => scrollTo(e, 'nossosObjetivos')}
                >
                    <a>Nossos objetivos</a>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={(e) => scrollTo(e, 'convenios')}
                >
                    <a>Convênios</a>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={(e) => scrollTo(e, 'voluntarios')}
                >
                    <a>Voluntários</a>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={(e) => scrollTo(e, 'diretoria')}
                >
                    <a>Diretoria</a>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={(e) => scrollTo(e, 'grupoDeMaes')}
                >
                    <a>Grupo de mães</a>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={(e) => scrollTo(e, 'parceiros')}
                >
                    <a>Parceiros</a>
                </li>
                </ul>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-8" id="nossasHistorias">
                <TextImage image="diomicio1.png" title="Nossa história" text="Desde 1985, o Instituto de Educação Especial Diomício Freitas atua como uma ponte entre o cuidado, a formação e a inclusão social de jovens e adultos com deficiência intelectual e Transtorno do Espectro Autista (TEA). Localizado em Criciúma-SC, é uma instituição filantrópica, sem fins lucrativos, vinculada à Associação Pestalozzi." direction="default"/>
                <Image
                    src="/images/historia.png"
                    alt="Imagem"
                    width={800}
                    height={100}
                    className="w-full max-h-100 rounded-2xl"
                    style={{objectFit:"cover"}}
                    priority
                />
                <p>A instituição iniciou suas atividades em uma residência cedida pelo Sr. João Zanette. Em 1992, foi adquirida a sede atual, localizada na Rua Lucia Milioli, 211, no bairro Santa Bárbara, em Criciúma-SC.</p>
                <p>Desde então, o Instituto tem se consolidado como referência na qualificação e inclusão de pessoas com deficiência intelectual no mercado de trabalho, oportunizando o exercício da cidadania e a valorização das diferenças.</p>
                <p>Mais de 500 educandos já passaram pela instituição, que hoje tem capacidade para atender até 120 alunos, a partir de 14 anos, vindos de Criciúma e municípios vizinhos. As atividades desenvolvidas vão desde oficinas de artesanato, informática e embalador de supermercado até conteúdos acadêmicos e orientação profissional.</p>
                <p>Nosso trabalho é fundamentado no princípio da diversidade, buscando garantir o direito à educação e o desenvolvimento do potencial de cada aluno. Valorizamos a autonomia, a responsabilidade e a inclusão social como pilares da formação de um cidadão consciente e participativo.</p>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15 pt-30" id="nossosObjetivos">
                <TextImage image="diomicio2.png" title="Nossos objetivos" text="Nosso principal objetivo é promover o desenvolvimento de habilidades e competências que possibilitem a autonomia, a inserção social e a inclusão no mercado de trabalho. Valorizamos as diferenças, respeitamos a diversidade e acreditamos no potencial de cada indivíduo." direction="reverse"/>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15 pt-30" id="convenios">
                <TextImage direction="default" image="diomicio3.png" title="Convênios" text="Mantemos parcerias nas esferas municipal, estadual e federal para garantir a continuidade dos projetos:
                                                                                        Fundação Catarinense de Educação Especial (FCEE)
                                                                                        Fundo Nacional de Assistência Social
                                                                                        Prefeitura de Criciúma e Morro da Fumaça
                                                                                        AFASC
                                                                                        União Catarinense de Educação (UCE)"/>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15 pt-30" id="voluntarios">
                <TextImage direction="reverse" image="diomicio4.png" title="Voluntários" text="O trabalho voluntário é essencial para o Instituto. Contamos com apoio em áreas administrativas, pedagógicas, reciclagem e projetos criativos. Voluntários da comunidade, acadêmicos da UNESC e o Grupo de Mães ajudam a manter viva a missão da instituição."/>
                <Image
                    src="/images/voluntario.png"
                    alt="Imagem"
                    width={800}
                    height={100}
                    className="w-full max-h-100 rounded-2xl"
                    style={{objectFit:"cover"}}
                    priority
                />
                <p>O Instituto Diomício Freitas é mais do que um espaço de ensino: é um lugar onde vidas são transformadas por meio da educação, da empatia e do compromisso coletivo. Ao longo dos anos, com o apoio de convênios públicos e da dedicação de voluntários apaixonados, conseguimos construir uma trajetória sólida de inclusão, respeito e valorização das diferenças. Cada parceria firmada e cada mão estendida fortalece nossa missão de garantir oportunidades reais para jovens e adultos com deficiência intelectual. Seguimos acreditando que, juntos, podemos construir um futuro mais justo, acessível e humano para todos.</p>
            </section>
            
            <section className="mb-10"><HeroSection
                iconeSrc="/icons/vetor-parcerias.svg"
                titulo="Junte-se a nós nessa história!"
                descricao="Você pode fazer a diferença na vida de dezenas de jovens e adultos com 
                deficiência intelectual. Seja doando seu tempo, suas habilidades ou apenas sua 
                presença. Venha conhecer o Instituto e descubra como seu apoio pode transformar 
                histórias.
                Entre em contato ou venha nos visitar!"
                botaoTexto="Quero fazer parte!"
            /></section>
        </>
    )
}