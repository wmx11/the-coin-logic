type Session = {
  data: {
    id: string;
    name: string;
    isAdmin?: boolean;
    roles: {
      isAdmin?: string;
      isModerator?: string;
      isEditor?: string;
    }[];
  };
};

type Roles = {
  isAdmin: boolean;
  isModerator: boolean;
  isEditor: boolean;
};