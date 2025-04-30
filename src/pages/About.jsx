function About() {
    const languagesAndFrameworks = [
        { rank: "SS",name: "JavaScript", icon: "/src/assets/icons/javascript.png" },
        { rank: "A",name: "CSS", icon: "/src/assets/icons/css.png" },
        { rank: "S",name: "HTML", icon: "/src/assets/icons/html.png" },
        { rank: "A",name: "TailwindCSS", icon: "/src/assets/icons/tailwind.png" },
        { rank: "B",name: "PHP", icon: "/src/assets/icons/php.png" },
        { rank: "S",name: "React", icon: "/src/assets/icons/react.png" },
    ];

    return (
        <div className="main-content flex items-center">
            <div className="flex-1">
                <h1 className="text-4xl font-bold">About Me</h1>
                <p>
                    Hi! I’m a student at the beginning of my web development journey, and I’m excited to keep learning
                    and building.
                </p>
                <p className="mt-2">
                    I was born in Suriname and moved to the Netherlands to study. I’ve lived in several different
                    countries, which has shaped my perspective and creativity.
                </p>
                <p className="mt-2">
                    I’m passionate about design and a master at doodling my time away. I’ve worked on a bunch of fun
                    school projects so far, and what I enjoy most is crafting user experiences that are seamless,
                    exciting, and visually appealing.
                </p>
                <p className="mt-2">
                    My journey in web development has been exciting, and I'm always eager to learn new skills and
                    improve my craft.
                </p>
                <p className="mt-2">
                    My journey in web development has been exciting, and I'm
                    always eager to learn new skills and improve my craft.
                </p>
            </div>
            <div className="flex-1">
                <div className="flex flex-col items-end space-y-4 my-4">

                    {languagesAndFrameworks.map((item, index) => (
                        <div key={index} className="codenames">
                            {/*<div className="pop-up text-4xl font-kht">{item.rank}</div>*/}
                            <div className="text-center flex-1">{item.name}</div>
                            <img src={item.icon} alt={item.name} className="w-10 h-10"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;