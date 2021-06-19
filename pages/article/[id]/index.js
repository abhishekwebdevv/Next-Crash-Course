import { server } from '../../../config/index';
import Link from 'next/link';
import articleStyles from '../../../styles/Article.module.css';
import Meta from '../../../components/Meta';

function article({ article }) {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <Link href="/">
        <div className={articleStyles.goback_btn}>&larr; Go Back</div>
      </Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
