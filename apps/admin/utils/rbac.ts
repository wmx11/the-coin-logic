export const isUser = ({ session }: { session: Session }) => !!session?.data.id;

export const isAdmin = ({ session }: { session: Session }) =>
  !!session?.data.isAdmin || !!session?.data.roles.find((item) => item.isAdmin);

export const isPerson = ({ session, item }: { session: Session; item: { id: string } }) => session?.data.id === item.id;

export const isAdminOrPerson = ({ session, item }: { session: Session; item: { id: string } }) =>
  isAdmin({ session }) || isPerson({ session, item });

export const isModerator = ({ session }: { session: Session }) =>
  !!session?.data.roles.find((item) => item.isModerator);

export const isEditor = ({ session }: { session: Session }) => !!session?.data.roles.find((item) => item.isEditor);
