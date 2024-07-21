export type ExperienceType = {
  logoLink: string;
  companyName: string;
  date: string;
  description: string;
  linkToCompany: string;
};
export const experienceList: ExperienceType[] = [
  {
    companyName: 'Junior QA Engineer at StreamAlive',
    date: 'September 2022 - Present',
    description:
      "As a Junior QA Engineer at Stream Alive, I ensure the quality and reliability of our streaming platform. My role includes testing features, identifying bugs, and collaborating with the development team to troubleshoot. I'm committed to improving our product and providing users with an exceptional streaming experience.",
    logoLink: 'https://app.streamalive.com/images/logos/logo_black.svg',
    linkToCompany: 'https://app.streamalive.com/'
  },
  {
    companyName: 'Intern at NIELIT Shillong',
    date: 'Jan 2022 - June 2022',
    description:
      'During my six-month internship at NIELIT Shillong, I gained hands-on experience in Flutter, Firebase, Tailwind CSS, and Laravel. I worked on projects including a movie app and an e-commerce platform, learning how to build and manage robust applications with RESTful APIs. This internship provided invaluable insights into handling major projects and equipped me with essential skills for software development.',
    logoLink:
      'https://nielit.gov.in/sites/all/themes/berry/images/NIELIT-Logo.png',
    linkToCompany: 'https://nielit.gov.in/'
  }
];
