function Faq() {
  return (
    <section className="container my-[8em] w-[75%] mx-auto">
      <h2 className="text-center text-txtGray text-[clamp(1.60rem,3.5vw,5rem)] font-semibold mb-[1em]">
        Frequently Asked Questions
      </h2>

      <div>
        <details>
          <summary>What is Yamm?</summary>
          <p>
            Yamm is an innovative platform designed to simplify the return and
            refund processes for online stores. We provide fully automated
            solutions that handle return requests, issue shipping labels, and
            process payments quickly, reducing the pressure on customer support
            teams and enhancing customer satisfaction.
          </p>
        </details>
        <details>
          <summary>
            How long does it take for the customer to get their money back?
          </summary>
          <p>
            With Yamm, the customer gets their money back immediately once the
            return request is approved, meaning the process takes just seconds,
            improving the customer experience and increasing trust in your
            store.
          </p>
        </details>
        <details>
          <summary>
            How long does it take to activate the service in my store?
          </summary>
          <p>
            Activating Yamm in your store is easy and quick. Once the agreement
            is signed, we can set up the service and integrate it with your
            store within one to two business days.
          </p>
        </details>
        <details>
          <summary>
            Can I customize the refund page to match my store’s identity?
          </summary>
          <p>
            Yes, with Yamm, we offer you the ability to customize the refund
            page to match your store’s visual identity and logo, making the
            customer experience seamless and in line with your brand.
          </p>
        </details>
        <details>
          <summary>Does Yamm work with all e-commerce platforms?</summary>
          <p>
            Yamm is integrated with major e-commerce platforms such as Salla,
            Zid, and Shopify, and we are continuously adding support for new
            platforms, as well as supporting custom websites outside of these
            platforms.
          </p>
        </details>
        <details>
          <summary>Does Yamm affect my store’s return policy?</summary>
          <p>
            No, Yamm does not change your store’s return policy. We work
            according to the policies you define and help you implement them
            efficiently.
          </p>
        </details>
        <details>
          <summary>
            What happens if the customer does not return the product?
          </summary>
          <p>
            Yamm bears all the risks associated with the customer not returning
            the product, meaning you will not incur any losses in this case.
          </p>
        </details>
        <details>
          <summary>How can I track return requests?</summary>
          <p>
            Through Yamm’s control panel, you can track all return requests in
            real-time and get detailed reports on each process.
          </p>
        </details>
      </div>
    </section>
  );
}

export default Faq;
