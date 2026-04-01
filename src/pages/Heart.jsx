import heartImage from "../assets/heart.jpg";

import BMI from "../components/BMI";
import HeartChart from "../components/HeartChart";
import RiskIndicator from "../components/RiskIndicator";

import { motion } from "framer-motion";
import { useEffect } from "react";

import { speakArabic, stopSpeech } from "../speakArabic";

import heartData from "../data/heartData";

import Card from "../components/Card";


export default function Heart() {


// نحول كل البيانات لنص واحد للصوت

const text = Object.values(heartData).join(" ");


// تشغيل الصوت تلقائي

useEffect(() => {

speakArabic(text);

return () => stopSpeech();

}, []);



return (

<div className="bg-red-50 min-h-screen p-10">


{/* HEADER */}

<motion.h1

initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}

className="text-4xl font-bold text-red-600 mb-8"

>

صحة القلب والنشاط الرياضي

</motion.h1>



{/* HERO SECTION */}

<div className="grid lg:grid-cols-2 gap-8 items-center mb-10">


{/* صورة القلب */}

<motion.img

src={heartImage}
initial={{scale:.8}}
animate={{scale:1}}

className="rounded-2xl shadow-xl"

/>



{/* النص + زر إيقاف الصوت */}

<div>

<p className="text-lg leading-9 whitespace-pre-line">

{text}

</p>

<button

onClick={stopSpeech}

className="mt-4 bg-black text-white px-5 py-2 rounded-xl"

>

إيقاف الصوت

</button>

</div>

</div>



{/* CARDS SECTION */}

<div className="grid lg:grid-cols-2 gap-8 mb-10">

<Card title="تعريف القلب" text={heartData.intro} />

<Card title="الأسباب" text={heartData.causes} />

<Card title="الأعراض" text={heartData.symptoms} />

<Card title="عوامل الخطر" text={heartData.riskFactors} />

<Card title="فوائد الرياضة" text={heartData.exerciseBenefits} />

<Card title="النظام الغذائي" text={heartData.diet} />

<Card title="الوقاية" text={heartData.prevention} />

<Card title="المضاعفات" text={heartData.complications} />

<Card title="نصائح يومية" text={heartData.dailyTips} />

</div>



{/* DASHBOARD SECTION */}

<div className="grid lg:grid-cols-2 gap-8">

<BMI/>

<HeartChart/>

<RiskIndicator/>

<div className="bg-white rounded-2xl shadow-xl p-6">

<h2 className="text-xl font-bold mb-3">

نصائح لتحسين صحة القلب

</h2>

<ul className="space-y-2">

<li>المشي يومياً لمدة 30 دقيقة</li>
<li>تقليل الدهون المشبعة</li>
<li>تناول الخضروات والفواكه</li>
<li>شرب كمية كافية من الماء</li>
<li>تقليل التوتر والضغط النفسي</li>

</ul>

</div>

</div>


</div>

);

}