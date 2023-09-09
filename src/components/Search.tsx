function Search() {
  return (
    <div className="col-span-12 w-full pb-6">
      <input
        disabled
        type="search"
        className="disabled:bg-gray-100 rounded-l border border-blue-700 py-1 px-5"
      />
      <button
        disabled
        type="button"
        className=" text-white fill rounded-r border bg-blue-700 border-blue-700 px-5 py-1"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
