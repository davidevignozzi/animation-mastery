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

export const projectsArray: Project[] = [project1];
