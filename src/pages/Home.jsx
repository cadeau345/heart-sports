import heroImage from "../assets/hero.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home(){

return(

<div className="min-h-screen bg-red-50 flex flex-col items-center p-4 md:p-10">


{/* DESIGN CREDIT */}

<div className="w-full text-center mb-4">

<p className="text-gray-700 text-sm md:text-base">

Design by <span className="font-bold text-red-600">Abdallah Ramadan</span>

</p>

<a
href="https://wa.me/201034022992"
target="_blank"
rel="noopener noreferrer"
className="text-green-600 font-semibold hover:underline"
>

📞 Contact on WhatsApp

</a>

</div>



{/* BANNER SECTION */}

<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">


<div className="text-center">

<motion.img
src={banner1}
initial={{opacity:0, y:-30}}
animate={{opacity:1, y:0}}
transition={{duration:0.6}}
className="w-full h-[180px] md:h-[260px] object-cover rounded-2xl shadow-lg"
/>
<p className="mt-2 font-medium text-gray-700">

Mahmoud nasser

</p>

</div>


<div className="text-center">

<motion.img
src={banner2}
initial={{opacity:0, y:-30}}
animate={{opacity:1, y:0}}
transition={{duration:0.6, delay:0.2}}
className="w-full h-[200px] md:h-[260px] object-cover object-top rounded-2xl shadow-lg"
/>

<p className="mt-2 font-medium text-gray-700">

Zakaria Abdelrahman

</p>

</div>


</div>



{/* PROJECT CARD */}

<motion.div
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
className="bg-white shadow-xl rounded-2xl p-6 md:p-8 text-center max-w-2xl w-full"
>

<h1 className="text-2xl md:text-4xl font-bold text-red-600">

Heart & Diabetes Awareness System

</h1>

<p className="mt-4 text-base md:text-lg">

Prepared by: Mahmoud Nasser  &
Zakaria Abdelrahman

</p>

<p className="text-base md:text-lg">

Under supervision of: Dr. Esraa El-Baghdadi

</p>

<p className="mt-2 text-gray-600">

QENA University

</p>

<p className="text-gray-600">

Department of Physical Education

</p>

<p className="text-gray-600">

Academic Year: 2026

</p>

</motion.div>



{/* HERO IMAGE */}

<motion.img
src={heroImage}
initial={{scale:.8}}
animate={{scale:1}}
transition={{duration:0.6}}
className="w-56 md:w-80 rounded-2xl shadow-xl mt-8"
/>



{/* NAVIGATION BUTTONS */}

<div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8">

<Link
to="/heart"
className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition text-center"
>

صفحة القلب

</Link>


<Link
to="/diabetes"
className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition text-center"
>

صفحة السكري

</Link>


</div>


</div>

)

}