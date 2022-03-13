import { useContext } from "react"
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorites-context"


const FavoritesPage = () => {
    const favoriteCtx = useContext(FavoriteContext);

    let content;
    if (favoriteCtx.totalFavorites === 0) {
        content = <p>You don't have any favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }

    return (
        <section>
            <h1>FavoritesPage</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;