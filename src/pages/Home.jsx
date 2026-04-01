import heroImage from "../assets/hero.jpg";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Home(){

return(

<div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-10">


{/* PROJECT COVER CARD */}

<motion.div

initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}

className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-2xl"

>

<h1 className="text-4xl font-bold text-red-600">

Heart & Diabetes Awareness System

</h1>

<p className="mt-4 text-lg">

Prepared by: Mahmoud Nasser

</p>

<p className="text-lg">

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

className="w-80 rounded-2xl shadow-xl mt-8"

/>


{/* NAVIGATION BUTTONS */}

<div className="flex gap-6 mt-8">

<Link

to="/heart"

className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition"

>

صفحة القلب

</Link>

<Link

to="/diabetes"

className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition"

>

صفحة السكري

</Link>

</div>


</div>

)

}