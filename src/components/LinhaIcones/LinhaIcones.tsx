import Image from 'next/image';

export default function LinhaIcones() {
  return (
    <div className="flex justify-center gap-6 py-6 mb-15">
      <Image src="/icons/flor1.svg" alt="Ícone 1" width={40} height={40} />
      <Image src="/icons/flor2.svg" alt="Ícone 2" width={40} height={40} />
      <Image src="/icons/flor3.svg" alt="Ícone 3" width={40} height={40} />
    </div>
  );
}