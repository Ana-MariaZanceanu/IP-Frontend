import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBarComp from '../../comenzi&rezervari/mainPage/NavBarComp';
import FooterComp from '../../comenzi&rezervari/mainPage/FooterComp';
import RestaurantCard from '../../comenzi&rezervari/mainPage/RestaurantCard';
import { chunk } from 'lodash';
import { Row, Container, Col } from 'react-bootstrap';
import './style.css';

const SEARCH_API_URL = 'http://159.65.247.164/search/restaurant';

export default ({ location }) => {
  const [searchResultItems, setSearchResultItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { search } = location;
  search = new URLSearchParams(search).get('q');

  const getSearchResultItems = async (search) => {
    setIsLoading(true);
    try {
      // const TOKEN = localStorage.getItem('userToken');
      const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiX2lkIjoiNWViY2U5MWEyNmUzMjUxN2M0NmVmZmVkIn0.eu0f5Vv_h8OYaslYyXKdb_2Rl8hv9FPnH3dXXEQzykQ`;
      const { data } = await axios({
        url: `${SEARCH_API_URL}/${search}`,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setSearchResultItems([data['data']['name_recommended_restaurant']]);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getSearchResultItems(search);
  }, [search]);

  let searchResults = null;
  if (!search) {
    searchResults = <h2>Nu ai cautat nimic.</h2>;
  } else if (isLoading) {
    searchResults = <h2>Se incarca...</h2>;
  } else if (!searchResultItems.length) {
    searchResults = <h1>Nu exista rezultate ale cautarii: "{search}"</h1>;
  } else {
    searchResults = (
      <>
        <h2>
          {searchResultItems.length} restaurant{searchResultItems.length > 1 && 'e'}
        </h2>
        <hr />
        {chunk(searchResultItems, 3).map((resultChunk) => (
          <Row>
            {resultChunk.map((resultItem) => (
              <Col xs={4}>
                <RestaurantCard 
                  key={resultItem._id} 
                  id={resultItem._id} 
                  title={resultItem.name} d
                  desc={resultItem.details.description || 'Default description'} 
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
