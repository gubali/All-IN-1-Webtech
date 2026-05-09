import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cards from "../../reusable/Cards";
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
        // console.log("User list.....");
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
                        <Cards userList={userList} />
                    </div>
                )}
            </div>
        </div>
    );
}