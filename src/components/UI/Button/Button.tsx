import { Sbutton } from "./Button.style";

type TButtonProps = {
    buttonText: string;
};

export const SButton = ({ buttonText }: TButtonProps) => {
    return <Sbutton>{buttonText}</Sbutton>;
};
