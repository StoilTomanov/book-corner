export const AboutContacts = () => {
    return (
        <div className='contacts'>
            <div className='map'>
                <a href='https://www.google.com/maps/@40.705942,-74.0162614,14.29z' target='_blank' rel='noreferrer'><img src="./assets/maps.png" alt="Location" /></a>
            </div>
            <div className="address">
                <p>
                    Headquarter: 5th Avenue, NewYork, NY, USA
                </p>
                <p>
                    Storage: 6th Avenue, Boston, MS, USA
                </p>
                <p>
                    +1 333 1234567
                </p>
                <p>
                    Working time: Every day!
                </p>
                <p>
                    Email: book-corner@book.com
                </p>
            </div>
        </div>
    );
}