import { useState } from "react";
import Countdown from "react-countdown";
import ClipboardBtn from "./ClipboardBtn";
import axios from "axios";

export const MintBtn = (props) => {
  const price = props.price;

  const [buttonMsg, setButtonMsg] = useState("Pay via Send Address");
  const [mintAddress, setMintAddress] = useState(null);
  const mintButton = (
    <button
      className="mintButton btn-primary-lg mx-auto"
      onClick={fetchPaymentAddress}
      dangerouslySetInnerHTML={{ __html: `${buttonMsg}` }}
    ></button>
  );

  const AddressExpired = () => (
    <span className="mx-auto text-base text-red-700 font-bold">
      This address has now expired and cannot be used anymore.
      <span className="block">Refresh this page to receive a new address.</span>
    </span>
  );

  async function fetchPaymentAddress() {
    try {
      const mintBtnDOM = document.querySelector(".mintButton");
      setButtonMsg("FETCHING ADDRESS...");
      const fetchMintAddress = await axios.get("/api/addy");
      const data = fetchMintAddress.data.addy;
      console.log(data);

      mintBtnDOM.style.display = "none";
      setMintAddress(data.paymentAddress);
    } catch (error) {
      if (error.toString() == "Error: Request failed with status code 429")
        console.log(
          "We have reached maximum request per minute. Please wait 1 minute for it to reset"
        );
    }
  }

  return (
    <div className="flex flex-col ">
      <div className="mx-auto">
        {mintButton}
        {mintAddress ? (
          <div className="text-center">
            <p className="mx-auto text-base text-gray-500">
              Send <span className="text-red-500"> exactly {price} </span> ADA
              to this address:
            </p>
            <ClipboardBtn mintAddress={mintAddress} />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="mx-auto text-base text-gray-500">
        {mintAddress ? (
          <div className="mt-5">
            <Countdown date={Date.now() + 60000 * 20}>
              <AddressExpired />
            </Countdown>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
