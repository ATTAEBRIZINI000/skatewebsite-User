import { Culture, HeroBanner, Player, Sport } from "./views";
import { Footer, Navbar } from "./components";
function App() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <Sport/>
      <Culture/>
      <Player/>
      <Footer/>
    </>
  );
}

export default App;
