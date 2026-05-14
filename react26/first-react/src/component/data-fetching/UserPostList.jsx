import React, { useEffect, useState } from 'react' //useEffect, useState 
import { usePosts, useCreatePost } from '../../hooks/TanPosthook';
import styles from "../../style/ui.module.css";
import Button from '../shared/ui/Button';
export default function UserPostList() {
    const BASE_URL = "https://jsonplaceholder.typicode.com/"
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    // const [page, setPage] = useState(0);
    // Tanstack query
    const { data, isFetching, isError

    } = usePosts();
    const { mutate, isPending } = useCreatePost();
    const [form, setForm] = useState({
        userId: "",
        title: "",
        body: "",
        id: 12

    })
    const handleForm = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const tanQuery = usePosts();
    const savePost = () => {
        mutate({
            title: form.title,
            body: form.body,
            userId: form.userId,
            id: form.id
        },
            {
                onSuccess: (data) => {
                    setTimeout(() => {
                        setMessage("Added suceesfully");
                        console.log(form);


                    }, 1000);
                    console.log(data);
                }
            },
            {
                onError: () => {
                    setMessage("Something went wrong!");
                }
            }
        )
    }

    useEffect(() => {
        console.log("==============tan query=========");
        console.log(tanQuery);
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}posts`);
                // const response = await fetch(`${BASE_URL}posts?page=${page}`);
                const post = await response.json();
                setPosts(post)
            } catch (e) {
                console.log(e.name);
                setError(e.message || "Something went wrong")
            }
            finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [])
    return (
        <>
            <h1>Post list</h1>
            {error && (<p>{error}</p>)}
            {loading ? (<p>loading...</p>) :
                posts.length > 0 ? (
                    <ul>
                        {
                            posts?.slice(0, 5).map((item) => (
                                <li key={item.id}>{item.id} - {item.title}</li>
                            ))
                        }
                    </ul>
                ) : <p>no items</p>
            }
            <br />
            <div>
                <h1>With TanStack</h1>
                {
                    isFetching && (<span>React query applying...</span>)
                }
                {
                    isError && (<span>Something went wrong...</span>)
                }
                <ul>
                    {
                        data?.slice(0, 5).map((item) => (
                            <li key={item.id}>{item.id} - {item.title}</li>
                        ))
                    }
                </ul>
            </div>
            {/* useMutate using Post */}
            <h1>Post - Mutation tanquery</h1>
            -- {message && <p>{message}</p>}
            <form>
                <input onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' name='userId' placeholder='Id..' />
                <input onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' name='title' />
                <input onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' name='body' />
                <input onChange={handleForm} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' name='id' />
            </form>
            <Button label={"re-usable button"} className={`${styles.btn} ${styles.green}`}
                onClick={savePost}>
                {isPending ? "Submitting..." : "Submit"}
            </Button>
            <br />
            <br />
            <div className="grid font-normal place-content-center px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4
             sm:text-5xl lg:text-6xl h-screen bg-dark-yellow my-style">
                Rapidly build modern websites without ever leaving your HTML.
            </div>
            <div className='btn'>@apply - avoid long clas name like variable</div>
            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-white rounded-xl shadow-md">
                <img
                    className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://tailwindcss.com/_next/static/media/erin-lindford.0sv7~gc~8i-hf.jpg"
                    alt=""
                />

                <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-black">Erin Lindford</p>
                        <p className="font-medium text-gray-500 md:text-yellow-300 xl:text-red-900">Product Engineer</p>
                    </div>

                    <button className="button">
                        Message
                    </button>
                </div>
            </div>
            {/* menu */}

        </>
    )
}
