/* eslint-disable-next-line */
export interface NxbComponentsProps {
  onClick: () => void;
  title: string;
}

export const NxbComponentsButton = ({ onClick, title }: NxbComponentsProps) => {
  return (
    <button type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default NxbComponentsButton;
