import {
  TGOOSParagraph,
  TGOOSWord
} from '@/components/text-gradient-opacity-on-scroll/TGOOSParagraph';

const paragraph =
  'A web animation tutorial made by Olivier Larose featuring a gradient text scroll opacity effect using Nextjs and Framer Motion. In this tutorial I animate a paragraph work by word modifying the opacity on scroll. Inspired by many awwwards websites.';

const TextGradientOpacityOnScroll = () => {
  return (
    <main>
      <TGOOSSpaceToScroll />
      <TGOOSParagraph value={paragraph} />
      <TGOOSSpaceToScroll />
      <TGOOSWord value={paragraph} />
      <TGOOSSpaceToScroll />
    </main>
  );
};

const TGOOSSpaceToScroll = () => {
  return <div className="h-screen"></div>;
};
export default TextGradientOpacityOnScroll;
