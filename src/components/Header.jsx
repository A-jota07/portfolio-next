import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">Início</Link>
                <Link href="/projects">Projetos</Link>
                <Link href="/contact">Contato</Link>
            </nav>
        </header>
    );
}
