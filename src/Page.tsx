import { Square, Circle } from "./components/Geo";

export default function Page() {
    return (
        <div>
            <h1 className="font-bold text-2xl bg-black">Olá Mundo!</h1>
            <h2>Outro texto</h2>

            <Square />
            <Circle />
        </div>
    );
}