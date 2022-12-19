import { Select } from '@mantine/core';
import { QUERY_PROJECT } from 'constants/general';
import useProjectsFilter from 'hooks/useProjectsFilter';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

type ProjectsFilterProps = {
  onChangeCallback?: (value: string) => Promise<void> | void;
  label?: string;
  placeholder?: string;
  description?: string;
};

const ProjectsFilter: FC<ProjectsFilterProps> = ({ label, placeholder, description, onChangeCallback }) => {
  const router = useRouter();
  const [value, setValue] = useState<string | null>(null);
  const { projects, isSet } = useProjectsFilter();

  const handleChange = (value: string) => {
    router.push({ query: { [QUERY_PROJECT]: value } });
    setValue(value);
    onChangeCallback && onChangeCallback(value);
  };

  useEffect(() => {
    setValue(router.query[QUERY_PROJECT] as string);
  }, []);

  return (
    <Select
      label={label || 'Filter by project'}
      placeholder={placeholder || 'Project'}
      description={description}
      value={value}
      onChange={handleChange}
      searchable
      nothingFound="No results"
      data={
        projects && isSet ? projects.map(({ name, slug }) => ({ label: name as string, value: slug as string })) : []
      }
    />
  );
};

export default ProjectsFilter;
