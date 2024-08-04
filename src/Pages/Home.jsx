import Headers from "../Components/layout/Headers/Headers";
import Nav from "../Components/layout/Navbar/Nav";
import SectionTrending from "../Components/layout/Section__Trending/Section__trending";
import s from './Home.module.scss'

const Home = () => {
  return (
    <div id={s.home}>
      <Nav/>
      <Headers/>
      <SectionTrending/>
    </div>
  );
};

export default Home;
