function Search() {
  return (
    <div className="tw-w-full tw-pb-6">
      <input disabled type="search" className="tw-disabled:bg-gray-100 tw-rounded-l tw-border tw-border-blue-700 tw-py-1 tw-px-5" />
      <button disabled type="button" className=" tw-text-white tw-fill tw-rounded-r tw-border tw-bg-blue-700 tw-border-blue-700 tw-px-5 tw-py-1">Search</button>
    </div>
  );
}

export default Search;
