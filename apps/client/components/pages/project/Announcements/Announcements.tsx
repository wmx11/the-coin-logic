import { Divider, Paper, Text, Title } from '@mantine/core';
import React from 'react';

function Announcements() {
  return (
    <Paper p="md" shadow="sm" withBorder>
      <Title order={4} className="mb-4 text-lightBlue">
        Latest Announcements
      </Title>

      <div className="mb-4">
        <Title order={6} className="text-lightBlue">
          Weekly Summary
        </Title>
        <Text className="text-slate-500 mb-4 text-xs">2022-10-10 10:10</Text>
      </div>
      <div className="mb-4">
        <Title order={6} className="text-lightBlue">
          Weekly Summary
        </Title>
        <Text className="text-slate-500 mb-4 text-xs">2022-10-10 10:10</Text>
      </div>
      <div className="mb-4">
        <Title order={6} className="text-lightBlue">
          Weekly Summary
        </Title>
        <Text className="text-slate-500 mb-4 text-xs">2022-10-10 10:10</Text>
      </div>

      <Divider
        my="xs"
        labelPosition="center"
        label="Get more"
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
    </Paper>
  );
}

export default Announcements;
