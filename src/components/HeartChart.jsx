import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

);

export default function HeartChart(){

const data={

labels:["المشي","الجري","السباحة","الدراجة"],

datasets:[

{

label:"تحسين صحة القلب",

data:[40,70,60,65],

backgroundColor:"red"

}

]

};

return(

<div className="bg-white shadow-xl rounded-2xl p-6">

<h2 className="text-xl font-bold mb-3">

تأثير الرياضة على القلب

</h2>

<Bar data={data}/>

</div>

)

}