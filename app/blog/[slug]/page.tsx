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

export default async function Page(params: { params: { slug: string } }) {
    const blog: IBlogContent = await getBlogs(params.params.slug);

    return (
        <div>
            Slug: {params.params.slug}
            <div>Blog Name: {blog.name}</div>
            <div>Description: {blog.description}</div>
        </div>
    );
}
