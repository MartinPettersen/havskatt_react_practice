import React from "react";
type Props = {
  taken: boolean;
  selected: boolean;
};

const FourSeatTable = ({ taken, selected }: Props) => {
  return (
    <div
      role="button"
      aria-label={
        taken ? "Bord Opptat" : selected ? "Bord valgt" : "Bord Ledig"
      }
      aria-pressed={selected}
      className={`w-40 h-6 ${taken ? "bg-[#FF6F61]" : selected ? "bg-[#4A90E2]" : "bg-gray-200"} hover:${taken ? "" : "hover:cursor-pointer"} ${taken ? "" : "hover:bg-[#7ab8ff]"}`}
    ></div>
  );
};

export default FourSeatTable;
