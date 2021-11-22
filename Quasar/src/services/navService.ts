interface navInterface {
  title: string;
  description?: string;
  children?: navInterface[];
}

const nav = [
  {
    title: 'SingleLineJS',
    description: 'Single line JavaScripe functions',
    children: [
      {
        title: 'TestChild',
        description: 'Test Child Content',
        children: [{ title: 'TestGrandChild', description: '' }],
      },
      { title: 'TestChildTwo', description: 'Test Child2 Content' },
    ],
  },
  {
    title: 'TestPage',
    description: 'Test Page content',
  },
];

const navService = () => {
  return {
    nav,
  };
};

export { navService, navInterface };
