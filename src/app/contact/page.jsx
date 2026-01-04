'use client'

import { useState } from "react";
import styles from './page.module.css'

export default function Contact() {
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        setStatus(res.ok ? "Mensagem enviada!" : "Erro ao enviar");
    }

    return (
        <section className={styles.container}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <h1>Entre em contato</h1>
                <p>Vamos conversar sobre oportunidades e projetos.</p>

                <input placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Mensagem" required />

                <button type="submit">Enviar mensagem</button>
            </form>
        </section>
    )
}
