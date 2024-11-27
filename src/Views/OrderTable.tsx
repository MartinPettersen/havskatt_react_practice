import React, { useState } from "react";
import Parallax from "../components/(utils)/Parallax";
import image from "../assets/al-elmes-ULHxWq8reao-unsplash.jpg";
import TableMap from "../components/(table)/TableMap";
import TwoSeatTable from "../components/(table)/TwoSeatTable";

const OrderTable = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [tableMap, setTableMap] = useState({
    fourSeatTableRowOne: [
      {
        id: "f1",
        taken: true,
        selected: false,
      },
      {
        id: "f2",
        taken: false,
        selected: false,
      },
      {
        id: "f3",
        taken: false,
        selected: false,
      },
    ],
    fourSeatTableRowTwo: [
      {
        id: "f4",
        taken: false,
        selected: false,
      },
      {
        id: "f5",
        taken: false,
        selected: false,
      },
      {
        id: "f6",
        taken: false,
        selected: false,
      },
    ],
    twoSeatTable: [
      {
        id: "t1",
        taken: false,
        selected: false,
      },
      {
        id: "t2",
        taken: false,
        selected: false,
      },
      {
        id: "t3",
        taken: false,
        selected: false,
      },
      {
        id: "t4",
        taken: false,
        selected: false,
      },
      {
        id: "t5",
        taken: false,
        selected: false,
      },
    ],
    longTable: [
      {
        id: "l1",
        taken: false,
        selected: false,
      },
    ],
  });

  return (
    <Parallax imageUrl={image} altText="Bilde av festglade mennesker som sitter rundt et bord">
      <div className="flex item-end justify-center">
        <div className="flex items-center  justify-center  w-[70%] ">
          <div className="flex flex-col space-y-4">
            <div className="flex w-full items-center justify-center">
              <h2 className="font-bold text-xl">Bestill Bord</h2>
            </div>
            <div className="flex justify-evenly">
              <div className="flex space-x-1">
                <div className="border-[1px] rounded-full border-slate-700">
                  <TwoSeatTable taken={false} selected={false} />
                </div>
                <p>Ledig</p>
              </div>
              <div className="flex space-x-1">
                <div className="border-[1px] rounded-full border-slate-700">
                  <TwoSeatTable taken={true} selected={false} />
                </div>
                <p>Opptatt</p>
              </div>
              <div className="flex space-x-1">
                <div className="border-[1px] rounded-full border-slate-700">
                  <TwoSeatTable taken={false} selected={true} />
                </div>
                <p>Valgt</p>
              </div>
            </div>
            <TableMap tableMap={tableMap} setTableMap={setTableMap} />
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
              <button className="bg-[#4A90E2] p-2 flex items-center justify-center w-[66%]">
                <p className="font-bold text-lg">Bestill</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default OrderTable;
