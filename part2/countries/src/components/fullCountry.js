import Weather from "./weather"

const FullCountry = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <div><span>Capital(s): </span> 
                {
                    Object.keys(props.capital).map((key, index) => ( 
                        <span key={index}>{props.capital[key]} </span> 
                      ))
                }
            </div>
            <div>Population: {props.population}</div>
            <h2>Languages</h2>
            <ul>
                {
                    Object.keys(props.languages).map((key, index) => ( 
                        <li key={index}>{props.languages[key]}</li> 
                      ))
                }
            </ul>
            <img src={props.flag} />

            <h2>Weather Report</h2>
            <Weather lat={props.lat} long={props.long}/>

        </div>
    )
}

export default FullCountry