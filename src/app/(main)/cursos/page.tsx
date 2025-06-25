import InitalBanner from "@/components/initial-banner/initial-banner"
import Titulo from "@/components/Titulo/Titulo"
import CardOurPrograms from "@/components/card-our-programs/card-our-programs"
import Cta from "@/components/Cta/Cta";

export default function(){
    return (
        <>
                <InitalBanner image="/icons/cursos.svg" textSecondButton="QUERO FAZER UMA DOAÇÃO" textFirstButton="QUERO ME VOLUNTARIAR" title="Descubra nossos cursos e oficinas" description="Aqui, cada curso é uma oportunidade real de crescimento. Jovens e adultos com deficiência intelectual desenvolvem habilidades que abrem portas para o mercado de trabalho, promovendo inclusão e autonomia."/>
                <Titulo as="h2" className="text-amber-500 left-auto right-auto pt-5 pb-20">Nossos Programas</Titulo>
                <section className="px-50 pb-30 flex flex-col gap-20">
                    <CardOurPrograms listItems={['Identidade e higiene pessoal','Introdução ao ambiente profissional','Vivências práticas em oficinas']} title="Grupo de Iniciação" description="Oferece atividades básicas e experiências práticas voltadas à construção de identidade pessoal e profissional. Os alunos são estimulados a desenvolver habilidades sociais, motoras e cognitivas, preparando-se para os próximos passos rumo à autonomia e ao mercado de trabalho."/>
                    <CardOurPrograms listItems={['Noções de legislação trabalhista','Comunicação e relações interpessoais','Atividades práticas com foco profissional']} title="Grupo de Pré-qualificação" description="Aqui, os educandos têm acesso a uma formação mais aprofundada, com foco em competências profissionais. São desenvolvidas habilidades específicas, de gestão e comportamentais que os aproximam do perfil exigido no mercado."/>
                    <CardOurPrograms listItems={['Atividades não-remuneradas com propósito','Estímulo à autonomia e autorrealização','Convivência e cidadania no cotidiano']} title="Sevil - Serviços de Vivências Laboriais" description="Voltado para alunos que não têm, no momento, perspectiva de ingresso no mercado, mas que demonstram potencial para atividades produtivas. O SEVIL promove inclusão social e independência por meio de tarefas significativas."/>
                    <CardOurPrograms listItems={['Treinamentos teóricos e práticos','Uso responsável do transporte','Independência no trajeto casa–instituição–comunidade']} title="Locomoção Independente" description="Capacita os alunos a se deslocarem com segurança e autonomia em espaços públicos e no transporte coletivo, promovendo liberdade e participação ativa na comunidade."/>
                    <CardOurPrograms listItems={['Caminhadas orientadas e alongamentos','Exercícios com equipamentos (bicicleta, esteira etc.)','Valorização da saúde física e mental']} title="Educação Física" description="Muito além de atividade física, essa área promove saúde, bem-estar e qualidade de vida. Os alunos exercitam coordenação, força, concentração e equilíbrio através de práticas inclusivas e adaptadas."/>
                </section>
                <Cta titulo="Como se tornar um aluno?" descricao="Para se matricular no Instituto Diomício Freitas, é simples: agende uma visita, faça uma avaliação psicopedagógica e passe por uma triagem com a nossa equipe. Assim, podemos garantir um caminho de aprendizado e inclusão para você." ctaTitulo="Quero se inscrever!" buttonText="QUERO CONHECER!"></Cta>
        </>
    )
}