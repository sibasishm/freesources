import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

import Header from '../components/ui/Header';

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const resources = await prisma.resources.findMany({
    include: { subcategories: true }
  });

  return { props: { resources } };
}

const Index = ({ resources }) => {
  return (
    <div>
      <Header />
      <h1>List of all resources</h1>
      <ol>
        {resources.map((resource) => (
          <li key={resource.id}>
            <Link href="/resources/[id]" as={`/resources/${resource.id}`}>
              <a>{resource.name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Index;
