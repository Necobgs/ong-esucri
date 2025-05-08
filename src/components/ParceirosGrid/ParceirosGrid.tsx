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
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10 place-items-center px-40">
        {logos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Logo parceiro ${index + 1}`}
            width={50}
            height={50}
            className="object-contain mb-5"
          />
        ))}
      </div>
    </section>
  );
}
