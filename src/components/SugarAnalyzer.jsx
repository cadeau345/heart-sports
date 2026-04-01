import { useState } from "react";
import { speakArabic } from "../speakArabic";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
LineElement,
PointElement,
Title,
Tooltip,
Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
LineElement,
PointElement,
Title,
Tooltip,
Legend
);

export default function SugarAnalyzer(){

const [level,setLevel]=useState("");
const [result,setResult]=useState("");
const [color,setColor]=useState("");
const [tips,setTips]=useState("");
const [chartData,setChartData]=useState(null);

function analyzeSugar(){

if(level==="") return;

let msg="";
let advice="";
let textColor="";

if(level < 100){

msg="مستوى السكر طبيعي";
advice="استمر في ممارسة الرياضة وتناول غذاء صحي للحفاظ على هذا المستوى.";
textColor="text-green-600";

}

else if(level >=100 && level <=125){

msg="مرحلة ما قبل السكري";
advice="يفضل زيادة النشاط البدني وتقليل السكريات والمتابعة مع الطبيب.";
textColor="text-yellow-600";

}

else{

msg="مستوى السكر مرتفع (سكري)";
advice="يجب مراجعة الطبيب فوراً والالتزام بالرياضة والنظام الغذائي المناسب.";
textColor="text-red-600";

}

setResult(msg);
setTips(advice);
setColor(textColor);

setChartData({

labels:["المستوى الحالي","المستوى الطبيعي"],

datasets:[

{

label:"تحليل مستوى السكر",

data:[level,100],

borderColor:"green"

}

]

});

speakArabic(msg + ". " + advice);

}

return(

<div className="bg-white rounded-2xl shadow-xl p-6">

<h2 className="text-xl font-bold mb-3">

تحليل مستوى السكر

</h2>

<input

type="number"

placeholder="ادخل مستوى السكر صائم mg/dL"

className="border p-2 w-full"

onChange={(e)=>setLevel(e.target.value)}

/>

<button

onClick={analyzeSugar}

className="bg-green-500 text-white px-4 py-2 mt-4"

>

تحليل النتيجة

</button>


<p className={`mt-4 text-lg font-bold ${color}`}>

{result}

</p>


<p className="mt-2">

{tips}

</p>


{chartData && (

<div className="mt-6">

<Line data={chartData}/>

</div>

)}

</div>

);

}