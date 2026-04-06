function StatCard({ title, value, change, icon, bgColor }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl shadow-sm bg-white">
      
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold mt-1">{value}</p>
        <p className="text-xs text-green-500 mt-1">{change}</p>
      </div>

      <div className={`p-3 rounded-xl ${bgColor}`}>
        <img src={icon} className="w-5 h-5" />
      </div>

    </div>
  );
}

export default StatCard;