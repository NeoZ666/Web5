"use client";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

// Icon from React
import { RiMapPin2Fill } from "react-icons/ri";

const EventBox = ({ events }) => {
  // payment function
  const payment = async () => {
    const plans = [
      {
        name: "1 Month Subscription",
        price: 100,
      },
    ];
    const stripe = await loadStripe(
      "pk_test_51Nk7IzSEBFON0EJBUBJSTdEuns8D1cKcVCeq1927785ziBknaTz0NzNKaEYsHaCdtVwxtHlLViFTezfDzZ7HcLam00YiYPxonf"
    );

    const body = {
      plans: plans,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  // const payment = async () => {
  //   const plans = [
  //     {
  //       name: "1 Month Subscription",
  //       price: 100,
  //     },
  //   ];

  //   try {
  //     const response = await fetch("/api/create-checkout-session", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ plans }),
  //     });

  //     const session = await response.json();

  //     const stripe = await loadStripe(
  //       "pk_test_51Nk7IzSEBFON0EJBUBJSTdEuns8D1cKcVCeq1927785ziBknaTz0NzNKaEYsHaCdtVwxtHlLViFTezfDzZ7HcLam00YiYPxonf"
  //     );
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });

  //     if (result.error) {
  //       console.error(result.error.message);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // calling the event props from the event data fetched from the server in the Event component
  return (
    <div className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        {/* Images */}
        <div className="xl:flex w-[400px] hidden">
          <Image
            src={"/assets/events-img/singer.png"}
            width={358}
            height={489}
            priority
            quality={100}
            alt="singerImage"
          />
        </div>
        {/* Event List  */}
        <div className="flex- h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 xl:pr-6">
          {/* Mapping the Events items */}
          {events.map((event) => {
            return (
              <div
                key={event.id}
                className="flex flex-col xl:flex-row items-center justify-between gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0"
              >
                <div className="flex flex-col xl:flex-row items-center gap-x-4">
                  <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
                    {/* Events day */}
                    <div className="text-[44px] text-accent font-extrabold">
                      {event.date.day}
                    </div>
                    {/* Events Month */}
                    <div className="text-[22px] font-extrabold">
                      {event.date.month}
                    </div>
                  </div>
                  {/* Events Location */}
                  <div className="w-64 flex flex-col gap-y-2">
                    <div className=" text-lg leading-none font-bold">{`${event.location.city}, ${event.location.country}`}</div>
                    <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                      <div className="text-accent text-lg">
                        <RiMapPin2Fill />
                      </div>
                      <div className="text-light">Online</div>
                    </div>
                  </div>
                </div>
                {/* Price Range */}
                <div className="w-[100px] text-[17px] text-center text-accent font-bold">
                  {event.priceRange}
                </div>
                {/* Button */}
                <button onClick={payment()} className="btn btn-sm btn-accent">
                  Get tickets
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventBox;
