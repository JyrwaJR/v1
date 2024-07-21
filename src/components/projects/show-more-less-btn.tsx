import { cn } from '@src/lib/utils';
import { Button } from '../ui/button';
type Props = {
  onClick: () => void;
  isShowMore: boolean;
  className?: string;
  variant?:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};
export const ShowLessOrMoreButton = ({
  onClick,
  isShowMore = false,
  className,
  variant = 'secondary',
  size = 'lg'
}: Props) => {
  const style = cn(
    'mt-5 flex justify-center text-lightestSlate hover:text-green',
    className
  );
  return (
    <>
      <div className={style}>
        <Button
          variant={variant}
          className="text-inherit"
          size={size}
          onClick={onClick}
        >
          {isShowMore ? 'Show More' : 'Show Less'}
        </Button>
      </div>
    </>
  );
};
