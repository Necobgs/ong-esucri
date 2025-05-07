// components/TituloPadrao.tsx
export default function Titulo({ children }: { children: React.ReactNode }) {
    return (
      <h2 className="pb-5 text-[48px] sm:text-[64px] ff-SourGummy-bold sm:leading-15 leading-12 font-bold text-center text-[#10151C]">
        {children}
      </h2>
    );
  } 