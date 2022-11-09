import { Paper, Text } from '@mantine/core';
import React, { FC } from 'react';
import { AiFillAlert } from 'react-icons/ai';
import { FiInfo } from 'react-icons/fi';
import { IoWarningOutline } from 'react-icons/io5';
import { Notification } from 'types';

type NotificationBarProps = {
  notification: Notification;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mb?: '0' | '1' | '2' | '4';
};

const NotificationBar: FC<NotificationBarProps> = ({ notification, size = 'md', mb = '4' }) => {
  if (!notification) {
    return null;
  }

  const type = {
    info: { color: 'bg-blue-500 text-white', icon: <FiInfo size={20} /> },
    warning: { color: 'bg-orange-500 text-white', icon: <IoWarningOutline size={20} /> },
    alert: { color: 'bg-red-500 text-white', icon: <AiFillAlert size={20} /> },
  };

  const notificationType = type[notification.type as keyof typeof type] || type.info;

  return (
    <Paper className={`${notificationType.color} flex items-center flex-wrap gap-2 mb-${mb}`} p={size} shadow="md">
      <div>{notificationType.icon}</div>
      <div>
        <Text size={size}>
          <div dangerouslySetInnerHTML={{ __html: notification.content as string }}></div>
        </Text>
      </div>
    </Paper>
  );
};

export default NotificationBar;
