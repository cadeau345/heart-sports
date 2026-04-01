import diabetesImage from "../assets/diabetes.jpg";

import BMI from "../components/BMI";
import DiabetesRisk from "../components/DiabetesRisk";
import SugarChart from "../components/SugarChart";

import { motion } from "framer-motion";
import { useEffect } from "react";

import { speakArabic, stopSpeech } from "../speakArabic";

import diabetesData from "../data/diabetesData";
import Card from "../components/Card";
import SugarAnalyzer from "../components/SugarAnalyzer";
import HealthSummary from "../components/HealthSummary";


export default function Diabetes() {


// تحويل كل sections إلى نص واحد للصوت

const text = Object.values(diabetesData).join(" ");


// تشغيل الصوت تلقائياً

useEffect(() => {

speakArabic(text);

return () => stopSpeech();

}, []);



return (

<div className="bg-green-50 min-h-screen p-10">


{/* HEADER */}

<motion.h1

initial={{opacity:0}}
animate={{opacity:1}}

className="text-4xl font-bold text-green-600 mb-8"

>

مرض السكري والنشاط البدني

</motion.h1>



{/* HERO SECTION */}

<div className="grid lg:grid-cols-2 gap-8 items-center mb-10">


{/* صورة السكري */}

<motion.img

src={diabetesImage}
initial={{scale:.8}}
animate={{scale:1}}

className="rounded-2xl shadow-xl"

/>



{/* النص الكامل + زر إيقاف الصوت */}

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

<Card title="تعريف السكري" text={diabetesData.intro} />

<Card title="الأسباب" text={diabetesData.causes} />

<Card title="الأعراض" text={diabetesData.symptoms} />

<Card title="عوامل الخطر" text={diabetesData.riskFactors} />

<Card title="دور الرياضة" text={diabetesData.exerciseBenefits} />

<Card title="النظام الغذائي" text={diabetesData.diet} />

<Card title="الوقاية" text={diabetesData.prevention} />

<Card title="المضاعفات" text={diabetesData.complications} />

<Card title="نصائح يومية" text={diabetesData.dailyTips} />

</div>



{/* DASHBOARD SECTION */}

<div className="grid lg:grid-cols-2 gap-8">


<BMI/>

<DiabetesRisk/>

<SugarChart/>
<SugarAnalyzer/>
<HealthSummary/>


<div className="bg-white rounded-2xl shadow-xl p-6">

<h2 className="text-xl font-bold mb-3">

نصائح إضافية لمرضى السكري

</h2>

<ul className="space-y-2">

<li>ممارسة الرياضة يومياً</li>
<li>تقليل السكر الأبيض</li>
<li>متابعة مستوى السكر باستمرار</li>
<li>شرب الماء بكميات كافية</li>
<li>الحفاظ على وزن صحي</li>

</ul>

</div>


</div>


</div>

);

}