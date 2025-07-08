import React from "react";

export default function AdminList({ admins, onDelete, isSuperAdmin, loading }) {
  if (loading) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-orange-600 font-semibold">Loading admin data...</p>
      </div>
    );
  }

  if (!admins.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-gray-500 italic">No admins found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow overflow-auto">
      <h2 className="text-lg font-semibold text-orange-600 mb-4">Admin Users</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left bg-orange-100 text-orange-700">
            <th className="p-2 border-b">Username</th>
            <th className="p-2 border-b">Email</th>
            {isSuperAdmin && <th className="p-2 border-b">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr
              key={admin._id}
              className="hover:bg-orange-50 transition-all border-b last:border-b-0"
            >
              <td className="p-2">{admin.username}</td>
              <td className="p-2">{admin.email}</td>
              {isSuperAdmin && (
                <td className="p-2">
                  <button
                    onClick={() => onDelete(admin._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
