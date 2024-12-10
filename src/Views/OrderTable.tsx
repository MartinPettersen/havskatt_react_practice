import React, { useEffect, useState } from "react";
import Parallax from "../components/(utils)/Parallax";
import image from "../assets/al-elmes-ULHxWq8reao-unsplash.jpg";
import TableMap from "../components/(table)/TableMap";
import TwoSeatTable from "../components/(table)/TwoSeatTable";
import { Calendar } from "primereact/calendar";
import axios from "axios";
import { Reservation } from "../utils/Types";
import OrderTableForm from "../components/(table)/OrderTableForm";

const OrderTable = () => {

  const [selectedTable, setSelectedTable] = useState("");
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);

  const [date, setDate] = useState<Date>(new Date());

  const [tableMap, setTableMap] = useState({
    fourSeatTableRowOne: [
      {
        id: "f1",
        taken: false,
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

  

  useEffect(() => {
    const tempDate = date.toLocaleDateString('no').replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$1/$2/' + '$3'.slice(-2))
    const apiToken = import.meta.env.VITE_API_TOKEN; 
    const url = import.meta.env.VITE_URL
    console.log("we get called with ", tempDate)
    axios
      .get(`${url}reservations?date=${tempDate}`, {
        headers: {
          'api_token': apiToken, 
        }
      })
      .then((response) => {
        console.log(response.data);
        setReservations(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [date]);

  return (
    <Parallax
      imageUrl={image}
      altText="Bilde av festglade mennesker som sitter rundt et bord"
    >
      <div className="flex item-end justify-center">
        <div className="flex items-center  justify-center  w-[70%] ">
          <div className="flex flex-col space-y-4">
            <div className="flex w-full items-center justify-center">
              <h2 className="font-bold text-xl">Bestill Bord</h2>
            </div>
            <div className="bg-white flex w-full relative overflow-visible">
              <Calendar
                className="w-full"
                value={date}
                onChange={(e) => setDate(e.value as Date)}
                dateFormat="dd/mm/yy"
                showIcon
                panelClassName="z-50 bg-white shadow-lg rounded-sm"
                minDate={new Date()}
                maxDate={maxDate}
              />
            </div>

            <div className="flex justify-evenly">
              <div className="flex space-x-1">
                <div className="border-[1px] rounded-full border-slate-700">
                  <TwoSeatTable
                    taken={false}
                    selected={false}
                    setSelectedTable={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    tableId={""}
                  />
                </div>
                <p>Ledig</p>
              </div>
              <div className="flex space-x-1">
                <div className="border-[1px] rounded-full border-slate-700">
                  <TwoSeatTable
                    taken={true}
                    selected={false}
                    setSelectedTable={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    tableId={""}
                  />
                </div>
                <p>Opptatt</p>
              </div>
              <div className="flex space-x-1">
                <div className="border-[1px] rounded-full border-slate-700">
                  <TwoSeatTable
                    taken={false}
                    selected={true}
                    setSelectedTable={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    tableId={""}
                  />
                </div>
                <p>Valgt</p>
              </div>
            </div>
            <TableMap
              tableMap={tableMap}
              setTableMap={setTableMap}
              selectedTable={selectedTable}
              setSelectedTable={setSelectedTable}
              reservations={reservations}
            />
            <OrderTableForm date={date} tableId={selectedTable}/>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default OrderTable;
