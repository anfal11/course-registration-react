import { useState } from "react";
import { useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Card = () => {
  // state for card datas
  const [card, setCard] = useState([]);
  // useEffect for fetching data
  useEffect(() => {
    fetch("../../../public/info.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="flex justify-around">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3">
        {card.map((card) => (
          <div className="bg-white rounded-xl flex flex-col" key={card.id}>
            <img className="w-full p-4" src={card.image} alt="" />
            <h1 className="mt-4 text-lg font-semibold ml-4">{card.title}</h1>
            <p className="text-[#1c1b1b99] mt-4 mx-4 text-justify flex-grow">
              {card.description}
            </p>
            <div className="flex justify-between mt-4">
              <div className="flex gap-3 items-center ml-4">
                <BsCurrencyDollar />
                <p className="font-medium text-xs text-[#1c1b1b99]">
                  Price: {card.price}
                </p>
              </div>
              <div className="flex gap-3 items-center mr-5">
                <IoBookOutline />
                <p className="font-medium text-xs text-[#1c1b1b99]">
                  Credit: {card.credit}hr
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-4 mt-7">
              <button className="text-lg font-semibold text-white bg-[#2F80ED] rounded-lg px-28 py-2">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="bg-[#1111110d] p-7 rounded-lg">
          <h2 className="text-[#2F80ED] text-lg font-bold border-b-2 border-[#1c1b1b33] pb-4">
            
            Credit Hour Remaining 7 hr
          </h2>
          <h1 className="text-xl font-bold mt-4 mb-5 border-b-2 border-[#1c1b1b33] pb-5">
            Course Name
          </h1>
          {}

          <h3 className="text-base font-medium pb-4 mb-5 border-b-2 border-[#1c1b1b33]">
         
            Total Credit Hour : 13
          </h3>
          <h3 className="text-base font-semibold mb-5"> Total Price : 1300</h3>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  credit: PropTypes.number,
};
export default Card;
