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
}

const ProjectCard = (props: propsInterface) => {
  const { name, codeLink, link } = props;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        quo ullam qui illum nisi optio repellat earum ad commodi deserunt
        magni molestias laudantium eaque sint quos voluptatum accusamus,
        error doloremque!
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={codeLink}
          className={buttonVariants({ variant: 'outline' })}
        >
          Code
        </Link>
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
