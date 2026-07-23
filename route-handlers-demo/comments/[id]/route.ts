import { request } from 'https';
import { comments } from '../data';
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === id);
    if (!comment) {
        return Response.json({ message: 'Comment not found' }, { status: 404 });
    }
    return Response.json({ comment });

}
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const { text } = await request.json();

    const index = comments.findIndex(
        (comment) => comment.id === id
    );

    if (index === -1) {
        return Response.json(
            { message: "Comment not found" },
            { status: 404 }
        );
    }

    comments[index].text = text;

    return Response.json({
        message: "Comment updated",
        comment: comments[index],
    });
}