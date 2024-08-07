// import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Designs from "./components/Designs.jsx";
import BuySell from "./components/BuySell.jsx";
import Blogs from "./components/Blogs.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
// import scrollreveal from "scrollreveal";
// import useEffect from "react";

export default function App() {
  // useEffect(() => {
  //   const registerAnimations = () => {
  //     const sr = scrollreveal({
  //       origin: "bottom",
  //       distance: "80px",
  //       duration: 2000,
  //       reset: true,
  //     });
  //     sr.reveal(
  //       ` nav,
  //         #home,
  //         #buySell1,
  //         #buySell2,
  //         #buySell3,
  //         #blogs,
  //         footer
  //     `,
  //       {
  //         opacity: 1,
  //         interval: 500,
  //       }
  //     );
  //   };
  //   registerAnimations();
  // }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);

  return (
    <div>
      <Navbar />
      <Home />
      <Designs />
      <BuySell />
      <Blogs />
      <Footer />
    </div>
  );
}
