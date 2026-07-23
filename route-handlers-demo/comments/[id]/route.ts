import { comments } from '../data';
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === id);
    if (!comment) {
        return Response.json({ message: 'Comment not found' }, { status: 404 });
    }
    return Response.json({ comment });

}