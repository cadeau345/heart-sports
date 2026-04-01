import { useState } from "react";

export default function DiabetesRisk(){

const [age,setAge]=useState("");

const [activity,setActivity]=useState("");

const [risk,setRisk]=useState("");

function calculateRisk(){

if(age<30 && activity==="yes")

setRisk("خطر منخفض");

else if(age<50)

setRisk("خطر متوسط");

else

setRisk("خطر مرتفع");

}

return(

<div className="bg-white shadow-xl rounded-2xl p-6">

<h2 className="text-xl font-bold mb-3">

Diabetes Risk Test

</h2>

<input

placeholder="ادخل العمر"

className="border p-2 block mb-3"

onChange={(e)=>setAge(e.target.value)}

/>

<select

className="border p-2 block"

onChange={(e)=>setActivity(e.target.value)}

>

<option>هل تمارس الرياضة؟</option>

<option value="yes">نعم</option>

<option value="no">لا</option>

</select>

<button

onClick={calculateRisk}

className="bg-green-500 text-white px-4 py-2 mt-4"

>

احسب

</button>

<p className="mt-3 text-lg">

{risk}

</p>

</div>

)

}