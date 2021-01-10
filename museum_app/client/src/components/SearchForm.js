const SearchForm = (({onUserInput}) => {
    
    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput)
    }

    return (
        <>
    <span>
        Search Artist/Title/Date: 
    </span>
    <input type="text" placeholder="search..." onChange={handleFilterInput}/>
        </>
    )
}); 

export default SearchForm;