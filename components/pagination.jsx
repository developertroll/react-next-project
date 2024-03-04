export default function Pagination(props) {
  const { page, setPage } = props;
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  return (
    <div className="flex justify-center">
      <button className="bg-balance text-white font-bold py-2 px-4 rounded-l">
        Prev
      </button>
      <p className="py-2 px-4">{page}</p>
      <button className="bg-balance text-white font-bold py-2 px-4 rounded-r">
        Next
      </button>
    </div>
  );
}
