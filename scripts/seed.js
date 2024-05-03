const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const postsToCreate = [
  {
    id: 1,
    title: "First Post",
    content: "The first post made",
  },
  {
    id: 2,
    title: "Second Post",
    content: "The second post made, still working on this",
  },
  {
    id: 3,
    title: "One more for good measure",
    content: "I don't write a lot but when I do, we end up with this many posts",
  },
  {
    id: 4,
    title: "Final Post, Thank You",
    content: "This should be enough posts for testing!",
  },
];

const seed = async (posts) => {
  for (let i = 0; i < posts.length; i++) {
    console.log('Creating post:', posts[i].id); // Corrected the way of accessing id
    console.log('Creating post:', posts[i]);
    await client.post.upsert({ // Corrected the syntax of upsert method call
      where: { id: posts[i].id },
      update: posts[i],
      create: posts[i]
    });
  }
};

seed(postsToCreate)
  .then(() => {
    console.log('Created/Updated posts successfully');
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => { // Removed the incorrect syntax from finally
    client.$disconnect();
    console.log('Disconnected Prisma Client, exiting');
  });
