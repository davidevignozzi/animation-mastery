interface Project {
  name: string;
  description: string;
  codeLink: string;
  link: string;
}

const project1: Project = {
  name: 'trial',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quo ullam qui illum nisi optio repellat earum ad commodi deserunt magni molestias laudantium eaque sint quos voluptatum accusamus, error doloremque!',
  codeLink: '/',
  link: '/projects/trial'
};

const TextGradientOpacityOnScrollProject: Project = {
  name: 'Text Gradient Opacity on Scroll',
  description:
    'A web animation tutorial featuring a gradient text scroll opacity effect using Nextjs and Framer Motion.',
  codeLink: '/',
  link: '/projects/text-gradient-opacity-on-scroll'
};

export const projectsArray: Project[] = [
  project1,
  TextGradientOpacityOnScrollProject
];
