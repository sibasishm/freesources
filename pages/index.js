import Link from 'next/link';

import Header from '../components/ui/Header';

const Index = ({ breeds }) => {
  return (
    <div>
      <Header />
      <h1>List of all dog breeds</h1>
      <div>
        {breeds.status === 'success' ? (
          <ol>
            {Object.keys(breeds.message).map((name) => (
              <li key={`dog-${name}`}>
                <Link as={`/${name}`} href="/[dog]">
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p>Nothing found.</p>
        )}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const breeds = await response.json();

  return {
    breeds
  };
};

export default Index;
