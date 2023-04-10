import { useState, useEffect } from "react";
import { url } from "../../Utills/fetch-data/fetchData.utills";

const CatsDirectory = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch(url, {
      headers: {
        "x-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
    })
  .then(response => response.json())
  .then(data => setCats(data))
  .catch(error => console.log(error))

  }, [])

  return (
    <div>
      {cats.map((cats) => {
        return (
          
        <div>
           <img src="" alt="" /> 
        
        </div>
        )
      })}
    </div>
  )
}

export default CatsDirectory;