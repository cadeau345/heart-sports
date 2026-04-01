import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {

  return (

    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center px-10 py-4 bg-white shadow-md"
    >

      <h1 className="text-2xl font-bold text-red-600">
        HeartCare
      </h1>

      <div className="space-x-6">

        <Link to="/">Home</Link>

        <Link to="/heart">Heart</Link>

        <Link to="/diabetes">Diabetes</Link>

      </div>

    </motion.nav>

  );

}