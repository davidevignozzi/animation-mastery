interface Project {
  name: string;
  description: string;
  codeLink: string;
  link: string;
  reference?: string;
}

const TextGradientOpacityOnScrollProject: Project = {
  name: 'Text Gradient Opacity on Scroll',
  description:
    'A web animation tutorial featuring a gradient text scroll opacity effect using Nextjs and Framer Motion. Tutorial by Oliver Larose',
  codeLink:
    'https://github.com/davidevignozzi/animation-mastery/tree/01_text_gradient_opacity_on_scroll',
  reference: 'https://www.youtube.com/watch?v=zqPy1bHUjrg',
  link: '/projects/text-gradient-opacity-on-scroll'
};

export const projectsArray: Project[] = [
  TextGradientOpacityOnScrollProject
];
