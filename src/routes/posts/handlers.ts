import prisma from "../../lib/prisma";

export const getPosts = async () => {
  try {
    return await prisma.post.findMany({
      orderBy: { createdAt: "asc" },
    });
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id: number) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (
  id: number,
  options: { title?: string; content?: string }
) => {
  try {
    const { title, content } = options;

    return await prisma.post.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });
  } catch (error) {
    throw error;
  }
};

export const createPost = async (options: {
  title: string;
  content: string;
}) => {
  try {
    const { title, content } = options;

    return await prisma.post.create({ data: { title, content } });
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (options: { id: number }) => {
  try {
    const { id } = options;

    return await prisma.post.delete({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
};
