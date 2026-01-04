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
            <h1>Contato</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input name="name" placeholder="Nome" required />
                <input name="email" type="email" placeholder="Email" required />
                <textarea name="message" placeholder="Mensagem" required />
                <button type="submit">Enviar</button>
            </form>

            {status && <p>{status}</p>}
        </section>
    );
}
