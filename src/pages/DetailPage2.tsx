import { useState, useEffect } from 'react';

const DetailPage2 = () => {
    const [ breeds, setBreeds ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.thedogapi.com/v1/breeds');
                const data = await response.json();
                setBreeds(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Dog Breeds</h2>
            <ul>
                {breeds.map((breed: any) => (
                    <li key={breed.id}>
                        <h3>{breed.name}</h3>
                        <p>{breed.origin}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DetailPage2;