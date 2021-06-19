import { server } from '../config/index';
import AriticleList from '../components/AriticleList';
import Meta from '../components/Meta';

export default function Home({ articles }) {
  return (
    <div>
      <AriticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
