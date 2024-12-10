import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  date: Date;
  tableId: string;
};

const OrderTableForm = ({ date, tableId }: Props) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate()

  const submitOrder = async () => {
    const url = import.meta.env.VITE_URL;
    const apiToken = import.meta.env.VITE_API_TOKEN;

    const reservation = {
      reservationId: -1,
      name: name,
      email: email,
      date: date
        .toLocaleDateString("no")
        .replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$1/$2/" + "$3".slice(-2)),
      time: "19:00",
      tableId: tableId,
      status: "venter",
      phone: phoneNumber,
    };

    try {

      axios
      .post(`${url}reservation`, reservation, {
        headers: {
          api_token: apiToken,
        },
      })
      .then((response) => {
        console.log("response", response.data);
        navigate("/")
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <p>Du vil få tilsendt bekreftelse på E-post og SMS</p>
      <div>
        <p>Navn:</p>
        <input
          className="w-full "
          placeholder="Ditt Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <p>E-post:</p>
        <input
          className="w-full "
          placeholder="Din epost"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <p>Telefon</p>
        <input
          className="w-full "
          placeholder="Ditt Telefon Nummer"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="w-full flex items-center justify-center pt-8">
        <button
          onClick={(e) => {
            e.preventDefault(); 
            submitOrder()}}
          className="bg-[#4A90E2] p-2 flex items-center justify-center w-[66%]"
        >
          <p className="font-bold text-lg">Bestill</p>
        </button>
      </div>
    </div>
  );
};

export default OrderTableForm;
