import Image from "next/image";
import { Text } from "../text";
import { ExperienceType } from "./my-experience";
import Link from "next/link";
interface Props extends ExperienceType {
  index: boolean;
}
export const ExperienceCard = ({
  companyName,
  date,
  description,
  linkToCompany,
  logoLink,
  index,
}: Props) => {
  const style = index
    ? "h-full py-7 rounded-2xl text-white border border-green px-6 space-y-7"
    : "h-full bg-zinc-800/100 py-7 rounded-2xl text-primary-foreground px-6 space-y-7";
  return (
    <Link href={linkToCompany} target="_blank">
      <div className="space-x-5">
        <div className="h-full text-primary-foreground">
          <div className={style}>
            <div className="flex items-center space-x-7">
              <div className="bg-lightestSlate aspect-square h-16 w-16 rounded-full">
                <Image
                  src={logoLink}
                  alt={companyName}
                  width={64}
                  height={64}
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="flex justify-between w-full">
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
              <Text size="p2" weight={"thin"} className="text-slate indent-10">
                {description}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
