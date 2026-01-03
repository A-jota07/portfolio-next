export async function POST(req) {
    const body = await req.json();

    console.log("Mensagem recebida:", body);

    return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
    );
}
