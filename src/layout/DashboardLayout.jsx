import { useState } from "react";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 relative">

      {/* ===== Mobile Overlay ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          min-h-screen w-64 bg-white shadow-lg
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-6 space-y-2">

          {/* Default Route → User Profile */}
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            User Profile
          </NavLink>

          <NavLink
            to="/dashboard/myParcel"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            My Parcel
          </NavLink>

          <NavLink
            to="/dashboard/route2"
            className="block px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Route 2
          </NavLink>

          <NavLink
            to="/dashboard/route3"
            className="block px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Route 3
          </NavLink>

          {/* Divider */}
          <hr className="my-4" />

          <NavLink
            to="/"
            className="block px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Home
          </NavLink>

        </div>
      </aside>

      {/* ===== Main Content Area ===== */}
      <div
        className="flex-1 flex flex-col"
        onClick={() => isOpen && setIsOpen(false)}
      >

        {/* ===== Mobile Toggle Button ===== */}
        <div className="md:hidden bg-white shadow p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="text-2xl"
          >
            ☰
          </button>
        </div>

        {/* ===== This is where nested routes render ===== */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
