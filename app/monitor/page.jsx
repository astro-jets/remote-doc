"use client"
import { useEffect, useState } from "react";
import HeartRate from "../components/HeartRate";
import {FaHeart,FaLungs, FaTint} from "react-icons/fa"
import { BsHandIndexFill } from "react-icons/bs";
const Monitor = () => {
    const [initialDataHeartRate,setHr] = useState( [98, 97, 97, 98, 98, 97, 96, 97, 98, 99, 98, 97, 96, 96, 97, 98, 99, 98, 97, 97]); // Approximately 1 hour of data (1 data point per second)
    const [initialDataBloodPressure,setBp] = useState( [98, 97, 97, 98, 98, 97, 96, 97, 98, 99, 98, 97, 96, 96, 97, 98, 99, 98, 97, 97]); // Approximately 1 hour of data (1 data point per second)
    const [initialDataRespiratory,setSr] = useState( [98, 97, 97, 98, 98, 97, 96, 97, 98, 99, 98, 97, 96, 96, 97, 98, 99, 98, 97, 97]); // Approximately 1 hour of data (1 data point per second)

    // Simulated real-time data for heart rate, blood pressure, and Respiratory
    const simulateRealTimeData = () => {
            // Simulate real-time data updates every second
        setInterval(() => {
        // Generate new data points for each vital sign
        const newHeartRate = Math.floor(Math.random() * 30) + 70;
        const newBloodPressure = Math.floor(Math.random() * 60) + 80;
        const newRespiratory = Math.floor(Math.random() * 6) + 95;

        // Update state with the new data
        setHr((prevData) => {
            const newData = [...prevData];
            newData.shift();
            newData.push(newHeartRate);
            return newData;
        });

        setBp((prevData) => {
            const newData = [...prevData];
            newData.shift();
            newData.push(newBloodPressure);
            return newData;
        });

        setSr((prevData) => {
            const newData = [...prevData];
            newData.shift();
            newData.push(newRespiratory);
            return newData;
        });
        }, 10000); // Simulate updates every second
    };

    // Helper function to generate random data within a range
    const generateRandomData = (length, min, max) => {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1) + min));
    };
    useEffect(()=>{
        simulateRealTimeData();
    },[])

    return ( 
        <div className="w-screen h-full flex flex-col items-center mt-4 space-y-5">
            <div className="w-11/12 h-[30vh] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex justify-around">
                    <HeartRate vitalSign={"Heart Rate"} color={"#249124"}  initialData={initialDataHeartRate}/>
                    <div className="w-1/4 h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
                        <p className="text-2xl font-extra-bold text-white">Heart Rate</p>
                        <FaHeart size={80} className="text-green-700"/>
                        <p className="text-xl font-extra-bold text-white">128 <span className="text-green-700 text-lg">bpm</span></p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 h-[30vh] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex justify-around">
                    <HeartRate vitalSign={"SPO2"} color={"#1abdda"} initialData={initialDataRespiratory}/>
                    <div className="w-1/4 h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
                        <p className="text-2xl font-extra-bold text-white">SPO2</p>
                        <BsHandIndexFill size={80} className="text-[#1abdda]"/>
                        <p className="text-xl font-extra-bold text-white">128 <span className="text-[#1abdda] text-lg">spo2</span></p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 h-[30vh] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex justify-around">
                    <HeartRate vitalSign={"Respiratory"} color={"#FFCA4A"} initialData={initialDataBloodPressure} />
                    <div className="w-1/4 h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
                        <p className="text-2xl font-extra-bold text-white">Respiratory</p>
                        <FaLungs size={80} className="text-[#FFCA4A]"/>
                        <p className="text-xl font-extra-bold text-white">128 <span className="text-[#FFCA4A] text-lg">rpm</span></p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 h-[30vh] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex justify-around">
                    <HeartRate vitalSign={"Blood Pressure"} color={"#EE81E6"} initialData={initialDataRespiratory}/>
                    <div className="w-1/4 h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
                        <p className="text-2xl font-extra-bold text-white">Blood Pressure</p>
                        <FaTint size={80} className="text-[#EE81E6]"/>
                        <p className="text-xl font-extra-bold text-white">128 <span className="text-[#EE81E6] text-lg">bp</span></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Monitor;