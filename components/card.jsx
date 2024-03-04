export default function Card(props) {
  const { title, content } = props;
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-4/5">
      <h2 className="text-2xl font-bold">{title ? title : "프롭없음!!"}</h2>
      <p className="text-gray-600 p-3">{content ? content : "내용없음!!"}</p>
    </div>
  );
}
