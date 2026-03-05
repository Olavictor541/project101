import { useState } from "react";

function DashboardPage(){
    // state for sidebar toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 

    function toggleMenu(){
        setIsSidebarOpen(!isSidebarOpen);
    }

    // state for search input
    const [search, setSearch] = useState<string>("");

    function searchChange(e: React.ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value);
    }


    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="flex min-h-screen">
                
                <aside id="sideBar" className= {`sm:flex flex-col p-4 w-64 justify-between bg-white ${ isSidebarOpen ? "flex" : "hidden" }`}>
                    <div>
                        <div className="mb-6 font-bold text-l flex space-x-2">
                            <div className="px-2 flex items-center bg-sky-400 rounded">
                                <img src="/assets/icons/fire.svg" className="w-4 h-4"></img>
                            </div>
                            <p>TheOVMProject</p>
                        </div>

                        <nav className="space-y-5 text-[13px]">
                            <a className="p-2 rounded hover:bg-sky-400 flex" href="#">
                                <div className="px-3 flex items-center">
                                    <img src="/assets/icons/chart-pie.svg" className="w-4 h-4"></img> 
                                </div>
                                Dashboard
                            </a>
                            <a className="p-2 rounded hover:bg-sky-400 flex" href="#">
                                <div className="px-3 flex items-center">
                                    <img src="/assets/icons/chart-bar.svg" className="w-4 h-4"></img>
                                </div>
                                Leaderboard
                            </a>
                            <a className="p-2 rounded hover:bg-sky-400 flex" href="#">
                                <div className="px-3 flex items-center">
                                    <img src="/assets/icons/shopping-cart.svg" className="w-4 h-4"></img>
                                </div>
                                Order
                            </a>
                            <a className="p-2 rounded hover:bg-sky-400 flex" href="#">
                                <div className="px-3 flex items-center">
                                    <img src="/assets/icons/shopping-bag.svg" className="w-4 h-4"></img>
                                </div>
                                Products
                            </a>
                            <a className="p-2 rounded hover:bg-sky-400 flex" href="#">
                                <div className="px-3 flex items-center">
                                    <img src="/assets/icons/chat-bubble-left-ellipsis.svg" className="w-4 h-4"></img>
                                </div>
                                Messages
                            </a>
                            <a className="p-2 rounded hover:bg-sky-400 flex" href="#">
                                <div className="px-3 flex items-center">
                                    <img src="/assets/icons/cog-6-tooth.svg" className="w-4 h-4"></img>
                                </div>
                                Settings
                            </a>
                            <a className="p-2 rounded hover:bg-sky-400 flex" id="logOut" href="#">
                                <div className="px-3 flex items-center">
                                    <img src="/assets/icons/arrow-right-start-on-rectangle.svg" className="w-4 h-4"></img>
                                </div>
                                Sign Out
                            </a>
                        </nav>
                    </div>

                    <div className="rounded-lg bg-sky-400 flex flex-col items-center p-5 text-center space-y-4">
                        <div className="bg-white rounded">
                            <img src="/assets/icons/fire.svg" className="w-6 h-6"></img>
                        </div>
                        <p className="font-bold text-white">TheOVMProject Pro</p>
                        <p className="font-thin text-[13px] text-white">Get access to all features on pro</p>
                        <button className="bg-white p-2 rounded-lg hover:bg-sky-100 text-sky-400">
                            Get Pro
                        </button>
                    </div>
                </aside>

                <main className="flex-1">

                    <div className="flex items-center justify-between bg-white p-2">
                        
                        <div className="flex items-center">
                            <button onClick={toggleMenu} className="m-1 p-1 rounded hover:bg-gray-100 sm:hidden">
                                <img src="/assets/icons/bars-3.svg" className="w-6 h-6"></img>
                            </button>
                            <div className="font-bold text-xl">Dashboard</div>
                        </div>
                        

                        <div className="hidden sm:flex sm:items-center bg-gray-300 border focus-within:border-sky-500 px-2 py-1 rounded-[4px]">
                            <img src="/assets/icons/magnifying-glass.svg" className="w-4 h-4"></img>
                            <input
                                className="placeholder: italic px-2 bg-transparent outline-none"
                                type="text"
                                placeholder="search here..."
                                value={search}
                                onChange={searchChange} 
                            />
                        </div>

                        
                        

                        <div className="flex items-center">
                            <div className="hidden sm:flex items-center text-sm">
                                <img src="/assets/icons/globe-americas.svg" className="w-4 h-4"></img>
                                <p className="px-1">Eng (US)</p>
                                <img src="/assets/icons/chevron-down.svg" className="w-3 h-3"></img>
                            </div>

                            <div className="rounded hover:bg-yellow-100 p-2 mx-4">
                                <img src="/assets/icons/bell-alert.svg" className="w-4 h-4"></img>
                            </div>

                            <div className="flex items-center space-x-1">
                                <div className="rounded bg-sky-300 p-2">
                                    <img src="/assets/icons/user.svg" className="w-4 h-4"></img>
                                </div>
                                
                                <div className="flex flex-col">
                                    <p className="font-bold text-[10px]">Victor</p>
                                    <p className="text-gray-400 text-[8px]">Admin</p>
                                </div>

                            </div>

                            <div className="p-4">
                                <img src="/assets/icons/chevron-down.svg" className="w-3 h-3"></img>
                            </div>
                        </div>
                        
                        
                    </div>


                    <div className="flex m-5 overflow-hidden">
                        <div className="flex bg-white flex-col rounded p-5">
                            <div className="flex justify-between">
                                <p className="font-bold">Today's Sales</p>

                                <div className="border rounded p-1 text-sm flex items-center">
                                    <img src="/assets/icons/arrow-up-tray.svg" className="w-4 h-4"></img>
                                    <p className="px-1">Export</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400">Sales Summary</p>

                            <div className="flex mt-6 justify-between space-x-4">
                                <div className="rounded flex flex-col bg-red-200 p-2 space-y-2">
                                    <img src="/assets/icons/chart-bar-square.svg" className="w-5 h-5 bg-red-400 rounded"></img>
                                    <p className="font-bold">$1k</p>
                                    <p className="font-thin text-[12px]">Total Sales</p>
                                    <p className="text-[10px] text-blue-500">+8% from yesterday</p>
                                </div>
                                <div className="rounded flex flex-col bg-orange-200 p-2 space-y-2">
                                    <img src="/assets/icons/document-text.svg" className="w-5 h-5 bg-orange-300 rounded"></img>
                                    <p className="font-bold">300</p>
                                    <p className="font-thin text-[12px]">Total Order</p>
                                    <p className="text-[10px] text-blue-500">+8% from yesterday</p>
                                </div>
                                <div className="rounded flex flex-col bg-green-200 p-2 space-y-2">
                                    <img src="/assets/icons/tag.svg" className="w-5 h-5 bg-green-500 rounded"></img>
                                    <p className="font-bold">5</p>
                                    <p className="font-thin text-[12px]">Product Sold</p>
                                    <p className="text-[10px] text-blue-500">+8% from yesterday</p>
                                </div>
                                <div className="rounded flex flex-col bg-purple-200 p-2 space-y-2">
                                    <img src="/assets/icons/user-plus.svg" className="w-5 h-5 bg-purple-300 rounded"></img>
                                    <p className="font-bold">8</p>
                                    <p className="font-thin text-[12px]">New Customer</p>
                                    <p className="text-[10px] text-blue-500">+8% from yesterday</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white">

                        </div>
                    </div>  
                </main>
            </div>
        </div>
    );
}

export default DashboardPage;