const SearchForm = (({onUserInput}) => {
    
    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput)
    }

    return (
       <div className="searchForm">
            <span>Search Artist/Title/Date: </span>
            <input type="text" placeholder="search..." onChange={handleFilterInput}/>
        </div>
    )
}); 

export default SearchForm;