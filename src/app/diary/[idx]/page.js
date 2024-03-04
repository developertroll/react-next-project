import Board from "../board";

export default function DiaryPage({ params: { idx } }) {
  return (
    <div>
      <h1>Page</h1>
      <p>Today I did a thing</p>
      <p>{idx}</p>
      <Board />
    </div>
  );
}
