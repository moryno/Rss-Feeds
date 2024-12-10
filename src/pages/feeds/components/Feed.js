import {
  StyledFeedCard,
  StyledFeedDate,
  StyledFeedWrapper,
} from "../index.styled";

const Feed = ({ feed }) => {
  return (
    <StyledFeedCard>
      <StyledFeedWrapper>
        <h2>{feed.title}</h2>
        <StyledFeedDate>{feed.pubDate}</StyledFeedDate>
        <p>{feed.contentSnippet}</p>
      </StyledFeedWrapper>
    </StyledFeedCard>
  );
};

export default Feed;
