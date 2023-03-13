import { 
	BaseButton, 
	NavCardButton, 
	CardImgButoon, 
	IconButton, 
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
	base: 'base',
	navcard: 'nav-card-button',
	icon: 'icon-button',
	card: 'card-image-button'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
	{
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.navcard]: NavCardButton,
		[BUTTON_TYPE_CLASSES.icon]: IconButton,
		[BUTTON_TYPE_CLASSES.card]: CardImgButoon,
	}[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return (
	<CustomButton {...otherProps}>{children}</CustomButton>
	);
};

export default Button;
