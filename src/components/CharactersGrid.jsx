import { useContext, useReducer } from 'react'
import { ProContext } from './Context'
import { NavLink } from "react-router-dom"


export default function CharactersGrid({characters, text_color, class_button, bg_color, slug, loading}) {
    // const {
    //     characters, 
    // } = useContext(ProContext)
    //`mx-auto w-4/5 text-black active:${text_color} h-12 rounded-full active:bg-black ${bg_color} active:text-black`

    const {scrolled} = useContext(ProContext)

    if (slug) {
        document.getElementById(slug)?.scrollIntoView({ block: 'center', inline: 'center' })
        window.scrollTo(0, 0);
    }
    

    const pages = () => {
        const pageLinks = []
        
        for (let index = 1; index < 43; index++) {
            pageLinks.push(
                <li key={index} id={index} className='flex-shrink-0 bg-slate-800 h-16 w-16 rounded-lg text-center flex justify-center items-center'>
                    <NavLink className={({ isActive }) => `text-2xl ${isActive ? `${text_color}` : 'text-white'}`} to={`/rick_and_morty/${index}`}>{index}</NavLink>
                </li>
            )
        }

        return pageLinks
    }

    document.querySelector('body').classList.add(`${bg_color}`)
    return (
        <main>
            <div className={`grid grid-cols-[80%] min-[500px]:grid-cols-[45%_45%] min-[768px]:grid-cols-[30%_30%_30%] min-[1200px]:grid-cols-[22.5%_22.5%_22.5%_22.5%] min-[500px]:gap-x-0 justify-center text-center w-full gap-6 ${scrolled ? 'pt-20' : 'mt-5'} mb-5 ${bg_color}`}>
                {loading ? (
                <div>Cargando...</div>
                ) : (
                    characters?.map((character, index) => (
                        <div key={index} className="flex flex-col gap-3 justify-center w-[90%] mx-auto border border-solid border-black p-1 pb-3 bg-slate-800 font-mono rounded-xl">
                            <h2 className={`${text_color}`}>{character?.name}</h2>
                            <img src={character?.image} alt={character?.name} className='w-4/5 mx-auto rounded-3xl' />
                            <div className='mx-auto text-left w-4/5'>
                                <p className='self-start text-white'><span className={`${text_color}`}>Gender:</span> {character?.gender}</p>
                                <p className='self-start text-white'><span className={`${text_color}`}>Species:</span> {character?.species}</p>
                                <p className='self-start text-white'><span className={`${text_color}`}>Location:</span> {character?.location.name}</p>
                            </div>
                            {/* <button className={class_button}>Agregar a Favoritos</button> */}
                        </div>
                    ))
                )}
            </div>
            <div className='w-full'>
                <h3 className='text-center text-slate-800 font-semibold text-xl'>Pages</h3>
            </div>
            <div className=' overflow-x overflow-scroll snap-center w-full'>
                
                <ul className='w-full flex gap-1 p-3'>
                    {pages()}
                </ul>
            </div>
        </main>
    )
}
