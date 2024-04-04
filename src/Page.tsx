import { GeoForm } from "./components/GeoForm";
import { Person } from "./components/Person";

export default function Page() {
    return (
        <div>
            <h1 className="font-bold text-2xl bg-black">Olá Mundo!</h1>
            <h2>Outro texto</h2>

            <GeoForm />
            <Person />
        </div>
    );
}