import RickMortyLogo from "../../assets/RickMortyLogo"
import Footer from "../../components/Footer"
import Header from "../../components/Header_characters"
import { NavLink } from 'react-router-dom'


export default function Home() {
    const bg_color = 'bg-[#c0df40]'
    document.querySelector('body').classList.add(`${bg_color}`, 'font-mono')
    //API: https://rickandmortyapi.com/
    return (
        <>
            <Header location={'Home'}>
                <RickMortyLogo Class={'w-3/4 h-auto mx-auto min-[550px]:w-1/2 min-[550px]:ml-[5%] min-[768px]:w-[30%] '} />
            </Header>

            <main className="w-full h-auto">
                <div className="w-full flex flex-col items-center gap-10 p-3">
                    
                    <div className="mt-10">
                        <h1 className="font-semibold text-base text-center">See Rick and Morty api cards<br/>(press the image)</h1>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                    </div>

                    <div className="w-full flex justify-center mb-10">

                        {/* <div className="flex items-center justify-center bg-slate-800 rounded-t-xl">
                            <h2 className="text-white">Rick and Morty Cards</h2>
                        </div> */}

                        <NavLink className='w-full' to={'/rick_and_morty/1'}>
                            <img className="w-3/5 max-w-[200px] h-auto rounded-xl mx-auto" src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg" alt="rick and morty picture" />
                        </NavLink>
                    </div>


                    
                </div>
            </main>

            <Footer bg_color={bg_color} />
        </>
    )
}
