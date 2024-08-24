function Search() {
  return (
    <div className="col-span-12 w-full pb-6">
      <input
        disabled
        type="search"
        className="rounded-l border border-blue-700 px-5 py-1 disabled:bg-gray-100"
      />
      <button
        disabled
        type="button"
        className="fill rounded-r border border-blue-700 bg-blue-700 px-5 py-1 text-white"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
