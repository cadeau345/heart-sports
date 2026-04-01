import { motion } from "framer-motion";
import { speakArabic } from "../speakArabic";

export default function Card({ title, text }) {

return(

<motion.div

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}

className="bg-white rounded-2xl shadow-xl p-6"

>

<h2 className="text-xl font-bold mb-3">

{title}

</h2>

<p className="leading-8 whitespace-pre-line">

{text}

</p>

<button

onClick={()=>speakArabic(text)}

className="mt-4 bg-red-500 text-white px-4 py-2 rounded"

>

تشغيل الصوت

</button>

</motion.div>

)

}