"use client";

import { getBlogs } from "../content/page";

export default async function Page() {
    const blogs = await getBlogs();
    console.log("blog", blogs)

    return <div>Test Page 2</div>;
}
