export const metadata = {
    title: "Alexandre Junior | Portfólio",
    description: "Portfólio pessoal de desenvolvedor"
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}
