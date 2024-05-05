import { useState } from "react";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore illo unde ratione sapiente earum consequatur perspiciatis quaerat sint eos. Blanditiis atque soluta id.",
        green: "/src/assets/Rectangle 30.png",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore illo unde ratione sapiente earum consequatur perspiciatis quaerat sint eos. Blanditiis atque soluta id.",
        green: "/src/assets/Rectangle 30.png",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore illo unde ratione sapiente earum consequatur perspiciatis quaerat sint eos. Blanditiis atque soluta id.",
      green: "/src/assets/Rectangle 30.png"
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-lg text-tartiary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components, which is
          often a declarative
        </p>

        {/* Toggle Pricing */}
        <div className="mt-10">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full">
              <div
                className={`rounded-full w-6 h-6 transition duration-200 ease-in-out ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-400 mr-8"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      
      {/* Pricing Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 ">
        {
          packages.map((pkg, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold text-primary text-center">{pkg.name}</h3>
            <p className="text-tartiary text-center">{pkg.description}</p>
            <p className="text-center mt-5 font-bold text-secondary text-4xl">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice} `} <span className="text-base text-tartiary font-medium">{isYearly ? '/YEAR' : '/MONTH'}</span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-2 items-center "><img src={pkg.green} className="w-4 h-4"/>Videos of Lectures</li>
              <li className="flex gap-2 items-center "><img src={pkg.green} className="w-4 h-4"/>Home Work Check</li>
              <li className="flex gap-2 items-center "><img src={pkg.green} className="w-4 h-4"/>Additional Practical Tasks</li>
              <li className="flex gap-2 items-center "><img src={pkg.green} className="w-4 h-4"/>Monthly Conference</li>
              <li className="flex gap-2 items-center "><img src={pkg.green} className="w-4 h-4"/>Personal Advice from teacher</li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get Started</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Pricing;
