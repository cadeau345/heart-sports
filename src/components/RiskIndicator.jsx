import { useState } from "react";

export default function RiskIndicator(){

const [age,setAge]=useState("");

const [risk,setRisk]=useState("");

function calculateRisk(){

if(age<30) setRisk("خطر منخفض");

else if(age<50) setRisk("خطر متوسط");

else setRisk("خطر مرتفع");

}

return(

<div className="bg-white shadow-xl rounded-2xl p-6">

<h2 className="text-xl font-bold">

Heart Risk Test

</h2>

<input

placeholder="ادخل العمر"

className="border p-2 mt-2"

onChange={(e)=>setAge(e.target.value)}

/>

<button

onClick={calculateRisk}

className="bg-red-500 text-white px-4 py-2 mt-4 block"

>

احسب

</button>

<p className="mt-3">

{risk}

</p>

</div>

)

}