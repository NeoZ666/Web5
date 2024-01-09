import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51Nk7IzSEBFON0EJBR49AsAhYc5E9LEGJOwpwDgno7co8msn4NiODrrHQEthWPQfqi07nwBDTE5D30hDq68zluzrJ0046eRH5rQ",
  {
    apiVersion: "2020-08-27", // Use the appropriate API version
  }
);

export { stripe };
