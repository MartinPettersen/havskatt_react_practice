type Props = {
  taken: boolean;
  selected: boolean;
  setSelectedTable: React.Dispatch<React.SetStateAction<string>>;
  tableId: string;

};

const FourSeatTable = ({ taken, selected, setSelectedTable,tableId }: Props) => {
  return (
    <div
      role="button"
      aria-label={
        taken ? "Bord Opptat" : selected ? "Bord valgt" : "Bord Ledig"
      }
      aria-pressed={selected}
      onClick={() => setSelectedTable(tableId)}

      className={`w-10 h-4 ${taken ? "bg-[#FF6F61]" : selected ? "bg-[#4A90E2]" : "bg-gray-200"} ${taken ? "" : "hover:cursor-pointer"} ${taken ? "" : "hover:bg-[#7ab8ff]"}`}
    ></div>
  );
};

export default FourSeatTable;
