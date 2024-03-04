"use client";

export default function Boards(props) {
  const onclick = (idx, title, date) => {
    console.log("clicked", idx, title, date);
  };
  const { idx, title, date } = props;
  return (
    <div
      className={`flex justify-center hover:cursor-pointer bg-gray-${
        idx % 2 === 0 ? 100 : 200
      }`}
      onClick={() => onclick(idx, title, date)}
    >
      <div className="w-1/3 p-4 border border-gray-300 rounded-lg m-4 flex justify-between">
        <p className="text-2xl font-bold">{title}</p>
        <p>{date}</p>
        <p>{idx}</p>
      </div>
    </div>
  );
}
