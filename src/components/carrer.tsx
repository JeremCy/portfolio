import Link from "next/link";

export default function Carrer() {
    return (
        <div className="text-center space-y-6 p-4">
            <h1 className="text-4xl font-bold sm:text-6xl">Work</h1>
        <div id="carrer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:space-y-4">     
            <div className="text-left">
                <h2 className="text-2xl font-bold text-[#8DA7BE]">Ka2b Associate</h2>
                <p className="lg:text-xl italic">Junior Business inteligence Consultant / Web Develloper</p>
                <p className="text-sm">Date: Ongoing</p>
                <p>As a BI consultant, my work revolves around helping businesses harness the power of data for improved decision-making.<br/> I specialize in creating data-driven solutions, collaborating with diverse teams to decipher data complexities, and delivering actionable insights that drive organizational growth.<br/> My role combines technical prowess, business acumen, and effective communication to enable data-driven transformations within companies.</p>
            </div>
        </div>
        <h1 className="text-4xl font-bold sm:text-6xl">Project</h1> 
        <div id="carrer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center ">     
            <div className="text-left">
                <h2 className="text-2xl font-bold text-[#8DA7BE]">Fidecly</h2>
                <p className="lg:text-xl italic">Develloper full stack</p>
                <p className="text-sm">Status: finish</p>
                <p>Fidely have for goal to Revolutionize the shopping experience with an all-in-one loyalty application. Unlock the potential of targeted marketing campaigns and gain valuable insights through powerful analytics.</p>
                <Link href={"https://fidelcly.com"} className="font-bold underline text-[#8DA7BE]">See project</Link>
            </div>
            <div className="text-left">
                <h2 className="text-2xl font-bold text-[#8DA7BE]">Mon aide Appart</h2>
                <p className="lg:text-xl italic">Develloper full stack</p>
                <p className="text-sm">Status: abandoned</p>
                <p>Mon Aide Appart: Empowering students to navigate housing with ease. <br /> Our app's mission is to simplify your student living journey, from locating ideal accommodations to hassle-free rent management, ensuring you focus on what truly matters—your education.</p>
                <Link href={"https://www.youtube.com/watch?v=h0oyVZyoEPE&ab_channel=ETNA.io"} className="font-bold underline text-[#8DA7BE]">See project</Link>
            </div>
        </div>
        </div>
    )
}
