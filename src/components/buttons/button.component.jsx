import { 
	BaseButton, 
	NavCardButton, 
	CardImgButton, 
	IconButton,
	IconButtonInverted,
	ReactionHistoryButton,
	UserReactionsButton, 
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
	base: 'base',
	navcard: 'nav-card-button',
	icon: 'icon-button',
	invertedicon: 'inverted-icon-button',
	card: 'card-image-button',
	reactionhistory: 'reaction-history-button',
	userreactions: 'user-reactions-button'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
	{
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.navcard]: NavCardButton,
		[BUTTON_TYPE_CLASSES.icon]: IconButton,
		[BUTTON_TYPE_CLASSES.invertedicon]: IconButtonInverted,
		[BUTTON_TYPE_CLASSES.card]: CardImgButton,
		[BUTTON_TYPE_CLASSES.reactionhistory]: ReactionHistoryButton,
		[BUTTON_TYPE_CLASSES.userreactions]: UserReactionsButton,
	}[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return (
	<CustomButton {...otherProps}>{children}</CustomButton>
	);
};

export default Button;
