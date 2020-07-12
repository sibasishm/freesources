import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const resource = await prisma.resources.findOne({
    where: {
      id: Number(params.id)
    }
  });

  return {
    props: { resource }
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const resources = await prisma.resources.findMany();

  return {
    paths: resources.map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: false
  };
}

const Resource = ({ resource }) => {
  return (
    <>
      <h1>{resource.name}</h1>
      <p>{resource.description}</p>
      <Link href="/" passHref>
        <a>Back</a>
      </Link>
    </>
  );
};

export default Resource;
