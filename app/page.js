import Link from 'next/link';
import MainWrapper from '@/components/MainWrapper';

import { Inter, Press_Start_2P } from 'next/font/google';
import Plaque from '@/components/Plaque';
const inter = Inter({ subsets: ['latin'] });
const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

function LinkSection(props) {
  const { title, array, color, children } = props;

  const textColorClass =
    {
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      blue: 'text-blue-400',
    }[color] || 'text-blue-400';

  const hoverTextColorClass =
    {
      purple: 'hover:text-purple-300',
      pink: 'hover:text-pink-300',
      blue: 'hover:text-blue-300',
    }[color] || 'hover:text-blue-300';

  return (
    <section className="flex flex-col gap-4 grid grid-cols-1 md:grid-cols-2">
      <h3 className={`${textColorClass} md:col-span-2 ${press.className}`}>
        ✦ {title} ✦
      </h3>
      {array &&
        array.map((link, linkIndex) => {
          const textSizeClass =
            link.name.length >= 12 ? 'text-sm' : 'text-base';
          return (
            <Link
              href={link.link}
              target={link.target}
              key={linkIndex}
              className={`bg-blue-950 text-blue-100 rounded-lg btnBorder relative grid place-items-center p-4 ${hoverTextColorClass}`}
            >
              <i
                className={`absolute text-xl left-4 top-1/2 -translate-y-1/2 ${
                  linkIndex < 4 && title === 'Links' ? 'specialShadow' : ''
                } ${link.icon}`}
              ></i>
              <p
                className={`${textSizeClass} ${
                  [].includes(link.name) ? 'specialShadow' : ''
                } ${press.className}`}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      {children}
    </section>
  );
}

const HomePage = () => {
  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  let profile = [
    {
      name: 'About',
      icon: 'fa-solid fa-user-circle',
      link: '/about',
      target: '',
    },
    {
      name: '\u00A0\u00A0Curriculum Vitae',
      icon: 'fa-solid fa-file-alt',
      link: 'CV_Wonjae-Choi.pdf',
      target: '_blank',
    },
    {
      name: 'Projects',
      icon: 'fa-solid fa-project-diagram',
      link: '/projects',
      target: '',
    },
    {
      name: 'Honors',
      icon: 'fa-solid fa-award',
      link: '/honors',
      target: '',
    },
    {
      name: 'Skills',
      icon: 'fa-solid fa-tools',
      link: '/skills',
      target: '',
    },
    {
      name: 'Interests',
      icon: 'fa-solid fa-search',
      link: '/interests',
      target: '',
    },
  ];

  let academia = [
    {
      name: 'All',
      icon: 'fa-solid fa-book-open',
      link: '/academia',
      target: '',
    },
    {
      name: 'Blockchain',
      icon: 'fa-solid fa-cube',
      link: '/academia/blockchain',
      target: '',
    },
    {
      name: '\u00A0\u00A0Computer Science',
      icon: 'fa-solid fa-laptop-code',
      link: '/academia/computer-science',
      target: '',
    },
    {
      name: 'Etc',
      icon: 'fa-solid fa-ellipsis-h',
      link: '/academia/etc',
      target: '',
    },
  ];

  let personal = [
    {
      name: 'Myself',
      icon: 'fa-solid fa-user',
      link: '/myself',
      target: '',
    },
    {
      name: 'WEB3',
      icon: 'fa-solid fa-globe',
      link: '/web3',
      target: '',
    },
    { name: 'Blog', icon: 'fa-solid fa-bookmark', link: '/blog', target: '' },
    {
      name: 'Hobbies',
      icon: 'fa-solid fa-gamepad',
      link: '/hobbies',
      target: '',
    },
    {
      name: 'Music',
      icon: 'fa-solid fa-music',
      link: 'https://youtube.com/playlist?list=PLAWDa1m7EkNUFIFaeKaXHpdO2zVUH6kg5&si=VF-dSpEbv6ncdPOJ',
      target: '_blank',
    },
    {
      name: 'Newsletter',
      icon: 'fa-regular fa-newspaper',
      link: '/subscribe',
      target: '_blank',
    },
  ];

  let socials = [
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      link: 'https://linkedin.com/wonj',
      target: '_blank',
    },
    {
      name: 'Twitter',
      icon: 'fa-brands fa-twitter',
      link: 'https://twitter.com/0xwonj',
      target: '_blank',
    },
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      link: 'https://github.com/wonj1012',
      target: '_blank',
    },
    {
      name: 'Telegram',
      icon: 'fa-brands fa-telegram',
      link: 'https://t.me/wonj1012',
      target: '_blank',
    },
    {
      name: 'Email',
      icon: 'fa-solid fa-envelope',
      link: 'mailto:choi@wonj.me',
      target: '_blank',
    },
  ];

  let planBenefits = [
    'Welcome to my website 🎉',
    'Feel free to contact me 📧',
    'Leave a comment if any 📝',
  ];

  return (
    <MainWrapper>
      <LinkSection title={'Profile'} array={profile} color={'blue'} />
      <LinkSection title={'Academia'} array={academia} color={'purple'} />
      <LinkSection title={'Personal'} array={personal} color={'pink'} />
      <Plaque
        benefits={planBenefits}
        message={''}
        name={'Welcome'}
        price={0}
        link={'/guestbook'}
      />
      <section className="gap-4 flex items-center justify-center flex-wrap">
        {socials.map((link, linkIndex) => {
          return (
            <Link
              href={link.link}
              target={link.target}
              key={linkIndex}
              className="bg-blue-950 text-blue-100 rounded-lg btnBorder relative grid place-items-center p-3"
            >
              <i className={' text-3xl  ' + link.icon}></i>
            </Link>
          );
        })}
      </section>
    </MainWrapper>
  );
};

export default HomePage;