import BeneficiosParceria from "@/components/BeneficiosParceria/BeneficiosParceria";
import CardHorizontal from "@/components/card-horizontal/CardHorizontal";
import Cta from "@/components/Cta/Cta";
import HeroSection from "@/components/hero-section/hero-section";
import LinhaIcones from "@/components/LinhaIcones/LinhaIcones";
import ParceirosGrid from "@/components/ParceirosGrid/ParceirosGrid";
import Titulo from "@/components/Titulo/Titulo";

export default function parcerias(){
    return (
        <>
            <section className="min-h-[100dvh] w-full flex flex-col pt-[3%]">
                <article>
                    <HeroSection
                        iconeSrc="/icons/vetor-parcerias.svg"
                        titulo="Juntos, transformamos vidas"
                        descricao="O Instituto de Educação Especial Diomício Freitas conta com o 
                        apoio de empresas, instituições e voluntários que acreditam na 
                        inclusão social e na valorização da diversidade. Cada parceria 
                        fortalece nossa missão de preparar e qualificar jovens e adultos 
                        com deficiência intelectual para o mercado de trabalho e para o 
                        exercício pleno da cidadania."
                        botaoTexto="TORNAR-SE UM PARCEIRO"
                    />
                    <LinhaIcones></LinhaIcones>

                    <h2 className="font-bold text-[48px] sm:text-[64px] text-[#10151C] ff-SourGummy-bold mb-5 sm:leading-15 leading-12 px-10 flex justify-center mt-20">
                        Parceiros que nos impulsionam!
                    </h2>
                    <ParceirosGrid></ParceirosGrid>

                    <section className="mb-20">
                        <Titulo className="mb-4 px-[30%]">Por que precisamos de parceiros?</Titulo>
                        <p className="max-w-xl mx-auto text-gray-700 mb-6 text-center">
                        Somos uma instituição filantrópica que depende da colaboração de empresas, 
                        instituições e pessoas da comunidade para seguir com a nossa missão. Não somos 
                        autossustentáveis, e é por meio do apoio de nossos parceiros que conseguimos 
                        transformar vidas através da educação inclusiva, do desenvolvimento de habilidades 
                        e da preparação para o mercado de trabalho de jovens e adultos com deficiência 
                        intelectual e Transtorno do Espectro Autista (TEA).
                        </p>
                    </section>

                    <section className="mb-15">
                        <div className="mb-5"><Titulo>Como você pode nos ajudar:</Titulo></div>
                        <div className="grid gap-10">
                            <CardHorizontal
                            titulo="Doações Corporativas"
                            descricao="Sua empresa pode nos ajudar a continuar nosso trabalho! Contribuições 
                            financeiras, sejam regulares ou pontuais, garantem a manutenção de nossas 
                            oficinas, programas pedagógicos e ações de inclusão social. Cada doação se 
                            transforma em oportunidade real para nossos educandos."
                            textoBotao="FAZER UMA DOAÇÃO CORPORATIVA"
                            imagem="/image.jpg"
                            />

                            <CardHorizontal
                            titulo="Vagas para alunos"
                            descricao="Você pode abrir as portas da sua empresa para nossos alunos! Ao oferecer 
                            oportunidades de estágio ou trabalho, você contribui diretamente com a autonomia, 
                            dignidade e inclusão de pessoas com deficiência intelectual. Juntos, podemos construir 
                            um mercado de trabalho mais justo e diverso."
                            textoBotao="TENHO VAGAS EM MINHA EMPRESA!"
                            imagem="/vagas.jpg"
                            />
                        </div>
                    </section>
                    <BeneficiosParceria
                        beneficios={[
                            {
                            titulo: "Reconhecimento",
                            descricao: "Sua marca associada a causas relevantes."
                            },
                            {
                            titulo: "Impacto Social",
                            descricao: "Contribuição direta para projetos sociais."
                            },
                            {
                            titulo: "Engajamento",
                            descricao: "Participação ativa de colaboradores."
                            },
                            {
                            titulo: "Transparência",
                            descricao: "Acesso a relatórios e prestação de contas."
                            }
                        ]}
                    />
                
                    <Cta
                    titulo="Como se tornar um parceiro?"
                    descricao="Acredita que sua empresa pode transformar vidas? Torne-se nossa parceira!
                    Você pode contribuir com doações mensais, apoio a projetos, contratação de nossos alunos 
                    ou fornecimento de materiais. Ao nosso lado, sua marca promove inclusão, 
                    cidadania e desenvolvimento humano.
                    Entre em contato e venha fazer parte dessa rede de solidariedade e impacto social."
                    ctaTitulo="Vamos apertar as mãos!"
                    >
                    </Cta>
                </article>
            </section>
        </>
    )
}