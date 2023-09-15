
![Screenshot 2023-09-15 103551](https://github.com/programming-hero-web-course2/my-course-roster-anfal11/assets/98157911/40560453-5145-4e1e-b723-735e4966b5cf)

You can see in this image that certain features have been added. I've used ReactJS to develop four important features for this course-roaster Website

1. When you click on the Select Button, the credit hour, Course name feature, total credit hour and total price will be added to the right side.
2. Credit Hour Remaining will be 0 or more than 0. But it can not be less than 0. If it happens, there will be shown a toast alert.
3. Total Credit Hours can not be more than 20.
4. Total Price will be updated step by step depending on clicking the select button.

In Card.jsx,
  // useState hook for card data
  const [card, setCard] = useState([]);
  
  // useEffect hook for fetching data
  
  useEffect(() => {
    fetch("../../../public/info.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
In line no:20, 
 {card.map((card) =()} the card state has mapped.
