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
    const blogs: IBlogContents[] = await getBlogs();

    return (
        <div>
            Blog List:
            {blogs.map((blog, index) => (
                <div key={index}>
                    {blog.id} {blog.name}
                    <button className="px-4 m-1 bg-blue-400 rounded-full">
                        Go to read blog...
                    </button>
                </div>
            ))}
        </div>
    );
}
