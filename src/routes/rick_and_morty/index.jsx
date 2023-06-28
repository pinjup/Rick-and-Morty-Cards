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

                <NavLink to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </NavLink>
    
            </Header>

            <CharactersGrid characters={characters.RickMorty} text_color={text_color} bg_color={bg_color} class_button={class_button} slug={slug} loading={loading.RickMorty}/>

            <Footer bg_color={bg_color} />
        </>
    )
}
