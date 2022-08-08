import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} exact />
          <Route path="/newMeetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route
            path="*"
            element={
              <section className="text-center">
                <h1>There's nothing here!</h1>
              </section>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
