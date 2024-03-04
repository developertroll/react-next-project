import Card from "../../../components/card";

export default function Board() {
  return (
    <div>
      <h1>Board</h1>
      <p>Today I did a thing</p>
      <div className="flex flex-wrap justify-center">
        <Card title="제목1" content="내용" />
      </div>
    </div>
  );
}
