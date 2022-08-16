const getPaginationFor = (results: number) => (perPage: number, page: number) => {
  return {
    results,
    page,
    pages: Math.ceil(results / perPage) + 1,
    perPage,
    offset: (page - 1) * perPage,
  };
};

export default getPaginationFor;
