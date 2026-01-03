import ProjectCard from "@/components/ProjectCard";


export default function Home() {
    return (
        <main>
            <section className="hero">
                <h1>Alexandre Junior</h1>
                <p>Desenvolvedor em formação</p>
            </section>

            <section>
                <h2>Projetos</h2>
                <ProjectCard />
            </section>
        </main>
    );
}
