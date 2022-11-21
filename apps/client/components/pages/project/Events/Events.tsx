import { Divider, Text, Title } from '@mantine/core';
import Paper from 'components/Paper';
import React, { FC } from 'react';
import { Project } from 'types';

type EventsProps = {
  data: Project;
};

const Events: FC<EventsProps> = ({ data }) => {
  if (!data || !data.calendar) {
    return null;
  }

  return (
    <div>
      <Paper>
        <Title order={4}>Events</Title>

        <Divider size={1} my={8} />

        <div className="mb-4">
          <iframe
            className="w-full min-h-[400px]"
            src={`${data.calendar}&ctz=${encodeURIComponent(
              Intl.DateTimeFormat().resolvedOptions().timeZone,
            )}&mode=AGENDA&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=1&showTitle=1`}
          ></iframe>
        </div>

        <Text size="xs" color="dimmed">
          Events displayed here are taken from the {data.name} Discord server.
        </Text>
      </Paper>
    </div>
  );
};

export default Events;
