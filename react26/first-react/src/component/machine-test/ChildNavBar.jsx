import React from 'react';
import { Link, Outlet, NavLink } from 'react-router';
export default function ChildNavBar() {
    return (
        <>
            <div className="tabs">
                <NavLink to="counter"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Counter
                </NavLink>
                <NavLink to="debouce"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Debouce
                </NavLink>
                <NavLink to="user"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Dynamic Routing
                </NavLink>
                <NavLink to="usememo"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Use Memo
                </NavLink>
                <NavLink to="usecall"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Use Callback
                </NavLink>
                <NavLink to="usecontext"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Use Context
                </NavLink>
            </div>
            <div className='container mx-auto px-4'>
                <Outlet />
            </div>
        </>
    )
}
