import { comments } from '../../../comments/data';

type RouteContext = {
  params: Promise<{
    commentId: string;
  }>;
};

export async function GET(_: Request, { params }: RouteContext) {
  const { commentId } = await params;
  const comment = comments.find((item) => item.id === commentId);

  if (!comment) {
    return Response.json({ message: 'Comment not found' }, { status: 404 });
  }

  return Response.json(comment);
}