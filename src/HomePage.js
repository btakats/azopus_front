import { useEffect, useState } from "react";
export function HomePage(){
    const [alkotasLista, setAlkotasLista] = useState([]);

    useEffect(() => {
        
        fetch("https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json")
        .then((res) => res.json())
        .then((alkotasLista) => setAlkotasLista(alkotasLista))

    }, []);

    return <div style={{backgroundColor: "lightgray", margin: "10px", padding: "10px", textAlign: "center"}}>
        <h2>Alkotások</h2>
        {alkotasLista.map((alkotas) => (
            <span style={{width: "275px",  display: "inline-block", verticalAlign: "top", margin: "10px", textAlign: "left"}} key={alkotas.id}>
                <img src={"https://picsum.photos/275?random=" + alkotas.id} alt="random avatar" /><br />
                {alkotas.nev} ({alkotas.alkotasAzonosito})<br />
                {alkotas.keletkezesKezdoIdopontjaInt} - {alkotas.tipus}<br />
                {alkotas.megjelenitendoNev}<br />
            </span>
            ))}
    </div>
}

/*
<div class="flex flex-col gap-1 justify-start overflow-hidden flex-1">
    <div class="w-full aspect-square bg-image-load flex">
        <a class="min-w-full min-h-full bg-cover bg-center " href="/alkotas/AS0042019" style="background-image: url(&quot;/mma-portal/methods/imageRepository/getImage?key=kPKMwmXDvtGfRGsPadRzXaSTASmeGurgihiu9jxeOZEUzOrYa9&quot;);"></a>
    </div>
    <a class="w-full flex flex-col gap-1 mt-1 overflow-hidden " href="/alkotas/AS0042019">
        <div class="font-slab font-bold text-lg">2024</div>
        <div class="w-full text-sm">Mohácsi Nemzeti Emlékhely - Múzeum és kápolna</div>
    </a>
    <div class="flex flex-col gap-1">
        <a class="text-sm uppercase hover:underline" href="/alkoto/AL0000475">Vadász Bence</a>
        <a href="/kereses?kifejezes=Mohács&amp;mezo=telepules&amp;tipus=alkotas&amp;cim=Mohács">
            <div class="text-xs hover:underline">Mohács</div>
        </a>
    </div>
</div>
*/