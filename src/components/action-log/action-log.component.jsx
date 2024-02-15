import { ActionsLogIcon, Container, TextId, Time, Text } from "./action-log.styles";
import SpriteIcon from "../icon/icon.component";

const ActionLog = ({actionlogicon, catId, time, votingLog}) => {



  return (
    <Container>
        <Time>{time}</Time>
        <Text>
        Image ID:
        <TextId>{catId}</TextId>
        was added to <span>{votingLog}</span>
        </Text>
        <ActionsLogIcon>
          <SpriteIcon icon={actionlogicon} />
        </ActionsLogIcon>
    </Container>
  );
};

export default ActionLog;
