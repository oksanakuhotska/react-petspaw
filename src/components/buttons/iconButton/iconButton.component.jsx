import { 
	BaseIconButton, 
	IconButtonInverted,
	ReactionHistoryButton,
	UserReactionsButton, 
} from './iconButton.styles';

export const ICON_BUTTON_TYPE_CLASSES = {
	base: 'base',
	icon: 'icon-button',
	invertedicon: 'inverted-icon-button',
	reactionhistory: 'reaction-history-button',
	userreactions: 'user-reactions-button'
};

const getButton = (buttonType = ICON_BUTTON_TYPE_CLASSES.base) => (
	{
		[ICON_BUTTON_TYPE_CLASSES.base]: BaseIconButton,
		[ICON_BUTTON_TYPE_CLASSES.invertedicon]: IconButtonInverted,
		[ICON_BUTTON_TYPE_CLASSES.reactionhistory]: ReactionHistoryButton,
		[ICON_BUTTON_TYPE_CLASSES.userreactions]: UserReactionsButton,
	}[buttonType]
);

const IconButton = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return (
	<CustomButton {...otherProps}>{children}</CustomButton>
	);
};

export default IconButton;
