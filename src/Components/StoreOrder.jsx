import imgStore from "../assets/imgs/logistics-BjnrrJiF.png";
function StoreOrder() {
  return (
    <section className="bg-gradient-to-b from-primary/15 top-primary/5">
      <div className="container bg-gradient-to-b from-primary/90 to-primary/5 w-[80%] py-5 rounded-xl">
        <img
          src={imgStore}
          alt="image store oreder"
          title=""
          loading="lazy"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}

export default StoreOrder;
