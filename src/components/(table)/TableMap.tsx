import React from "react";
import FourSeatTable from "./FourSeatTable";
import TwoSeatTable from "./TwoSeatTable";
import LongTable from "./LongTable";
import { Reservation, TableMapType } from "../../utils/Types";

type Props = {
  tableMap: TableMapType;
  setTableMap: React.Dispatch<React.SetStateAction<TableMapType>>;
  selectedTable: string;
  setSelectedTable: React.Dispatch<React.SetStateAction<string>>;
  reservations: Reservation[];
};

const TableMap = ({ tableMap, selectedTable,setSelectedTable, reservations }: Props) => {
  
  console.log("reservations", reservations)

  const checkIfTaken = (tableId: string) => {
    const match = reservations.find(reservation => reservation.tableId === tableId) 
    return match !== undefined
  }

  return (
    <div
      role="region"
      aria-labelledby="Bord Kart"
      className="bg-slate-700 rounded-sm w-full h-[400px] flex flex-col items-center justify-evenly"
    >
      <h2 id="bord-kart" className="sr-only">
        Bord Kart
      </h2>
      <div
        className="flex justify-evenly w-full"
        role="group"
        aria-labelledby="Fire-setter-bord-rad-en"
      >
        <h3 id="Fire-setter-bord-rad-en" className="sr-only">
          Fire setter bord rad en
        </h3>
        {tableMap.fourSeatTableRowOne.map((table, i) => (
          <FourSeatTable
            key={i}
            taken={checkIfTaken(table.id)}
            selected={table.id == selectedTable}
            tableId = {table.id}
            setSelectedTable={setSelectedTable}

          />
        ))}
      </div>
      <div
        className="flex justify-evenly w-full"
        role="group"
        aria-labelledby="Fire-setter-bord-rad-to"
      >
        <h3 id="Fire-setter-bord-rad-to" className="sr-only">
          Fire setter bord rad to
        </h3>
        {tableMap.fourSeatTableRowTwo.map((table, i) => (
          <FourSeatTable
            key={i}
            taken={checkIfTaken(table.id)}
            selected={table.id == selectedTable}
            tableId = {table.id}
            setSelectedTable={setSelectedTable}
          />
        ))}
      </div>
      <div
        className="flex justify-evenly w-full"
        role="group"
        aria-labelledby="to-setter-bord"
      >
        <h3 id="to-setter-bord" className="sr-only">
          To setter bord
        </h3>
        {tableMap.twoSeatTable.map((table, i) => (
          <TwoSeatTable key={i} taken={checkIfTaken(table.id)} selected={table.id == selectedTable} tableId = {table.id}
          setSelectedTable={setSelectedTable}

          />
        ))}
      </div>
      <div
        className="flex justify-evenly w-full"
        role="group"
        aria-labelledby="lang-bord"
      >
        <h3 id="lang-bord" className="sr-only">
          Lang bord
        </h3>
        {tableMap.longTable.map((table, i) => (
          <LongTable key={i} taken={checkIfTaken(table.id)} selected={table.id == selectedTable} 
          setSelectedTable={setSelectedTable}

          tableId = {table.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TableMap;
