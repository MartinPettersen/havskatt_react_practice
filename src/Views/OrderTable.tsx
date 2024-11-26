import React, { useState } from "react";
import Parallax from "../components/(utils)/Parallax";
import image from "../assets/al-elmes-ULHxWq8reao-unsplash.jpg";

const OrderTable = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Parallax imageUrl={image}>
      <div className="flex item-end justify-center">
        <div className="flex items-center  justify-center  w-[70%] ">
          <div className="flex flex-col space-y-4">
            <h2>Bestill Bord</h2>
            <div>tablemap</div>
            <p>Du vil få tilsendt bekreftelse på E-post og SMS</p>
            <div>
              <p>E-post:</p>
              <input
                className="w-full "
                placeholder="Din epost"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <p>Telefon</p>
              <input
                className="w-full "
                placeholder="Ditt Telefon Nummer"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center justify-center pt-8">
              <div className="bg-[#4A90E2] p-2 flex items-center justify-center w-[66%]">
                <p className="font-bold text-lg">Send</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default OrderTable;
