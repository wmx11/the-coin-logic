import { Project } from 'tcl-packages/types';
import sleep from 'tcl-packages/utils/sleep';
import getDiscordMembersCount from './socials/getDiscordMembersCount';
import getTelegramMembersCount from './socials/getTelegramMembersCount';
import getTwitterFollowersCount from './socials/getTwitterFollowersCount';

const getSocialStats = async (project: Project) => {
  const twitter = await getTwitterFollowersCount(project);
  await sleep(500);
  const discord = await getDiscordMembersCount(project);
  await sleep(500);
  const telegram = await getTelegramMembersCount(project);

  return { id: project.id, twitter, discord, telegram };
};

export default getSocialStats;
