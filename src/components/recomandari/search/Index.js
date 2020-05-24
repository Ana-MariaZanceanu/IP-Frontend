import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBarComp from "../../comenzi&rezervari/mainPage/NavBarComp";
import FooterComp from "../../comenzi&rezervari/mainPage/FooterComp";
import RestaurantCard from "../../comenzi&rezervari/mainPage/RestaurantCard";
import { chunk, uniqBy } from "lodash";
import { withRouter } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import "./style.css";

const SEARCH_API_URL =
  "https://still-anchorage-92193.herokuapp.com/search/restaurant";

const Search = ({ location }) => {
  const [searchResultItems, setSearchResultItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { search } = location;
  search = new URLSearchParams(search).get("q");

  useEffect(() => {
    const getSearchResultItems = async (search) => {
      setIsLoading(true);
      setSearchResultItems([]);
      try {
        const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiX2lkIjoiNWViY2U5MWEyNmUzMjUxN2M0NmVmZmVkIn0.eu0f5Vv_h8OYaslYyXKdb_2Rl8hv9FPnH3dXXEQzykQ`;
        const { data } = await axios({
          url: `${SEARCH_API_URL}/${search}`,
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        if (data["success"] && data["success"] === "true") {
          setSearchResultItems(uniqBy(data["data"], "_id"));
        }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    getSearchResultItems(search);
  }, [search]);

  let searchResults = null;
  if (!search) {
    searchResults = <h2>No search entry.</h2>;
  } else if (isLoading) {
    searchResults = <h2>Loading...</h2>;
  } else if (!searchResultItems.length) {
    searchResults = <h1>No results for: "{search}"</h1>;
  } else {
    searchResults = (
      <>
        <h2>
          {searchResultItems.length} restaurant
          {searchResultItems.length > 1 && "s"}
        </h2>
        <hr />
        {chunk(searchResultItems, 3).map((resultChunk) => (
          <Row>
            {resultChunk.map((resultItem) => (
              <Col xs={4} key={resultItem._id}>
                <RestaurantCard
                  id={resultItem._id}
                  title={resultItem.name}
                  d
                  desc={
                    resultItem.details.description ||
                    "Our restaurant is a place where you will be warmly welcomed. The menu offers a broad spectrum of flavours that you will fall in love with."
                  }
                  img={resultItem.details.images[0]}
                />
              </Col>
            ))}
          </Row>
        ))}
      </>
    );
  }
  return (
    <>
      <NavBarComp />
      <div className="search-page">
        <Container>{searchResults}</Container>
      </div>
      <FooterComp />
    </>
  );
};
export default withRouter(Search);
