"use client";

import { useEffect, useState } from "react";

interface IBlogContent {
    id: number;
    name: string;
    content: string;
    imageUrl: string;
    author: string;
    description: string;
}

async function getBlogs(slug: string) {
    const response = await fetch(
        `https://65d580193f1ab8c634371a4e.mockapi.io/blogs/${slug}`
    );

    if (!response.ok) {
        throw new Error("connot fetch blog");
    }

    return response.json();
}

export default function Page({ params }: { params: { slug: string } }) {
    const [blogState, setBlogState] = useState({
        name: "",
    });

    const initBlog = async () => {
        try {
            const result: IBlogContent = await getBlogs(params.slug);
            setBlogState(result);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log("Form Submitted", blogState);
        try {
            const response = await fetch(
                `https://65d580193f1ab8c634371a4e.mockapi.io/blogs/${params.slug}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(blogState),
                }
            );

            if (!response.ok) {
                throw new Error("Network resposne was not ok");
            }

            const responseData = await response.json();
            console.log("Form submitted succesfully", responseData);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(event.target);
        setBlogState((prevevState) => ({
            ...prevevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        initBlog();
    }, []);

    return (
        <div>
            Slug: {params.slug}
            <div>Blog State Name: {blogState.name}</div>
            <div>
                <form onSubmit={handleSubmit}>
                    Blog Name:
                    <input
                        name="name"
                        type="text"
                        value={blogState.name}
                        onChange={handleChange}
                    />
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
}
