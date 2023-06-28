
export default function Footer({bg_color}) {
    const social_media = [{
        name_media: 'Twitter',
        url_icon: "https://img.icons8.com/color/48/twitter--v1.png",
        url_media: "https://twitter.com/pinjup_"
        },
        {
            name_media: 'Github',
            url_icon: "https://img.icons8.com/color/48/github--v1.png",
            url_media: "https://github.com/pinjup"
        },
        {
            name_media: 'Instagram',
            url_icon: "https://img.icons8.com/color/48/instagram-new--v1.png",
            url_media: "https://www.instagram.com/pinjup_"
        },
        
    ]
    return (
        <footer className="w-full h-auto">
            <div className={`bg-slate-800 text-white flex gap-10 w-full h-32 justify-center items-center`}>
                {social_media.map((element, index) => {
            
                    return (
                        <a key={index} href={element.url_media} target="_blank" rel="noreferrer">
                            <div className={`${bg_color} flex flex-col justify-center items-center w-16 rounded-full`}>
                                {/* <h3>{element.name_media}</h3> */}
                                <img src={element.url_icon} alt={element.name_media} className="w-14 h-14" />
                            </div>
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}
