"use client";

import { useEffect, useState } from "react";
import { submitForm } from "./action";

interface IBlogContents {
    id: number;
    name: string;
    content: string;
    imageUrl: string;
    author: string;
    description: string;
}

async function getBlogs() {
    const response = await fetch(
        "https://65d580193f1ab8c634371a4e.mockapi.io/blogs"
    );

    if (!response.ok) {
        throw new Error("connot fetch blog");
    }

    return response.json();
}

export default function Page() {
    const [blogState, setBlogState] = useState<IBlogContents[]>([]);

    

    const initBlog = async () => {
        try {
            const result = await getBlogs();
            setBlogState(result);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        initBlog();
    }, []);

    return (
        <div>
            Test Page 2
            {blogState.map((blog, index) => (
                <div key={index}>
                    {blog.id} {blog.name}
                </div>
            ))}
            <form action={submitForm}>
                Email <input name="email" />
                <button>Submit</button>
            </form>
        </div>
    );
}
