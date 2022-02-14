const Search = ({label, value, onChange}) => {
    return (
    <div>{label}: <input value={value} onChange={onChange} /></div>
    )
}

export default Search