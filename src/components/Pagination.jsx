const Pagination = ({ onNext, onPrev, pagination }) => {
  const { next, prev } = pagination;

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-4">
        <button
          className={`btn ${
            prev === null ? "btn-secondary disabled" : "btn-warning"
          } me-2`}
          onClick={prev === null ? null : onPrev}
          disabled={prev === null}
        >
          Anterior
        </button>
        <button
          className={`btn ${
            next === null ? "btn-secondary disabled" : "btn-success"
          } me-2`}
          onClick={next === null ? null : onNext}
          disabled={next === null}
        >
          Siguiente
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
