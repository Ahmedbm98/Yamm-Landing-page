function CardDegrade({ clients }) {
  return (
    <section>
      <div className="bg-[#a77aff] rounded-lg shadow-lg flex flex-col gap-6 p-10 ">
        <span className="font-bold text-[clamp(2.55rem,1vw,5rem)] text-white">
          +{clients.deg}%
        </span>
        <p className="text-[#e7e1fc] text-[clamp(1.3rem,1vw,5rem)] max-h-[90px] ">
          {clients.para}
        </p>
      </div>
    </section>
  );
}

export default CardDegrade;
