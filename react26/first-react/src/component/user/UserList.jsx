import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function UserList() {
    const [userList, setUserList] = useState([]);
    const [loader, setLoader] = useState(false);

    const getUserData = async () => {
        try {
            setLoader(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setUserList(data);
        } catch (error) {
            console.log("Error: " + error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center p-6">
            <div className="w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    User List
                </h1>

                {loader ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="space-y-3">
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
                    </div>
                )}
            </div>
        </div>
    );
}