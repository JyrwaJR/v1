export const MySkill: SkillType[] = [
  {
    name: "React",
    iconName: "react",
  },
  {
    name: "Javascript",
    iconName: "javascript",
  },

  {
    name: "Git",
    iconName: "git",
  },
  {
    name: "MongoDB",
    iconName: "mongodb",
  },

  {
    name: "Tailwind",
    iconName: "tailwind",
  },

  {
    iconName: "cypress",
    name: "Cypress",
  },
];
type SkillType = {
  name: string;
  iconName: string;
  variant?: "default" | "outline";
};
