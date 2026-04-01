import { useState } from "react";

export default function BMI() {

const [weight,setWeight]=useState("");

const [height,setHeight]=useState("");

const [result,setResult]=useState("");

function calculateBMI(){

let bmi=weight/(height*height);

if(bmi<18.5) setResult("نحافة");

else if(bmi<25) setResult("وزن طبيعي");

else if(bmi<30) setResult("زيادة وزن");

else setResult("سمنة");

}

return(

<div className="bg-white shadow-xl rounded-2xl p-6">

<h2 className="text-2xl font-bold mb-4">

BMI Calculator

</h2>

<input

placeholder="الوزن بالكيلو"

className="border p-2 mr-2"

onChange={(e)=>setWeight(e.target.value)}

/>

<input

placeholder="الطول بالمتر"

className="border p-2"

onChange={(e)=>setHeight(e.target.value)}

/>

<button

onClick={calculateBMI}

className="bg-blue-500 text-white px-4 py-2 mt-4 block"

>

احسب

</button>

<p className="mt-3">

{result}

</p>

</div>

)

}