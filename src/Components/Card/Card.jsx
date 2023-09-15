import { useState } from "react";
import { useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Card = () => {
  // useState for card data
  const [card, setCard] = useState([]);

  // useState for selected card to use spread operator for copying cards
  const [selectedCard, setselectedCard] = useState([]);
  
  // useEffect for fetching data
  useEffect(() => {
    fetch("../../../public/info.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const handleSelect = (card) => {
    setselectedCard([...selectedCard, card]);
    
  }
  

  return (
    <div className="lg:flex md:justify-around mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-2/3">
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
              <button onClick={()=>handleSelect(card)} className="text-lg font-semibold text-white bg-[#2F80ED] rounded-lg px-20 py-2">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
          <Bookmark selectedCard = {selectedCard}></Bookmark>
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
