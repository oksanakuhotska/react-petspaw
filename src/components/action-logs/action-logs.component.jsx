// import VoteImg from "../assets/images/votetable.png";
// import BreedsImg from "../assets/images/breeds.png";
// import GalleryImg from "../assets/images/gallery.png";
import { Container } from "./action-logs.styles";
import ActionLog from "../action-log/action-log.component";

const ActionLogs = () => {

  
 const actionLogs = [
  {
    id: 1,
    title: "like",
    // imageUrl: VoteImg,
    data: "15:52",
  },
  {
    id: 2,
    title: "dislike",
    // imageUrl: BreedsImg,
    data: "15:58",
  },
  {
    id: 3,
    title: "favourite",
    // imageUrl: GalleryImg,
    data: "16:15",
  },
];

  return (
    <Container>
      {actionLogs.map((actionlog) => (
        <ActionLog key={actionlog.id} category={actionlog}
          // actionlogicon={actionlogicon}
          catId={"hell"}
          time={actionlog.data}
          votingLog={actionlog.title} />
			))}
    </Container>
  );
};

export default ActionLogs;
