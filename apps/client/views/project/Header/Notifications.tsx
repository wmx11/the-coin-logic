import NotificationBar from 'components/NotificationBar';
import React, { FC } from 'react';
import { Project } from 'types';
import { getStartsIn } from 'utils/events';
import { formateDateWithHours } from 'utils/formatters';

type NotificationsProps = {
  project: Project;
};

const Notifications: FC<NotificationsProps> = ({ project }) => {
  const { notifications, isPreLaunch, launchDate } = project;

  const preLaunchNotification = (
    <NotificationBar
      notification={{
        type: 'info',
        content: `<p>${project?.name} hasn't launched yet. </p>
    <p>The estimated launch or pre-sale date is <strong>${formateDateWithHours(launchDate) || 'Unknown'} ${
          launchDate ? `<span>(${getStartsIn({ startDate: launchDate, checkEnd: false })})</span>` : ''
        }</strong> </p>`,
        id: 'pre_launch',
      }}
    />
  );

  const regularNotifications = notifications?.map((notification, index) => (
    <NotificationBar notification={notification} key={`notification_${index}`} />
  ));

  const renderNotifications = () => {
    if (isPreLaunch) {
      return preLaunchNotification;
    }

    if (notifications && notifications?.length) {
      return regularNotifications;
    }

    return null;
  };

  return <div className="sticky top-[10px] z-[11]">{renderNotifications()}</div>;
};

export default Notifications;
