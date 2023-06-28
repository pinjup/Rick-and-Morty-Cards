import CharactersGrid from '../../components/CharactersGrid'
import { useContext } from 'react'
import { ProContext } from '../../components/Context'
import Header from '../../components/Header_characters'
import RickMortyLogo from '../../assets/RickMortyLogo'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import Footer from '../../components/Footer'
Footer
export default function Rick_and_morty() {
    const {characters, setNumberPageRickMorty, loading} = useContext(ProContext)
    const text_color = 'text-[#c0df40]'
    const class_button='mx-auto w-4/5 text-black  h-12 rounded-full active:bg-black active:text-[#c0df40] bg-[#c0df40]'
    const bg_color = 'bg-[#c0df40]'

    const { slug } = useParams()
    const navigate = useNavigate()

    if (slug == undefined) {
        setNumberPageRickMorty(1)
        navigate('/rick_and_morty/1')
    } else if (slug <= 42 ) {
        setNumberPageRickMorty(slug)
    } else {
        navigate('/rick_and_morty/42')
    }

    return (
        <>
            <Header>
                <NavLink to={'/rick_and_morty/1'} className='w-full h-auto'>
                    <RickMortyLogo Class={'w-3/4 h-auto mx-auto min-[550px]:w-1/2 min-[550px]:ml-[5%] min-[768px]:w-[30%] '} />
                </NavLink>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Header>

            <CharactersGrid characters={characters.RickMorty} text_color={text_color} bg_color={bg_color} class_button={class_button} slug={slug} loading={loading.RickMorty}/>

            <Footer bg_color={bg_color} />
        </>
    )
}
