import { motion } from "framer-motion";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5 }}
  >
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
    </motion.div>
    </>
  );
};

export default Home;
