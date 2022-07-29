import { CareerIntro } from "./CareerIntro/CareerIntro";
import { Position } from "./Position/Position";

export const Careers = () => {
    return (
        <section className="careers-section">
            <CareerIntro />
            <div className="open-positions">
                <Position />
                <Position />
                <Position />
            </div>
        </section>
    );
}