"use client"
import { useEffect, useState } from "react";
import HeartRate from "../components/HeartRate";
import {FaHeartbeat,FaLungs, FaTint} from "react-icons/fa"
const Monitor = () => {
    const [initialDataHeartRate,setHr] = useState( [98, 97, 97, 98, 98, 97, 96, 97, 98, 99, 98, 97, 96, 96, 97, 98, 99, 98, 97, 97]); // Approximately 1 hour of data (1 data point per second)
    const [initialDataBloodPressure,setBp] = useState( [98, 97, 97, 98, 98, 97, 96, 97, 98, 99, 98, 97, 96, 96, 97, 98, 99, 98, 97, 97]); // Approximately 1 hour of data (1 data point per second)
    const [initialDataSaturation,setSr] = useState( [98, 97, 97, 98, 98, 97, 96, 97, 98, 99, 98, 97, 96, 96, 97, 98, 99, 98, 97, 97]); // Approximately 1 hour of data (1 data point per second)

    // Simulated real-time data for heart rate, blood pressure, and saturation
    const simulateRealTimeData = () => {
            // Simulate real-time data updates every second
        setInterval(() => {
        // Generate new data points for each vital sign
        const newHeartRate = Math.floor(Math.random() * 30) + 70;
        const newBloodPressure = Math.floor(Math.random() * 60) + 80;
        const newSaturation = Math.floor(Math.random() * 6) + 95;

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
            newData.push(newSaturation);
            return newData;
        });
        }, 3000); // Simulate updates every second
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
                    <HeartRate vitalSign={"Heart Rate"} color={"#03a9f4"}  initialData={initialDataHeartRate}/>
                    <div className="w-1/4 h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
                        <p className="text-2xl font-extra-bold text-white">Heart Rate</p>
                        <FaHeartbeat size={80} className="text-green-700"/>
                        <p className="text-xl font-extra-bold text-white">128 <span className="text-primary text-lg">bpm</span></p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 h-[30vh] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex justify-around">
                    <HeartRate vitalSign={"Saturation"} color={"#c2410c"} initialData={initialDataBloodPressure} />
                    <div className="w-1/4 h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
                        <p className="text-2xl font-extra-bold text-white">Saturation</p>
                        <FaLungs size={80} className="text-green-700"/>
                        <p className="text-xl font-extra-bold text-white">128 <span className="text-primary text-lg">bpm</span></p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 h-[30vh] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex justify-around">
                    <HeartRate vitalSign={"Blood Pressure"} color={"#249124"} initialData={initialDataSaturation}/>
                    <div className="w-1/4 h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-around">
                        <p className="text-2xl font-extra-bold text-white">Blood Pressure</p>
                        <FaTint size={80} className="text-green-700"/>
                        <p className="text-xl font-extra-bold text-white">128 <span className="text-[#249124] text-lg">bpm</span></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Monitor;