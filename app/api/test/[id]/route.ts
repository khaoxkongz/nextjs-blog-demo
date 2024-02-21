export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    console.log("test");
    return Response.json({ name: "mikelopster", id: params.id });
}
