import React from "react";
import { useEffect } from "react/cjs/react.development";

function Gateway() {
  useEffect(() => {
    function openPaymentWindow() {
      const paymentUrl =
        "https://payment.nft-maker.io/?p=c7750f08650f4b02bd0838c93e6984fc&c=1";

      // Specify the popup width and height
      const popupWidth = 500;
      const popupHeight = 700;

      // Calculate the center of the screen
      const left =
        window.top.outerWidth / 2 + window.top.screenX - popupWidth / 2;
      const top =
        window.top.outerHeight / 2 + window.top.screenY - popupHeight / 2;

      const popup = window.open(
        paymentUrl,
        "NFT-MAKER PRO Payment Gateway",
        `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
      );

      // Show dim background
      document.body.style = "background: rgba(0, 0, 0, 0.5)";

      // Continuously check whether the popup has been closed
      const backgroundCheck = setInterval(function () {
        if (popup.closed) {
          clearInterval(backgroundCheck);

          console.log("Popup closed");

          // Remove dim background
          document.body.style = "";
        }
      }, 1000);
    }
    const paymentBtn = document.querySelector(".gateway");

    paymentBtn.innerHTML = `<img src="https://pro.nft-maker.io/images/buttons/paybutton_1_1.svg" onclick="javascript:openPaymentWindow()"/>`;
  }, []);

  return <div></div>;
}

export default Gateway;
