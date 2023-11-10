import { Navlink } from "./Navlink";

const links = [
    {
        title: "Mixes",
        link: "#"
    },
    {
        title: "Music",
        link: "#"
    },
    {
        title: "Computer Programming",
        link: "#"
    },
    {
        title: "Comedy",
        link: "#"
    },
    {
        title: "international",
        link: "#"
    },
    {
        title: "Javascript",
        link: "#"
    },
    {
        title: "Gaming",
        link: "#"
    },
    {
        title: "Bigg Boss",
        link: "#"
    },
    {
        title: "Munawar Farruky",
        link: "#"
    },
    {
        title: "Allu Arjun",
        link: "#"
    },
    {
        title: "Shorts",
        link: "#"
    },
    {
        title: "Anime gg",
        link: "#"
    },
    {
        title: "Salman Khan",
        link: "#"
    },
]


export function QuickLinks() {
    return(
        <div className="flex">
            {links.map(link => {
                return(
                    <div>
                        <Navlink title={link.title} link={link.link}/>
                    </div>
                )
            })}
        </div>
    )
}