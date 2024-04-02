import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import React from 'react';

import Comments from '@/components/Comments';
import MainWrapper from '@/components/MainWrapper';
import { colorMappings } from '@/utils/colors';

const commonOverrides = {
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-500">
      {children}
    </blockquote>
  ),
};

const getMarkdownContent = (folder, slug) => {
  const filePath = path.join(process.cwd(), folder, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  return matter(content);
};

const MarkdownPage = ({ folder, slug, backLink, titleColor }) => {
  const { content, data } = getMarkdownContent(folder, slug);

  const titleColorClasses = colorMappings[titleColor] || colorMappings.blue;

  const markdownOptions = {
    overrides: {
      ...commonOverrides,
      h1: {
        component: ({ children }) => (
          <h1 className={`text-3xl ${titleColorClasses[500]} font-bold`}>
            {children}
          </h1>
        ),
      },
      h2: {
        component: ({ children }) => (
          <h2 className={`text-2xl ${titleColorClasses[400]} font-bold`}>
            {children}
          </h2>
        ),
      },
      h3: {
        component: ({ children }) => (
          <h3 className={`text-xl ${titleColorClasses[300]} font-bold`}>
            {children}
          </h3>
        ),
      },
      h4: {
        component: ({ children }) => (
          <h4 className={`text-lg ${titleColorClasses[200]} font-bold`}>
            {children}
          </h4>
        ),
      },
      a: {
        component: ({ children, href }) => (
          <a
            href={href}
            className={`${titleColorClasses[500]} ${titleColorClasses['hover-700']}`}
          >
            {children}
          </a>
        ),
      },
      strong: {
        component: ({ children }) => (
          <strong className={`font-bold ${titleColorClasses[300]}`}>
            {children}
          </strong>
        ),
      },
      code: {
        component: ({ children }) => (
          <code
            className={`bg-gray-800 ${titleColorClasses[300]} rounded px-2 py-1`}
          >
            {children}
          </code>
        ),
      },
      blockquote: {
        component: ({ children }) => (
          <blockquote
            className={`border-l-4 pl-4 ${titleColorClasses['border-400']} italic ${titleColorClasses[100]}`}
          >
            {children}
          </blockquote>
        ),
      },
    },
  };

  return (
    <MainWrapper>
      <div className="flex flex-col">
        <Link
          href={backLink}
          className={`${titleColorClasses['after-bg-500']} group relative mr-auto overflow-hidden text-blue-100 after:absolute after:right-full after:top-0 after:z-[-1] after:size-full after:duration-200 hover:after:translate-x-full`}
        >
          <p className="duration-200 group-hover:text-[#030615]">&larr; Back</p>
        </Link>
        <div className="my-4">
          <h1 className={`font-press-start text-2xl ${titleColorClasses[100]}`}>
            {data.title}
          </h1>
          <p className={`mt-2 ${titleColorClasses[50]}`}>{data.date}</p>
        </div>
        <article className="lg:prose-l prose text-blue-100">
          <Markdown options={markdownOptions}>{content}</Markdown>
        </article>
        <hr className={`my-8 border-t-2 ${titleColorClasses['border-100']}`} />
        <Comments />
      </div>
    </MainWrapper>
  );
};

export default MarkdownPage;
