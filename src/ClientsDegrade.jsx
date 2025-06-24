import CardDegrade from "./Components/CardDegrade";

function ClientsDegrade() {
  const listOfDegrade = [
    {
      deg: "92",
      para: "Customers experiencing a hassle-free refund process are more likely to return to the store.",
    },
    {
      deg: "40",
      para: "Increase in same-day repurchase rates when having a hassle-free refund process.",
    },
    {
      deg: "85",
      para: "A notable reduction in complaints reported to the Commerce Ministry has been observed.",
    },
    {
      deg: "30",
      para: "The value of repurchases in subsequent orders has seen a notable rise.",
    },
  ];
  return (
    <section className="my-[4em] w-[98%] mx-auto shadow-lg ">
      <div className="bg-primary rounded-lg shadow-lg py-[6em] px-6">
        <h2 className="flex justify-center items-center text-white text-[clamp(1.3rem,3vw,2.3rem)] w-[70%] leading-10  mx-auto text-center font-semibold">
          Yamm helps you Navigate the complexities of customer complaints and
          protracted refund processes that currently undermine trust and degrade
          client relationships.
        </h2>
        <div className="mt-[4em] grid grid-cols-1 md:grid-cols-2 gap-5">
          {listOfDegrade.map((client, index) => (
            <CardDegrade key={index} clients={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsDegrade;
