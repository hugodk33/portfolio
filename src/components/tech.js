import React from 'react';
import { BsWordpress, BsFiletypeHtml, BsFiletypeCss } from 'react-icons/bs';
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoAngular,
  BiLogoVuejs,
  BiLogoPhp,
  BiLogoTailwindCss,
} from 'react-icons/bi';
import {
  SiCsharp,
  SiExpress,
  SiDotnet,
  SiNestjs,
  SiAdonisjs,
  SiMysql,
  SiAmazonaws,
  SiJquery,
  SiDocker,
} from 'react-icons/si';
import { FaNodeJs, FaGitSquare, FaCloudUploadAlt } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

/**
 * Single icon registry for tech names used across the career data and the CV.
 * Keys mirror the lowercase values in career.json / career-en.json.
 */
export const techIcons = {
  wordpress: <BsWordpress />,
  html: <BsFiletypeHtml />,
  css: <BsFiletypeCss />,
  php: <BiLogoPhp />,
  javascript: <BiLogoJavascript />,
  typescript: <BiLogoTypescript />,
  jquery: <SiJquery />,
  tailwind: <BiLogoTailwindCss />,
  node: <FaNodeJs />,
  mysql: <SiMysql />,
  aws: <SiAmazonaws />,
  adonis: <SiAdonisjs />,
  next: <TbBrandNextjs />,
  react: <BiLogoReact />,
  vue: <BiLogoVuejs />,
  angular: <BiLogoAngular />,
  csharp: <SiCsharp />,
  dotnet: <SiDotnet />,
  express: <SiExpress />,
  nest: <SiNestjs />,
  docker: <SiDocker />,
  git: <FaGitSquare />,
  devops: <FaCloudUploadAlt />,
};

export const techLabel = {
  node: 'Node.js',
  next: 'Next.js',
  csharp: 'C#',
  dotnet: '.NET',
  express: 'ExpressJS',
  nest: 'NestJS',
  adonis: 'AdonisJS',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  tailwind: 'Tailwind',
  aws: 'AWS',
  mysql: 'MySQL',
  wordpress: 'WordPress',
  php: 'PHP',
  html: 'HTML',
  css: 'CSS',
  jquery: 'jQuery',
  react: 'ReactJS',
  vue: 'VueJS',
  angular: 'AngularJS',
  docker: 'Docker',
  git: 'GitFlow',
  devops: 'DevOps',
};

export const TechChip = ({ tech }) => (
  <span className="skill">
    <span className="skill-icon" aria-hidden="true">
      {techIcons[tech] || null}
    </span>
    <span>{techLabel[tech] || tech}</span>
  </span>
);
