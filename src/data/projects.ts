export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Learn to Cloud",
    techs: ["ReactJS (Docusaurus)", "Azure", "DevOps"],
    link: "https://learntocloud.guide",
  },
  {
    title: "The DevOps Guide",
    techs: ["ReactJS (NextJS)", "AWS", "DevOps"],
    link: "https://thedevops.guide/",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
