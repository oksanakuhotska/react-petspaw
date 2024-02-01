const SortTableBreeds = ({
  breeds,
  selectedBreed,
  setSelectedBreed,
  sortOrder,
  setSortOrder,
  count,
  setCount,
  handleSortAZ,
  handleSortZA,
  children,
}) => {
  return (
		<>
      {breeds && breeds.length > 0 && (
        <div>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.name}>
              {breed.name}
            </option>
          ))}
        </select>

        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <button onClick={handleSortAZ}>A-Z</button>
        <button onClick={handleSortZA}>Z-A</button>
      </div>
      )}
      {children}
    </>

  );
};

export default SortTableBreeds;
