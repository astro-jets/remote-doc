import {BsPersonAdd , BsPeople} from "react-icons/bs";
import {FaBell, FaChartPie, FaStethoscope} from "react-icons/fa"
import ChartLine from "./components/LineChart";

const Home = () => {
    return ( 
        <div className="h-screen w-screen flex flex-col items-center mt-16">
            <h1 className="text-primary text-2xl mb-4 font-extrabold">Remote Patient Monitor</h1>

            <div className="w-4/5 h-[60vh] flex flex-col items-center mt-16">
                <div className="w-full h-full flex justify-around items-center mt-4">
                    <div className="nav-tab flex justify-around">
                        <BsPeople size={30} color="primary"/>
                        <h4>Patients</h4>
                    </div>
                    <div className="nav-tab flex justify-around">
                        <BsPersonAdd size={30} color="primary"/>
                        <h4>New Patient</h4>
                    </div>
                    <div className="nav-tab flex justify-around">
                        <FaChartPie size={30} color="primary"/>
                        <h4>Reports</h4>
                    </div>
                    <div className="nav-tab">
                        <FaBell size={30} color="primary"/>
                        <h4>Notifications</h4>
                    </div>
                </div>
            </div>

            <div className="w-5/6 h-full my-16 flex flex-col items-center">
                <div className="w-full flex justify-center space-x-4">
                    <FaStethoscope size={30} className="font-extra-bold text-white" /> 
                    <h3 className="text-primary  text-2xl">Admitted Patients</h3>
                </div>
                <div class="flex flex-col w-full p-0">
                    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                            <thead class="bg-gray-800 border-b">
                                <tr>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                    First
                                </th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                    Last
                                </th>
                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                    Handle
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">1</td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Mark
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Otto
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    @mdo
                                </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">2</td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Jacob
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Thornton
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    @fat
                                </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">3</td>
                                <td colspan="2" class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Larry
                                </td>              
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    @twitter
                                </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">4</td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Whitney
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Austin
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    @mdo
                                </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">5</td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Ted
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    Obama
                                </td>
                                <td class="text-sm text-gray-800 font-light px-6 py-4 whitespace-nowrap">
                                    @fat
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-4/5 h-full"><ChartLine/> </div>
        </div>
     );
}
 
export default Home;