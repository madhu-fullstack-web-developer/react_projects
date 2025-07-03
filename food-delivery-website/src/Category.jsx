import { TiThSmallOutline } from "react-icons/ti";
import { MdDinnerDining } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";

const Categories = [
{
    id:1,
    name:"All",
    icon:<TiThSmallOutline className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:2, 
    name:"break_fast",
    icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:3,
    name:"soup",
    icon:<TbSoup className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:4,
    name:"pasta",
    icon:<MdDinnerDining className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:5, 
    name:"main_course", 
    icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:6,
    name:"pizza",
    icon:<GiFullPizza className="w-[60px] h-[60px] text-orange-500"/>,
},
{
    id:7,
    name:"burger", 
    icon:<GiHamburger className="w-[60px] h-[60px] text-orange-500"/>,
},

]

export default Categories