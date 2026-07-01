import useFetch from "../../hooks/UseFetch/UseFetch";
import UserCard from "../../reusable/UserCard";
export default function HandleApiErrorGlobally() {
    // const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    const { data, loading, error } = useFetch("https://randomuser.me/api/?results=10&inc=name,email,phone,picture")
    return (
        <>
            <h1>Handle APi Error - Globally</h1>
            {
                loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) :
                    (
                        data.results.map((user, index) => (
                            <UserCard key={index} user={user} />
                        ))
                    )
            }
        </>
    )
}