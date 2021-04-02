function Search(props) {
    return (
        <div >
            <form style={{textAlign: "center", margin: "15px"}}>
                <input
                    style={{marginRight: "10px", width: "40%"}}
                    onChange={props.inputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Please enter role filter"
                    id="search"
                />
                <button 
                    onClick={props.formSubmit} 
                    className="btn btn-primary"
                    >Search
                </button>
                <button 
                    onClick={props.reset} 
                    className="btn btn-warning" 
                    style={{marginLeft:"5px"}}
                    >Reset
                </button>
            </form>
        </div>
    );
  }
  
export default Search;