import React from "react";
import FourSeatTable from "./FourSeatTable";
import TwoSeatTable from "./TwoSeatTable";
import LongTable from "./LongTable";
import { TableMapType } from "../../utils/Types";

type Props = {
  tableMap: TableMapType;
  setTableMap: React.Dispatch<React.SetStateAction<TableMapType>>;
};

const TableMap = ({ tableMap }: Props) => {
  return (
    <div className="bg-slate-700 rounded-sm w-full h-[400px] flex flex-col items-center justify-evenly">
      <div className="flex justify-evenly w-full">
        {tableMap.fourSeatTableRowOne.map((table, i) => (
          <FourSeatTable key={i} taken={table.taken} selected={table.selected}/>
        ))}
      </div>
      <div className="flex justify-evenly w-full">
        {tableMap.fourSeatTableRowTwo.map((table, i) => (
          <FourSeatTable key={i} taken={table.taken} selected={table.selected}/>
        ))}
      </div>
      <div className="flex justify-evenly w-full">
        {tableMap.twoSeatTable.map((table, i) => (
          <TwoSeatTable key={i} taken={table.taken} selected={table.selected}/>
        ))}
      </div>
      <div className="flex justify-evenly w-full">
        {tableMap.longTable.map((table, i) => (
          <LongTable key={i} taken={table.taken} selected={table.selected}/>
        ))}
      </div>
    </div>
  );
};

export default TableMap;
