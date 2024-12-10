import { useCallback, useEffect, useState } from "react";
import Parser from "rss-parser/dist/rss-parser.min.js";
import {
  StyledFeedContainer,
  StyledFeedsList,
  StyledFeedsWrapper,
  StyledFeedTitle,
} from "./index.styled";
import SearchComponent from "./components/SearchComponent";
import Feed from "./components/Feed";
import PaginationComponent from "./components/Pagination";

// Display title, desc, date
// Searchable
// pagination
// loading

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [feedsPerPage] = useState(5);

  const getRssFeed = useCallback(async () => {
    const parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    try {
      parser.parseURL(
        CORS_PROXY + "https://news.ycombinator.com/rss",
        function (err, feed) {
          if (err) {
            setError(err.message);
            setLoading(false);
            return;
          }
          setFeeds(feed.items);
          setLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getRssFeed();
  }, [getRssFeed]);

  const onSearch = useCallback((value) => {
    setSearchQuery(value);
  }, []);
  const onPageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const filteredFeeds = feeds.filter(
    (feed) =>
      feed.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feed.contentSnippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastFeed = currentPage * feedsPerPage;
  const indexOfFirstFeed = indexOfLastFeed - feedsPerPage;
  const currentFeeds = filteredFeeds.slice(indexOfFirstFeed, indexOfLastFeed);

  if (loading) {
    return <div>Loading feeds...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <StyledFeedContainer>
      <StyledFeedsWrapper>
        <StyledFeedTitle>RSS Feeds</StyledFeedTitle>
        <SearchComponent onSearch={onSearch} />
        <StyledFeedsList>
          {currentFeeds.map((feed, index) => (
            <Feed key={index} feed={feed} />
          ))}
        </StyledFeedsList>
        <PaginationComponent
          onPageChange={onPageChange}
          feeds={filteredFeeds}
          pageSize={feedsPerPage}
        />
      </StyledFeedsWrapper>
    </StyledFeedContainer>
  );
};

export default Feeds;
