import {useState} from "react";
 
function Home () {
    const [formData, setFormData] = useState({
            species: '',
            timestamp: '',
            author: '',
            coordinates: '',
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:3010/sightings"
        fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(() => {
            setFormData({
            species: '',
            timestamp: '',
            author: '',
            coordinates: '',
            })
        })

    }
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    return (
    <div>
        <h1>Bird Sightings Page</h1>
        <p>
        Save your bird sightings using this form.
        </p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="species">Species:</label><br />
            <input type="text" id="species" name="species" value={formData.species} onChange={handleChange} /><br /><br />

            <label htmlFor="timestamp">Timestamp:</label><br />
            <input type="datetime-local" id="timestamp" name="timestamp" value={formData.timestamp} onChange={handleChange} /><br /><br />

            <label htmlFor="author">Author:</label><br />
            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange}/><br /><br />

            <label htmlFor="coordinates">Coordinates:</label><br />
            <input type="text" id="coordinates" name="coordinates" value={formData.coordinates} onChange={handleChange}/><br /><br />

            <input type="submit" value="Submit" />
        </form>
    </div>
);
}
 
export default Home;