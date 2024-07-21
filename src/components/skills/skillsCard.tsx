import { cn } from '@src/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Icons from '@components/icon';
import { Text } from '@components/text';

const SkillsCardVariants = cva('aspect-square w-44', {
  variants: {
    variant: {
      default:
        'bg-green rounded-md h-full text-background text-primary-foreground shadow',
      outline:
        'border-2 rounded-md border  text-green hover:text-green border-green bg-background shadow-sm hover:bg-accent'
    }
  },
  defaultVariants: {
    variant: 'outline'
  }
});

interface SkillsCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof SkillsCardVariants> {
  iconName: string;
  variant?: 'default' | 'outline';
}
export const SkillsCard = ({ iconName, name, variant }: SkillsCardProps) => {
  return (
    <div
      className={cn(
        SkillsCardVariants({
          variant: variant
        })
      )}
    >
      <div className="flex h-full w-full flex-col items-center justify-center space-y-8">
        <div>
          <Icons name={iconName} className="h-16 w-16" />
        </div>
        <div>
          <Text
            size={'h5'}
            weight={'semiBold'}
            className="text-center capitalize tracking-wide"
          >
            {name}
          </Text>
        </div>
      </div>
    </div>
  );
};
