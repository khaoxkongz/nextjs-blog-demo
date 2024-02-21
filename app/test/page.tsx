"use client";

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

export default async function Page() {
    const blogs = await getBlogs();
    console.log("blog", blogs)

    return <div>Test Page 2</div>;
}
