import Image from "next/image"

export default function Voluntariado(){
    return (
        <>
            <section className="flex flex-col pl-40 pr-40 pt-40 gap-15">
                <Image
                    src="/images/image.png"
                    alt="Imagem"
                    width={800}
                    height={200}
                    className="w-full max-h-120 rounded-2xl"
                    style={{objectFit:"cover"}}
                    priority
                />
                <div className="w-full flex justify-between items-center">
                    <span>Lorem ipsum </span>
                    <span>Lorem ipsum </span>
                    <span>Lorem ipsum </span>
                </div>
            </section>
        </>
    )
}