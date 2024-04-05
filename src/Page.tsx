import { Card } from "./components/Card";


export default function Page() {
    return (
        <div>
            <h1 className="font-bold text-2xl bg-black">Olá Mundo!</h1>
            <h2>Outro texto</h2>

            <Card>
                <div>
                    <h3>"Frase de efeito"</h3>
                    <p>Autor desconhecido</p>
                </div>
            </Card>
        </div>
    );
}