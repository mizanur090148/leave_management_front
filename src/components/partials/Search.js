function Search({ setSearchKey }) {

  return (
      <div>
         <input className="form-control" type="text" placeholder="search" onChange={(e)=>setSearchKey(e.target.value)} />
      </div>
  )
}

export default Search;