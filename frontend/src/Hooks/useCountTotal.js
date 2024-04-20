import { useEffect, useState } from "react";

export default function useCountTotal(shoppingCart) {
  //Custom hook to calculate the total price of the shopping cart

  const [totalPrice, setTotalPrice] = useState(0);

  //check the state
  useEffect(() => {
    const findQuantity = async () => {
      try {
        if (shoppingCart) {
          await setTotalPrice(
            shoppingCart.reduce((acc, item) => acc + item.price, 0)
          );
        } else {
          await setTotalPrice(0);
        }
      } catch (error) {
        console.error("error with the total price data:", error.message);
      }
    };

    findQuantity();
  }, [shoppingCart]);

  return { totalPrice };
}
