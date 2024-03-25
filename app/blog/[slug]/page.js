import getPostMetadata from '@/components/getPostMetadata';
import MarkdownPage from '@/components/MarkdownPage';

export const generateStaticParams = async () => {
  const posts = getPostMetadata('posts');
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : '';
  return {
    title: `Blog | Wonj${id.replaceAll('_', ' ')}`,
  };
}

const PostPage = props => {
  const slug = props.params.slug;
  const folder = 'posts';
  const backLink = '/blog/';
  const titleColor = 'pink';

  return (
    <MarkdownPage
      folder={folder}
      slug={slug}
      backLink={backLink}
      titleColor={titleColor}
    />
  );
};

export default PostPage;
