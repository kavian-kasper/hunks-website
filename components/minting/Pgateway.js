import React from "react";

function Pgateway(props) {
  const paymentFunction = props.paymentFunction;

  return (
    <div>
      <img
        src="https://pro.nft-maker.io/images/buttons/paybutton_1_1.svg"
        onClick={paymentFunction}
      />
    </div>
  );
}

export default Pgateway;
