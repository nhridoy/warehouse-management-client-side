import axios from "axios";
import React, { useEffect } from "react";
import { CountUp } from "use-count-up";

const Counter = () => {
  const [data, setData] = React.useState({});
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/itemsummary").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="bg-[url('https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/car1-lrg1.jpg')] bg-no-repeat bg-cover bg-center sepia p-10">
      <div className="bg-black opacity-80 p-10 text-white font-light text-3xl flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <CountUp
            thousandsSeparator=","
            isCounting
            end={data.totalItems}
            duration={5}
          />
          <p>Total Models</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <CountUp
            thousandsSeparator=","
            isCounting
            end={data.totalQuantity}
            duration={5}
          />
          <p>Total Quantity</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            $
            <CountUp
              thousandsSeparator=","
              isCounting
              end={data.totalValue}
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
