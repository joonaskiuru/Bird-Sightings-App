import {useState, useEffect} from "react";
import "./sightings.css";
 
const Sightings = () => {
    const [data,setData] = useState([]);
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3010/sightings"
        fetch(url).then((response) => response.json()).then((response) => {
            setCategories(createCategories(response))
            setData(response)
        })
    },[])

    function createCategories (data) {
        let c = [];
        let a = data.map((x) => x.species)
        a = Array.from([...new Set(a)]);
        a.map((x) => {
            c.push({species: x, link: `http://localhost:3010/sightings?species=${x}` })
        })
        return c;
    }

    function getCategories(category) {
        const url = "http://localhost:3010/sightings" + category
        fetch(url).then((response) => response.json()).then((response) => {
            setData(response)
        })
    }

    return (
        <div>
            <h2>All Bird Sightings Here</h2>
            <p>See what birds have been sighted.</p>
            <div className="category-list">
                <ul>
                    <li><button onClick={() => getCategories("")} style={{backgroundColor: "#3081D0",color:"#F6EEE5"}}><strong>All</strong></button></li>
                    {categories.map((y,i) =>
                    <li key={i + y}><button onClick={() => getCategories("?species=" + y.species) }>{y.species}</button></li>
                )}</ul>
            </div>



            <div className="sighting-list"> <p>Species | Timestamp | Author | Location</p>
                <ul>{data.map((x,i) =>
                    <li className="sighting" key={i}><strong><i>{x.species}</i></strong> | {x.timestamp} | {x.author} | {x.coordinates}</li>
                )}</ul>
            </div>
        </div>
    );
}
 
export default Sightings;