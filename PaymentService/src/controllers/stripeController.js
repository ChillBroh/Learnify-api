const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const axios = require("axios");
require("dotenv").config();

const CreateCheckout = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.name,
              images: [req.body.image],
            },
            unit_amount: req.body.price * 100,
          },
          quantity: req.body.quantity,
        },
      ],
      success_url: `${process.env.CLIENT_URL}course/detailed/${req.body.id}`,
      cancel_url: `${process.env.CLIENT_URL}`,
    });
    const response = await axios.post(`http://localhost:8002/enroll/`, {
      courseId: req.body.id,
      userId: req.body.userId,
    });

    console.log(response);
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { CreateCheckout };
