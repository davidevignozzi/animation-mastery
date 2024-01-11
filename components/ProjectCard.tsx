import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

interface propsInterface {
  name: string;
  codeLink: string;
  link: string;
  description: string;
  reference?: string;
}

const ProjectCard = (props: propsInterface) => {
  const { name, codeLink, link, description, reference } = props;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {description}
          {/* Reference */}
          <a
            target="_blank"
            href={reference}
            className="text-sm text-slate-500 dark:text-slate-500"
          >
            See reference
          </a>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* Link to repo */}
        <a
          target="_blank"
          href={codeLink}
          className={buttonVariants({ variant: 'outline' })}
        >
          Code
        </a>

        <Link
          href={link}
          className={buttonVariants({ variant: 'default' })}
        >
          Visit
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
