import React from 'react';
import { Link, Outlet, NavLink } from 'react-router';
import { useTheme } from '../../reusable/theme-context/ThemeContext';
export default function ChildNavBar() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <>
            <div className={`tabs ${isDark ? 'theme__tab-color' : undefined}`} >
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
                <NavLink to="todo"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    ToDo <small>useState/useReducer</small>
                </NavLink>
                <NavLink to="useref"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    UseRef
                </NavLink>
                <NavLink to="usetransition"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Use Transition
                </NavLink>
                <NavLink to="uselayout"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Use Layout Effect
                </NavLink>
                <NavLink to="actionstate"
                    className={({ isActive }) => isActive ? "tab active" : 'tab'}>
                    Use Action State
                </NavLink>
            </div>
            <div className='container mx-auto px-4'>
                <Outlet />
            </div>
        </>
    )
}
