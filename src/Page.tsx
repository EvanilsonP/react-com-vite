import { GeoForm } from "./components/GeoForm";
import { Person } from "./components/Person";

export default function Page() {
    return (
        <div>
            <h1 className="font-bold text-2xl bg-black">Olá Mundo!</h1>
            <h2>Outro texto</h2>

            <GeoForm />
            <Person 
                name="Elon Musk"
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHMB5ECYwHvgPcVehN-eLB6BGl3Nif2u15A9D1Qv9CA&s"
                roles={["CEO da SpaceX", "CEO da Tesla"]}
            />
        </div>
    );
}