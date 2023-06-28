
import { createContext, useState, useEffect } from "react"

const ProContext = createContext()


function ProContextProvider({children}) {

    const pokemonlinks = [];

    for (let pageNumber = 1; pageNumber <= 65; pageNumber++) {
        const linkNumber = (pageNumber - 1) * 20;
        pokemonlinks.push({ PageNumber: pageNumber, LinkNumber: linkNumber });
    }




    const [loading, setLoading] = useState({
        RickMorty: true,
        Pokemon: true
    })

    const [numberPageRickMorty, setNumberPageRickMorty] = useState(1)

    // Add or set Rick and Morty API's characters
    const [characters, setCharacters] = useState({
        RickMorty: [],
        Pokemon: []
    })

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 0);
    };
    window.addEventListener('scroll', handleScroll);
    

    // useEffect(() => {
        
        
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    
    
    
    const FetchPages = (numberPage, propName) => {
        useEffect(() => {
            fetch(`https://rickandmortyapi.com/api/character?page=${numberPage}`)
            .then(response => response.json())
            .then(data => setCharacters(prevState => ({...prevState, [propName]: data.results})))
            // .then(data => setCharactersRickMorty((prevArray) => [prevArray, data.results].flat()))
            // setCharactersRickMorty(Object.values(charactersRickMorty))
            setLoading(prevState => ({...prevState, [propName]: false}))
        }, [numberPage, propName])
    }
    // .then(data => setCharacters(prevState => ({...prevState, [propName]: data.results})))
    FetchPages(numberPageRickMorty, 'RickMorty')

    return (
        <ProContext.Provider 
        value={{
            characters,
            scrolled,
            loading,
            setNumberPageRickMorty
        }}
        >
            {children}
        </ProContext.Provider>
    )
}

export {ProContextProvider, ProContext}