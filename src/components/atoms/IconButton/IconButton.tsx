import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";

export interface IconButtonProps extends FontAwesomeIconProps {
  onClick: () => void;
}

export default function IconButton({ onClick, ...props }: IconButtonProps) {
  return (
    <button className="icon-button" onClick={onClick}>
      <FontAwesomeIcon {...props} className="icon-button__icon" />
    </button>
  );
}
