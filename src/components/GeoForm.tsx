import { Circle } from "./Circle";
import { Square } from "./Square";

export const GeoForm = () => {    
    return (
        <div>
            <h1 className="text-2xl font-bold">Formas geomatricas</h1>

            <Square />
            <Circle />
        </div>
    );
};