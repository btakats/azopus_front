import { useEffect, useState } from "react";
export function HomePage(){
    // cors-policy miatt nem megy a beolvasás, ami fura, mert a böngésző vissazadja a resource-t
    // ehelyett helyi fájlból vagy konstanssal oldom meg a formázást
        
        /*const [alkotasLista, setAlkotasLista] = useState([]);

    useEffect(() => {
        
        fetch("https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json", { credentials: "include" })
        .then((res) => res.json())
        .then((alkotasLista) => setAlkotasLista(alkotasLista))

    }, []);
 */
    const alkotasLista = [{"id":40367,"nev":"Mohácsi Nemzeti Emlékhely - Múzeum és kápolna","nevEn":null,"alkotasAzonosito":"AS0042019","keletkezesIdopontjaInt":null,"keletkezesIdopontjaDate":null,"keletkezesIdopontjaLabel":null,"keletkezesIdopontjaType":null,"keletkezesKezdoIdopontjaInt":2024,"keletkezesKezdoIdopontjaDate":"2024-11-13T08:15:07.451+01:00","keletkezesKezdoIdopontjaLabel":"2024","keletkezesKezdoIdopontjaType":"yyyy","tipus":"Építőművészet","rendezesiAzonosito":null,"fokep":"kPKMwmXDvtGfRGsPadRzXaSTASmeGurgihiu9jxeOZEUzOrYa9","alkotoId":469,"alkotoAzonosito":"AL0000475","alkotoMMAID":"MMA111475","megjelenitendoNev":"Vadász Bence","megjelenitendoNevEn":"Bence Vadász","telepules":"Mohács","koordinatak":null,"hivatkozas":null,"attributumok":null,"label":"2024"},{"id":40079,"nev":"Családi ház","nevEn":null,"alkotasAzonosito":"AS0042008","keletkezesIdopontjaInt":null,"keletkezesIdopontjaDate":null,"keletkezesIdopontjaLabel":null,"keletkezesIdopontjaType":null,"keletkezesKezdoIdopontjaInt":2024,"keletkezesKezdoIdopontjaDate":"2024-10-10T20:40:59.348+02:00","keletkezesKezdoIdopontjaLabel":"2024","keletkezesKezdoIdopontjaType":"yyyy","tipus":"Építőművészet","rendezesiAzonosito":null,"fokep":"7qbeAC6lwa4LIo4YeZ580gC6qAaEXcidrgbJGyRVz0NSefQGuh","alkotoId":442,"alkotoAzonosito":"AL0000471","alkotoMMAID":"MMA30013","megjelenitendoNev":"Turi Attila","megjelenitendoNevEn":"Attila Turi","telepules":"Pilisszentlászló","koordinatak":null,"hivatkozas":null,"attributumok":null,"label":"2024"},{"id":40078,"nev":"12 lakásos társasház","nevEn":null,"alkotasAzonosito":"AS0042012","keletkezesIdopontjaInt":null,"keletkezesIdopontjaDate":null,"keletkezesIdopontjaLabel":null,"keletkezesIdopontjaType":null,"keletkezesKezdoIdopontjaInt":2024,"keletkezesKezdoIdopontjaDate":"2024-10-10T20:26:32.414+02:00","keletkezesKezdoIdopontjaLabel":"2024","keletkezesKezdoIdopontjaType":"yyyy","tipus":"Építőművészet","rendezesiAzonosito":null,"fokep":"yg7itEmzPbDCp9OevFs4KAIjDa0D4YjmLRu0F4XRVXg4HW5ibb","alkotoId":442,"alkotoAzonosito":"AL0000471","alkotoMMAID":"MMA30013","megjelenitendoNev":"Turi Attila","megjelenitendoNevEn":"Attila Turi","telepules":"Budapest","koordinatak":null,"hivatkozas":null,"attributumok":null,"label":"2024"},{"id":30508,"nev":"Családi villa","nevEn":null,"alkotasAzonosito":"AS0029801","keletkezesIdopontjaInt":null,"keletkezesIdopontjaDate":null,"keletkezesIdopontjaLabel":null,"keletkezesIdopontjaType":null,"keletkezesKezdoIdopontjaInt":2024,"keletkezesKezdoIdopontjaDate":"2024-07-01T00:16:20.000+02:00","keletkezesKezdoIdopontjaLabel":"2024","keletkezesKezdoIdopontjaType":"yyyy","tipus":"Építőművészet","rendezesiAzonosito":null,"fokep":null,"alkotoId":469,"alkotoAzonosito":"AL0000475","alkotoMMAID":"MMA111475","megjelenitendoNev":"Vadász Bence","megjelenitendoNevEn":"Bence Vadász","telepules":"Budapest","koordinatak":"47.50476971881905, 19.03464159791658","hivatkozas":null,"attributumok":null,"label":"2024"}];
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