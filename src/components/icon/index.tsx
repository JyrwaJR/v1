import { cn } from '@src/lib/utils';
import JavaScriptIcon from './java-script';
import TypeScriptIcon from './type-script';
import ReactIcon from './react';
import NextJsIcon from './nextjs';
import NodeJsIcon from './nodejs';
import ExpressIcon from './express';
import NestIcon from './nest';
import MongoDbIcon from './mongodb';
import SocketIcon from './socket';
import SassIcon from './sass';
import TailwindCssIcon from './tailwindcss';
import FigmaIcon from './figma';
import CypressIcon from './cypress';
import GitIcon from './git';
import {
  DownloadIcon,
  FolderIcon,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
  ExternalLinkIcon
} from 'lucide-react';

export interface IconProps {
  name?: string;
  className?: string;
}
const Icons = ({ name, className }: IconProps) => {
  const style = cn('w-6 h-6', className);
  switch (name?.toLowerCase()) {
    case 'arrowupright':
      return <ArrowUpRight className={style} />;
    case 'download':
      return <DownloadIcon className={style} />;
    case 'folder':
      return <FolderIcon className={style} />;
    case 'github':
      return <Github className={style} />;
    case 'instagram':
      return <Instagram className={style} />;
    case 'linkedin':
      return <Linkedin className={style} />;
    case 'twitter':
      return <Twitter className={style} />;
    case 'x':
      return <Twitter className={style} />;
    case 'javascript':
      return <JavaScriptIcon className={style} />;
    case 'typescript':
      return <TypeScriptIcon className={style} />;
    case 'react':
      return <ReactIcon className={style} />;
    case 'nextjs':
      return <NextJsIcon className={style} />;
    case 'nodejs':
      return <NodeJsIcon className={style} />;
    case 'express':
      return <ExpressIcon className={style} />;
    case 'nest':
      return <NestIcon className={style} />;
    case 'mongodb':
      return <MongoDbIcon className={style} />;
    case 'socket':
      return <SocketIcon className={style} />;
    case 'sass':
      return <SassIcon className={style} />;
    case 'tailwind':
      return <TailwindCssIcon className={style} />;
    case 'figma':
      return <FigmaIcon className={style} />;
    case 'cypress':
      return <CypressIcon className={style} />;
    case 'git':
      return <GitIcon className={style} />;
    default:
      return <ExternalLinkIcon className={style} />;
  }
};
export default Icons;
