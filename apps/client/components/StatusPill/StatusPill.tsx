import { Badge } from '@mantine/core';
import React, { FC } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { MdDoneAll, MdOutlineCancel } from 'react-icons/md';
import { RiDraftFill } from 'react-icons/ri';

type StatusPillProps = {
  status: string;
};

const StatusPill: FC<StatusPillProps> = ({ status }) => {
  if (!status) {
    return null;
  }

  const getType = () => {
    switch (status) {
      case 'paid':
        return { color: 'green', label: 'Paid', icon: <BsCheck /> };
      case 'pending':
        return { color: 'orange', label: 'Pending', icon: <BiTimeFive /> };
      case 'canceled':
        return { color: 'red', label: 'Canceled', icon: <MdOutlineCancel /> };
      case 'draft':
        return { color: 'violet', label: 'Draft', icon: <RiDraftFill /> };
      case 'active':
        return { color: 'green', label: 'Active', icon: <BsCheck /> };
      case 'completed':
        return { color: 'blue', label: 'Done', icon: <MdDoneAll /> };
      default:
        return { color: 'gray', label: 'n/a', icon: '' };
    }
  };

  const { color, label, icon } = getType();

  return (
    <Badge size="sm" color={color} leftSection={icon}>
      {label}
    </Badge>
  );
};

export default StatusPill;
