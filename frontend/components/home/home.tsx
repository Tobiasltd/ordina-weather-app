import HomeCard from "./home-card/home-card";
import HomeDisplay from "./home-display/home-display";
import HomeSearch from "./home-search/home-search";

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg)",
      }}
    >
      <div className="max-w-[1000px] mx-auto p-[2rem] pb-[4rem] flex flex-col justify-between h-full">
        <header className="w-100 flex justify-center">
          <HomeSearch />
        </header>
        <main>
          <HomeDisplay />
        </main>
        <footer>
          <HomeCard />
        </footer>
      </div>
    </div>
  );
}

export default Home;
