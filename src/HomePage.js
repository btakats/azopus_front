import { useEffect, useState } from "react";
export function HomePage(){
    const [alkotasLista, setAlkotasLista] = useState([]);

    useEffect(() => {
        
        fetch("https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json")
        .then((res) => res.json())
        .then((alkotasLista) => setAlkotasLista(alkotasLista))

    }, []);

    return <div>
        <h2>Alkotások:</h2>
        <ul>
            {alkotasLista.map((alkotas) => (
                <li key={alkotas.id}>
                    {alkotas.nev}<br />
                    {alkotas.alkotasAzonosito}<br />
                    {alkotas.keletkezesKezdoIdopontjaInt}<br />
                    {alkotas.tipus}<br />
                    {alkotas.megjelenitendoNev}<br />
                </li>
            ))}
        </ul>
    </div>
}