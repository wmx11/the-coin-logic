import { parse } from 'node-html-parser';
import { Project } from 'tcl-packages/types';
import { request } from 'undici';
import { cache, setCache } from '../../cache';

const getTelegramMembersCount = async (project: Project): Promise<number | null> => {
  if (!project.telegram) {
    return null;
  }

  if (cache.has(project.telegram)) {
    return cache.get(project.telegram).members;
  }

  const { body } = await request(project.telegram);

  if (!body) {
    return null;
  }

  const htmlText = await body.text();

  if (!htmlText) {
    return null;
  }

  const root = parse(htmlText);

  const membersText = root.querySelector('.tgme_page_extra').textContent;

  if (!membersText) {
    return null;
  }

  const members = parseInt(membersText.split('members').shift().replace(/\s/g, ''), 10);

  setCache(project.telegram, {
    members,
  });

  return members;
};

export default getTelegramMembersCount;
