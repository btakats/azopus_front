import { useEffect, useState } from "react";
export function HomePage(){
    
    const [alkotasLista, setAlkotasLista] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json")
        .then((res) => res.json())
        .then((alkotasLista) => setAlkotasLista(alkotasLista))
    }, []);

    return <div>
        <h2 className="font-circular font-bold tracking-wide text-sm sm:text-lg lg:text-xl">Alkotások</h2>
        {alkotasLista.map((alkotas) => (
            <span style={{width: "220px",  display: "inline-block", verticalAlign: "top", margin: "10px", textAlign: "left"}} key={alkotas.id}>
                <img src={"https://picsum.photos/220?random=" + alkotas.id} alt="random avatar" /><br />
                <div className="font-slab font-bold text-lg">{alkotas.keletkezesKezdoIdopontjaInt}</div>
                <div className="w-full text-sm">{alkotas.nev} ({alkotas.alkotasAzonosito})</div>
                <div className="text-sm uppercase hover:underline">{alkotas.megjelenitendoNev}</div>
                <div className="text-xs hover:underline">{alkotas.tipus}</div>
            </span>
            ))}
    </div>
}
