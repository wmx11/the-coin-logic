import { MultiSelect } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { getPersonTags } from 'data/getters/tags';
import { useEffect, useState } from 'react';

type TagSelectProps<T> = {
  isPerson?: boolean;
  isProject?: boolean;
  form: UseFormReturnType<T>;
};

const TagSelect = <T,>({ isPerson, isProject, form }: TagSelectProps<T>) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isPerson) {
      getPersonTags().then((res) => {
        setData(res.map((item: { id: string; name: string }) => ({ value: item.id, label: item.name })));
      });
    }
  }, []);

  return (
    <div>
      <MultiSelect
        {...form.getInputProps('tags')}
        data={data || []}
        label="Tags"
        description="Choose the tags that best describe you."
        searchable
      />
    </div>
  );
};

export default TagSelect;
