import { useNavigate } from 'react-router-dom';

const NavCard = ({category}) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);


	return (
		<>
			
			<div>
				<div>

					<img src={imageUrl} alt={title} />
						
				</div>
				<button onClick={onNavigateHandler}>{title}</button>
			</div>
			
			</>


	)
}

export default NavCard;


