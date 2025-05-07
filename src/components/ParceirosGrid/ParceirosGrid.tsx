import Image from "next/image";

export default function ParceirosGrid() {
  const logos = [
    "/icons/logos/logo1.svg",
    "/icons/logos/logo2.svg",
    "/icons/logos/logo3.svg",
    "/icons/logos/logo4.svg",
    "/icons/logos/logo5.svg",
    "/icons/logos/logo6.svg",
  ];

  return (
    <section className="py-12 text-center mb-15 ">
      <h2 className="font-bold text-[48px] sm:text-[64px] text-[#10151C] ff-SourGummy-bold mb-15 sm:leading-15 leading-12 px-10">
        Parceiros que nos impulsionam!
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10 place-items-center px-20">
        {logos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Logo parceiro ${index + 1}`}
            width={80}
            height={80}
            className="object-contain mb-5"
          />
        ))}
      </div>
    </section>
  );
}
