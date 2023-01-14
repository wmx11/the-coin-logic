export type Annotation = {
  title: string | null;
  description: string | null;
  href: string | null;
};

export type TransformedChartsData = {
  data: [number, number][];
  annotation: {
    x: number;
    title: string;
    text: string;
    events: {
      click: () => void;
    };
  }[];
};
