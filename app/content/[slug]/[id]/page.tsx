export default function Page({
    params,
}: {
    params: { slug: string; id: string };
}) {
    return (
        <div>
            Slug: {params.slug} {params.id}
        </div>
    );
}
