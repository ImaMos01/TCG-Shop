import { useEffect, useState } from "react";

export default function useCountQty(shoppingCart) {
  //Custom hook to alculate the total items in the shopping cart

  const [allItems, setAllItems] = useState(0);

  //check the state
  useEffect(() => {
    const findQuantity = async () => {
      try {
        if (shoppingCart) {
          await setAllItems(
            shoppingCart.reduce((acc, item) => acc + item.quantity, 0)
          );
        } else {
          await setAllItems(0);
        }
      } catch (error) {
        console.error("error with the total items data:", error.message);
      }
    };

    findQuantity();
  }, [shoppingCart]);

  return { allItems };
}
