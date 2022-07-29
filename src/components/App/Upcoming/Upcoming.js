import { UpcomingBookItem } from "./UpcomingBookItem/UpcomingBookItem";

export const Upcoming = () => {
    return (
        <section className="upcoming-page">
            <div className="upcoming-container">
                <ol className="upcoming-list">
                    {/* Iterate through list */}
                    <UpcomingBookItem />
                    <UpcomingBookItem />
                    <UpcomingBookItem />
                    <UpcomingBookItem />
                </ol>
            </div>
        </section>
    );
}