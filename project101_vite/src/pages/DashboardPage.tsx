import { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";

function DashboardPage() {
  const { isAuthenticated, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  function handleSignOut() {
    logoutUser();
    navigate("/login");
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  function toggleMenu() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function searchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex">
      
      {/* SIDEBAR */}
      <aside
        className={`h-screen fixed sm:static z-10 top-0 left-0 h-full w-64 bg-white border-r p-5 flex-col justify-between ${
          isSidebarOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        <div>
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2 font-bold">
            <div className="bg-sky-400 p-2 rounded">
              <img src="/assets/icons/fire.svg" className="w-4 h-4" />
            </div>
            <span>TheOVMProject</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 text-sm">
            <a className="flex items-center gap-3 p-2 rounded-lg bg-sky-100 text-sky-600 font-medium">
              <img src="/assets/icons/chart-pie.svg" className="w-4 h-4" />
              Dashboard
            </a>

            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
              <img src="/assets/icons/chart-bar.svg" className="w-4 h-4" />
              Leaderboard
            </a>

            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
              <img src="/assets/icons/shopping-cart.svg" className="w-4 h-4" />
              Orders
            </a>

            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
              <img src="/assets/icons/shopping-bag.svg" className="w-4 h-4" />
              Products
            </a>

            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
              <img src="/assets/icons/chat-bubble-left-ellipsis.svg" className="w-4 h-4" />
              Messages
            </a>

            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
              <img src="/assets/icons/cog-6-tooth.svg" className="w-4 h-4" />
              Settings
            </a>

            <button
              onClick={handleSignOut}
              className="w-full text-left flex items-center gap-3 p-2 rounded-lg hover:bg-red-100 text-red-500 transition"
            >
              <img src="/assets/icons/arrow-right-start-on-rectangle.svg" className="w-4 h-4" />
              Sign Out
            </button>
          </nav>
        </div>

        {/* Pro Card */}
        <div className="bg-sky-400 text-white rounded-2xl p-5 text-center space-y-3 mt-10">
          <div className="bg-white p-2 rounded inline-block">
            <img src="/assets/icons/fire.svg" className="w-5 h-5" />
          </div>
          <p className="font-semibold">Go Pro</p>
          <p className="text-xs opacity-90">
            Unlock all premium features
          </p>
          <button className="bg-white text-sky-500 px-3 py-2 rounded-lg text-sm hover:bg-gray-100">
            Upgrade
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        
        {/* NAVBAR */}
        <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMenu}
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <img src="/assets/icons/bars-3.svg" className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800">
              Dashboard
            </h1>
          </div>

          {/* Search */}
          <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 rounded-xl w-72 focus-within:ring-2 focus-within:ring-sky-400">
            <img src="/assets/icons/magnifying-glass.svg" className="w-4 h-4 opacity-50" />
            <input
              className="ml-2 bg-transparent outline-none w-full text-sm"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={searchChange}
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full hover:bg-gray-100">
              <img src="/assets/icons/bell-alert.svg" className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-sky-300 p-2 rounded-full">
                <img src="/assets/icons/user.svg" className="w-4 h-4" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Victor</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-6 max-w-7xl mx-auto">

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Sales"
              value="$1,000"
              change="+8% from yesterday"
              icon="/assets/icons/chart-bar-square.svg"
              bgColor="bg-red-200"
            />
            <StatCard
              title="Orders"
              value="300"
              change="+5% from yesterday"
              icon="/assets/icons/document-text.svg"
              bgColor="bg-orange-200"
            />
            <StatCard
              title="Products Sold"
              value="5"
              change="+2% from yesterday"
              icon="/assets/icons/tag.svg"
              bgColor="bg-green-200"
            />
            <StatCard
              title="New Customers"
              value="8"
              change="+10% from yesterday"
              icon="/assets/icons/user-plus.svg"
              bgColor="bg-purple-200"
            />
          </div>

          {/* SALES OVERVIEW */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Sales Overview</h2>
              <button className="text-sm text-sky-500 hover:underline">
                View Report
              </button>
            </div>

            <div className="h-48 flex items-center justify-center text-gray-400 border border-dashed rounded-xl">
              Chart coming soon...
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default DashboardPage;