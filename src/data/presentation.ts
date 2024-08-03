type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "john.honour02@gmail.com",
  title: "Hi, I’m Onome 👋",
  //profile: "/profile.webp",
  description:
    "I am new to cloud computing and i am learning how to use VS code to develop, test and deploy application efficiency.",
  socials: [
    {
      label: "YouTube",
      link: "https://youtube.com/@efeminionome",
    },
    {
      label: "X",
      link: "https://twitter.com/johnhonour",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/ekemenaakpavie",
    },
    {
      label: "GitHub",
      link: "https://github.com/onomeefe",
    },
    
  ],
};

export default presentation;
