import chicken from "../src/assets/chicken.jpg";
import fish from "../src/assets/fish.jpeg";
import fries from "../src/assets/fries.jpeg";
import mac from "../src/assets/mac.jpeg";
import mainchicken from "../src/assets/mainchicken.jpeg";
import mozzarella from "../src/assets/mozzarella.jpeg";
import pork from "../src/assets/pork.jpeg";

const MenuData = [
  {
    id: "A1",
    type: "Appetizers",
    name: "Mozzarella sticks",
    price: 14.99,
    description:
      "Mozzarella Sticks are a cheesy, classic appetizer that everybody loves! The warm melted cheese is surrounded by savory breading that keeps it from oozing out as it is fried to crispy, golden perfection.",
    image: mozzarella,
  },
  {
    id: "A2",
    type: "Appetizers",
    name: "Mac & Cheese",
    price: 16.99,
    description:
      "Cheesy, gooey, creamy and oh-so-delicious… you know what we’re describing – mac and cheese! One of the most popular comfort foods (worldwide) is so well-liked it even has its own holiday",
    image: mac,
  },
  {
    id: "A3",
    type: "Appetizers",
    name: "French Fries",
    price: 12.99,
    description:
      "Cruchy from outside and delicate from inside. Every potatoes cut with the precision and of same size and deeply fried till it become crunchy.",
    image: fries,
  },
  {
    id: "C1",
    type: "Comfort Food",
    name: "Crispy Fried Chicken",
    price: 22.99,
    description:
      "Cruchy from outside and delicate from inside. Every chicken cut with the precision and of same size and deeply fried till it become crunchy and well done.",
    image: chicken,
    image: chicken,
    image: chicken,
  },
  {
    id: "C2",
    type: "Comfort Food",
    name: "Crispy Fried Chicken",
    price: 22.99,
    description:
      "Cruchy from outside and delicate from inside. Every chicken cut with the precision and of same size and deeply fried till it become crunchy and well done.",
    image: chicken,
  },
  {
    id: "C3",
    type: "Comfort Food",
    name: "Crispy Fried Chicken",
    price: 22.99,
    description:
      "Cruchy from outside and delicate from inside. Every chicken cut with the precision and of same size and deeply fried till it become crunchy and well done.",
    image: chicken,
  },
  {
    id: "M1",
    type: "Main Course",
    name: "Grilled Pork Spareribs",
    price: 30.99,
    description:
      "Barbecue brisket is a whole ordeal. The rich meaty flavor and tender pork spareribs with ginger ale sauce is a delicacy of this restaurant.",
    image: pork,
  },

  {
    id: "M2",
    type: "Main Course",
    name: "Salad Roast Chicken",
    price: 32.99,
    description:
      "This isn't your typical chicken Caesar. Here, you'll smother the chicken (whole, or just the legs with thigh and drumstick attached) in garlicky dressing. ",
    image: mainchicken,
  },
  {
    id: "M3",
    type: "Main Course",
    name: "Fish Tacos al Pastor",
    price: 32.99,
    description:
      "Pork tacos al pastor may get the fame, but this fish al pastor deserves plenty of glory. A potent chile marinade adds lots of flavor before the fillets hit the grill, and a pineapple salsa is the perfect finishing touch. ",
    image: fish,
  },
];

export default MenuData;
