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

export default function SugarChart(){

const data={

labels:["قبل الرياضة","بعد أسبوع","بعد شهر"],

datasets:[

{

label:"تحسن مستوى السكر",

data:[180,140,110],

borderColor:"green"

}

]

};

return(

<div className="bg-white shadow-xl rounded-2xl p-6">

<h2 className="text-xl font-bold mb-3">

تحسن مستوى السكر مع الرياضة

</h2>

<Line data={data}/>

</div>

)

}