import React, {useState} from 'react';
import useStore from './store';
import './SwapiComponent.css';

const SwapiComponent = () => {
    const [url, setUrl] = useState(`https://swapi.py4e.com/api/people/1`);
    const {data, loading, error, fetchData, clearData} = useStore();

    const handleFetchData = () => {
        fetchData(url);
    }

    return(
        <div className='container'>
            <h1>SWAPI</h1>
            <input
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleFetchData}>Get info</button>
            <button onClick={clearData} className='creal-btn'>Clear</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default SwapiComponent;