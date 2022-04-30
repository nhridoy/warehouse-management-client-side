import React from "react";
import { CountUp } from "use-count-up";

const Counter = () => {
  return (
    <div className="bg-[url('https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/car1-lrg1.jpg')] bg-no-repeat bg-cover bg-center sepia p-10">
      <div className="bg-black opacity-80 p-10 text-white font-light text-3xl flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <CountUp thousandsSeparator="," isCounting end={23320} duration={5} />
          <p>Total Product</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            $
            <CountUp
              thousandsSeparator=","
              isCounting
              end={13420}
              duration={5}
            />
          </span>
          <p>Total Value</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
