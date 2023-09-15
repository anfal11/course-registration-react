import { useState } from "react";
import { useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
  // useState for card data
  const [card, setCard] = useState([]);

  // useState for selected card to use spread operator for copying cards
  const [selectedCard, setselectedCard] = useState([]);

  // useState for total remaining credit
  const [totalRemainingCredit, setTotalRemainingCredit] = useState(0);

  // useState for total credit
  const [totalCredit, setTotalCredit] = useState(0);
  
  
  // useEffect for fetching data
  useEffect(() => {
    fetch("../../../public/info.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const handleSelect = (card) => {

    let totalCredit = card.credit;
    const isExist = selectedCard.find((item) => item.id === card.id);
    if (isExist) {
      return toast.warn('Already Added this course.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        

    } else {
     
      selectedCard.forEach((item) => {
        totalCredit = totalCredit + item.credit;
        setTotalCredit(totalCredit);
      });
      const totalRemainingCredit = 20 - totalCredit;
      setTotalCredit(totalCredit);
      setTotalRemainingCredit(totalRemainingCredit);
      setselectedCard([...selectedCard, card]);
    }



    
  }
  

  return (
    <div className="lg:flex md:justify-around mx-auto pb-8">
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
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>

      <div>
          <Bookmark selectedCard = {selectedCard} totalRemainingCredit = {totalRemainingCredit} totalCredit = {totalCredit}></Bookmark>
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
