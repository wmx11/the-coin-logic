import fs from 'fs';
import path from 'path';

const getMdxListFromDir = (path: string) => fs.readdirSync(path).filter((path) => /\.mdx?$/.test(path));

export const MDX_PATH = path.join(process.cwd(), 'markdown');
export const MDX_SERVICES_PATH = path.join(MDX_PATH, 'services');

export const mdxFilePaths = getMdxListFromDir(MDX_PATH);
export const mdxServicesPaths = getMdxListFromDir(MDX_SERVICES_PATH);
