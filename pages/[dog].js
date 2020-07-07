import { useRouter } from 'next/router';

const Dog = ({ image }) => {
  const { query } = useRouter();

  return (
    <div>
      <h1>{query.dog}</h1>
      <img src={image.message} alt={`A cute ${query.dog} dog`} />
    </div>
  );
};

Dog.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const response = await fetch(
    `https://dog.ceo/api/breed/${query.dog}/images/random`
  );
  const image = await response.json();

  return { image };
};

export default Dog;
