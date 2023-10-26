import replyIcon from "../../assets/images/icon-reply.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import editIcon from "../../assets/images/icon-edit.svg";

const variantStyles: Record<Variant, string> = {
  reply: "text-userPrimary",
  edit: "text-userPrimary",
  delete: "text-userDanger",
};

const variantIcons: Record<Variant, string> = {
  reply: replyIcon,
  edit: editIcon,
  delete: deleteIcon,
};

type Variant = "reply" | "edit" | "delete";

interface Props {
  variant: Variant;
}

function RestActionButton({ variant }: Props) {
  const baseStyles = "flex items-center justify-center gap-x-2 font-medium";
  return (
    <button type="button" className={`${baseStyles} ${variantStyles[variant]}`}>
      <img src={variantIcons[variant]} alt={variant} />
      <span>{variant.charAt(0).toUpperCase() + variant.slice(1)}</span>
    </button>
  );
}

export default RestActionButton;
