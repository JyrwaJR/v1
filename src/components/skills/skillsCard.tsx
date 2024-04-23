import { cn } from "@src/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Icons from "../icon";
import { Text } from "../text";

const SkillsCardVariants = cva("aspect-square w-44", {
  variants: {
    variant: {
      default:
        "bg-green rounded-md h-full text-background text-primary-foreground shadow",
      outline:
        "border-2 rounded-md border  text-green hover:text-green border-green bg-background shadow-sm hover:bg-accent",
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

interface SkillsCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof SkillsCardVariants> {
  iconName: string;
  variant?: "default" | "outline";
}
export const SkillsCard = ({ iconName, name, variant }: SkillsCardProps) => {
  return (
    <div
      className={cn(
        SkillsCardVariants({
          variant: variant,
        })
      )}
    >
      <div className="flex space-y-8 flex-col w-full h-full items-center justify-center">
        <div>
          <Icons name={iconName} className="w-16 h-16" />
        </div>
        <div>
          <Text
            size={"h5"}
            weight={"semiBold"}
            className="capitalize tracking-wide text-center"
          >
            {name}
          </Text>
        </div>
      </div>
    </div>
  );
};
