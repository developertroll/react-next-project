import Boards from "../../../components/board";

const data = [
  {
    idx: 1,
    title: "제목1",
    date: "2021-10-01",
  },
  {
    idx: 2,
    title: "제목2",
    date: "2021-10-02",
  },
  {
    idx: 3,
    title: "제목3",
    date: "2021-10-03",
  },
  {
    idx: 4,
    title: "제목4",
    date: "2021-10-04",
  },
];
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is a blog about my development journey.</p>
      {data.map((item, index) => (
        <Boards
          key={index}
          idx={item.idx}
          title={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
}
