// Import component ===============================================//
import manga from '../assets/images/manga_rr7.png';

// page HOME ======================================================//
const Home = () => {
    return (
        <>
            <p id="index-page">
                This is a demo for React Router.
                <br />
                Check out{" "}
                <a href="https://reactrouter.com">
                    the docs at reactrouter.com
                </a>
                .
            </p>
            <p id="mmanga">
                <img src={manga} alt="Red Rubbon" />
            </p>
        </>
    );
};
export default Home;
// ================================================================//