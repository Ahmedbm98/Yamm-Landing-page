function CardPlatform({ platform }) {
  // console.log(platform);
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {platform &&
        platform.map((card, index) => {
          return (
            <div
              key={index}
              className={`${card?.color} rounded-lg p-6 flex items-center justify-center`}
            >
              <img
                src={card.srcImg}
                alt={card.altImg}
                title={card.altImg}
                loading="lazy"
                className="w-full object-contain"
              />
            </div>
          );
        })}
    </section>
  );
}

export default CardPlatform;
