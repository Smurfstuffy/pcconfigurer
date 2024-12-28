
const Pagination = ({ page, setPage, totalPages }) => {

  // 1 2 3 4 58 -- case: 1 2
  // 1 55 56 57 58 case: 499
  // 1 ... 499 case: default

  // 1 24 25 26 58

  // 1 2 3 4 5 = 5 -- pages or less
  // 1 2 3 4 6
  // 1 3 4 5 6

  let pages = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (page <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i);
      }
      pages.push(totalPages);
    } else if (page >= totalPages - 2) {
      pages.push(1);
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      for (let i = page - 1; i <= page + 1; i++) {
        pages.push(i);
      }
      pages.push(totalPages);
    }
  }

  return (
    <div className="flex justify-center gap-x-4 mb-4">
      {pages.map((p, index) =>
        <button key={index}
          className={`${page === p ? "primary-button px-3" : "primary-button-outline px-3"}`}
          onClick={() => setPage(p)}>
          {p}
        </button>
      )}
    </div>
  )
}

export default Pagination