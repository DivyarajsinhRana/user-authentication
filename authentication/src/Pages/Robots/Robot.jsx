import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getAllRobots } from "../../Components/Auth/_Redux/authaction"
import moment from 'moment';
import Filter from '../Filter/Filter'
import Robotcard from './Robotcard'
import Cart from "../Cart/Cart";
import './robot.css'
const Robot = () => {
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getAllRobots());
},[Robot])
const robotdata = useSelector(state => state.robots.data);
console.log(robotdata);
const [allrobots, setAllrobots] = useState([]);
const filterRobots = robotdata && robotdata.filter((item) =>
        item.createdAt = moment(item.createdAt).format("DD/MM/YYYY")
    )
    useEffect(() => {
        setAllrobots(filterRobots);
    }, [robotdata])
    const length = allrobots && allrobots.length;
    const handleChange = (e) => {
        if (e.target.value === "Available material") {
            setAllrobots(filterRobots)
        }
        else {
            setAllrobots(filterRobots.filter(item => item.material === e.target.value))
        }
    }

    return (
        <>
         <div className="row mt-3">
         <Filter length={length} handleChange={handleChange} />
         </div>   
         <div className="robot mt-2">
         {
                allrobots && allrobots.map((item, index) => {
                    // console.log("item>>>",item)
                    return (
                        <div className=' mt-3 gx-5' key={index}>
                            <Robotcard index={index} item={item} />
                        </div>
                    )
                })
            }
         </div>

        </>
    )
}

export default Robot
