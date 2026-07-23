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

export async function PATCH(
  request: Request,
  { params }: RouteContext
) {
  const { commentId } = await params;
  const { text } = await request.json();

  const index = comments.findIndex((item) => item.id === commentId);

  if (index === -1) {
    return Response.json({ message: 'Comment not found' }, { status: 404 });
  }

  comments[index].text = text;

  return Response.json({
    message: 'Comment updated',
    comment: comments[index],
  });
}