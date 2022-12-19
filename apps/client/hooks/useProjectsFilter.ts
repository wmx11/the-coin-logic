import { getEnabledAndListedProjectsForFiltering } from 'data/getters';
import { useEffect, useState } from 'react';
import { Project } from 'types';

const useProjectsFilter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [projects, setProjects] = useState<Project[]>();

  const getProjects = async () => {
    setIsLoading(true);
    const projects = await getEnabledAndListedProjectsForFiltering();
    const sortedProjects = [...projects];
    sortedProjects?.sort((a, b) => a.name.localeCompare(b.name));
    setProjects(sortedProjects);
    setIsSet(true);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isSet) {
      return;
    }
    getProjects();
  }, [isSet]);

  return { projects, isSet, isLoading };
};

export default useProjectsFilter;
