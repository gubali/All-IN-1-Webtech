import React from 'react'
import { useParams } from 'react-router'

export default function UserProfile() {
    const pramsData = useParams();
    //console.log(pramsData);
    return (
        <div>UserProfile
            Selected id is: {pramsData?.id}
            <h2>{pramsData?.name ? `Name= ${pramsData?.name}` : ""}</h2>
        </div>
    )
}
