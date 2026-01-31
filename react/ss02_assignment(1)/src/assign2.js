import React, { createContext, useContext } from "react";
const PriceContext = createContext();
function PriceComp({ children }) { 
  const prodPrice = 4000;
  return (
    <PriceContext.Provider value={{ prodPrice }}>
      {children}
    </PriceContext.Provider>
  );
}
function DiscountComp({ children }) { 
  const disc = 30;
  return (
    <PriceContext.Provider value={{ disc }}>
      {children}
    </PriceContext.Provider>
  );
}
function AppComp() {
  const { prodPrice, disc } = useContext(PriceContext);
  const discountedPrice = prodPrice - (prodPrice * disc) / 100;
  return (
    <div>
      <h3>Actual Price: {prodPrice}</h3>
      <h3>Discount Given: {disc}%</h3>
      <h3>Discounted Price: {discountedPrice}</h3>
    </div>
  );
}
export default function Assign2() {
  return (
    <PriceContext.Provider value={{ prodPrice: 4000, disc: 30 }}>
      <AppComp />
    </PriceContext.Provider>
  );
}