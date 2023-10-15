import { useEffect, useState} from 'react'

export default function Countries(){
    const [country, setCountries] = useState([]);
    const [code, setCodes] = useState([])
    useEffect(() => {
        fetch('https://api.first.org/data/v1/countries')
        .then((res)=> res.json())
        .then((data) =>{
           const countryList = ((data(data)).value()).map((item) => {
                return(item.country)
            });
           console.log(data)
           console.log(countryList)
            // setCountries(countryList);
            // setCodes(data(data).keys());
        })
    }, [])
    return(
        <div>
            {country[0]}
            {code[0]}
        </div>
    )
}