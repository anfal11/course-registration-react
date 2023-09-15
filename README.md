
![Screenshot 2023-09-15 103551](https://github.com/programming-hero-web-course2/my-course-roster-anfal11/assets/98157911/40560453-5145-4e1e-b723-735e4966b5cf)

~ You can see in this image that certain features have been added. I've used ReactJS to develop four important features for this course-roaster Website

1. When you click on the Select Button, the credit hour, Course name feature, total credit hour and total price will be added to the right side.
2. Credit Hour Remaining will be 0 or more than 0. But it can not be less than 0. If it happens, there will be shown a toast alert.
3. Total Credit Hours can not be more than 20.
4. Total Price will be updated step by step depending on clicking the select button.


~ All about useState and useEEffect

1. In Card.jsx,
  // useState hook for card data
  const [card, setCard] = useState([]);
  
  // useEffect hook for fetching data
  
  useEffect(() => {
    fetch("../../../public/info.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  In line no:20, 
  {card.map((card) =())} the card state has mapped.

2. In Card.jsx,
  // useState for selected card to use spread operator for copying cards and the state is initially empty array because there are no cards selected from the selected list and there are no cards in the selected list.
  const [selectedCard, setselectedCard] = useState([]);

  
  const handleSelect = (card) => {
    setselectedCard([...selectedCard, card]); 
  }

  Here, I sent a parameter named card, and line 53, 
  <button onClick={()=>handleSelect(card)} className="text-lg font-semibold text-white bg-[#2F80ED] rounded-lg px-20 py-2"> Select</button>
  sent a parameter named card which is from map parameter. it's a handleSelect that means onClick event for selecting elements.

3. In Bookmark.jsx, line 3,
const Bookmark = ({selectedCard}) where selectedCard is sent as a props and get the data by mapping.

4. In Cart.jsx, line no.18,
   // useState for total remaining credit
  const [totalRemainingCredit, setTotalRemainingCredit] = useState(0);
  This is for remaining credit. The initial credit is 0 and set total remaining credit is set to 0. The value will be updated and it is passed to Bookmark.jsx for showing data in ui

5. In Cart.jsx, line no 21
 // useState for total credit
  const [totalCredit, setTotalCredit] = useState(0); 
  This is for Total credit. The initial credit is 0 and set total total credit is set to 0. The value will be updated and it is passed to Bookmark.jsx for showing data in ui. 

