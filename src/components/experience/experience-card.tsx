import Image from 'next/image';
import { Text } from '../text';
import { ExperienceType } from '../../contents/my-experience';
import Link from 'next/link';
interface Props extends ExperienceType {
  index: boolean;
}
export const ExperienceCard = ({
  companyName,
  date,
  description,
  linkToCompany,
  logoLink,
  index
}: Props) => {
  const style = index
    ? 'h-full py-7 rounded-2xl text-white border border-green px-6 space-y-7'
    : 'h-full bg-zinc-800/100 py-7 rounded-2xl text-primary-foreground px-6 space-y-7';
  return (
    <Link href={linkToCompany} target="_blank">
      <div className="space-x-5">
        <div className="h-full text-primary-foreground">
          <div className={style}>
            <div className="flex items-center space-x-7">
              <div className="aspect-square h-16 w-16 rounded-full bg-lightestSlate">
                <Image
                  src={logoLink}
                  alt={companyName}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex w-full justify-between">
                <div>
                  <Text size="h4" weight="semiBold" className="tracking-wider">
                    {companyName}
                  </Text>
                </div>
                <div>
                  <Text size="h6" weight="default" className="text-green">
                    {`"`} {date}
                    {`"`}
                  </Text>
                </div>
              </div>
            </div>
            <div>
              <Text size="p2" weight={'thin'} className="indent-10 text-slate">
                {description}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
