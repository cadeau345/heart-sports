import { useState } from "react";
import { speakArabic } from "../speakArabic";

export default function HealthSummary(){

const [bmi,setBmi]=useState("");
const [age,setAge]=useState("");
const [sugar,setSugar]=useState("");
const [result,setResult]=useState("");

function analyze(){

let score=0;

if(bmi<25) score+=1;
if(age<45) score+=1;
if(sugar<100) score+=1;

let msg="";

if(score===3){

msg="حالتك الصحية ممتازة استمر بنفس النظام الصحي";

}

else if(score===2){

msg="حالتك الصحية جيدة ولكن تحتاج بعض التحسين";

}

else{

msg="يفضل تحسين نمط حياتك وزيادة النشاط البدني والمتابعة الطبية";

}

setResult(msg);

speakArabic(msg);

}

return(

<div className="bg-white rounded-2xl shadow-xl p-6">

<h2 className="text-xl font-bold mb-3">

My Health Status

</h2>

<input
type="number"
placeholder="ادخل BMI"
className="border p-2 w-full mb-2"
onChange={(e)=>setBmi(e.target.value)}
/>

<input
type="number"
placeholder="ادخل العمر"
className="border p-2 w-full mb-2"
onChange={(e)=>setAge(e.target.value)}
/>

<input
type="number"
placeholder="مستوى السكر صائم"
className="border p-2 w-full mb-2"
onChange={(e)=>setSugar(e.target.value)}
/>

<button
onClick={analyze}
className="bg-blue-500 text-white px-4 py-2 mt-2"
>

تحليل الحالة الصحية

</button>

<p className="mt-4 text-lg font-bold">

{result}

</p>

</div>

)

}