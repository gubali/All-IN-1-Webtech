import React from 'react'
import { NavLink } from 'react-router'
export default function Cards({ userList }) {
    return (
        <>
            {userList.map((item) => (
                <NavLink
                    key={item.id}
                    to={`/coding-test/user-profile/${item.id}/${item.name}`}
                    className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">
                                {item.name}
                            </h2>
                            <p className="text-sm text-gray-500">{item.email}</p>
                        </div>

                        <span className="text-blue-500 font-medium text-sm">
                            View →
                        </span>
                    </div>
                </NavLink>
            ))}
        </>
    )
}
