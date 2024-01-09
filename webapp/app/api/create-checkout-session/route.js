import { stripe } from "../../../app/utils/Stripe";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { plans } = req.body;

      const lineItems = plans.map((plan) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: plan.name,
          },
          unit_amount: plan.price * 100,
        },
        quantity: 1,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      //   res.status(200).json({ id: session.id });
      return new Response(session.id, { status: 200 });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
