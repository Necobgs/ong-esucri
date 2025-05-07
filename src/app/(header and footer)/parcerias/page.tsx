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
                    <HeroSection></HeroSection>
                    <LinhaIcones></LinhaIcones>
                    <ParceirosGrid></ParceirosGrid>

                    <section className="mb-20">
                        <Titulo>Por que o Instituto precisa de parceiros?</Titulo>
                        <p className="max-w-xl mx-auto text-gray-700 mb-6 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, 
                        finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae 
                        pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis
                        aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc 
                        lobortis, dapibus arcu.
                        </p>
                    </section>

                    <section className="mb-15">
                        <div className="mb-5"><Titulo>Como você pode nos ajudar:</Titulo></div>
                        <div className="grid gap-10">
                            <CardHorizontal
                            titulo="Doações Corporativas"
                            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi 
                            neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est 
                            vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper 
                            quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc 
                            lobortis, dapibus arcu."
                            textoBotao="FAZER UMA DOAÇÃO CORPORATIVA"
                            imagem="/doacao.jpg"
                            />

                            <CardHorizontal
                            titulo="Vagas para alunos"
                            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi 
                            neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est 
                            vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper 
                            quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc 
                            lobortis, dapibus arcu."
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
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis 
                    nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, 
                    ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, 
                    iaculis nunc lobortis, dapibus arcu."
                    ctaTitulo="Vamos apertar as mãos!"
                    >
                    </Cta>
                </article>
            </section>
        </>
    )
}