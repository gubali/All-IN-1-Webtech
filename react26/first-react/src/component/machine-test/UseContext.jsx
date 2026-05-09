import React, { useState } from 'react'
import Quotes from '../../reusable/Quotes'
import { useUserContext } from '../../context/UserContext'
export default function UseContext() {
    const { user } = useUserContext();
    const [toggle, setToggle] = useState(true)
    const desc = `useContext is a React Hook that lets a component \nuse shared data from Context directly, where Context is a shared data system used \nto avoid prop drilling.\n\nA dependency injection + global state propagation mechanism built on React’s internal render tree propagation model.`;
    const heading = "Use Context";
    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    return (
        <>
            <Quotes heading={`${heading}`} para={`${desc}`} />
            Coming bypass by UseContext <br />
            {
                toggle && <h1 className='text-3xl font-bold'>{user}</h1>
            }
            <button onClick={handleToggle}>Toggle-ChocoPie</button>

        </>
    )
}
