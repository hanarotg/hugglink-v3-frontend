import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItemButton } from '@mui/material';

import axios from 'axios';

const HuggPageList = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const getList = async () => {
      try {
        const tmpList = await axios.get(
          `${process.env.REACT_APP_BACKEND}/pages/list/1`
        );
        setList(tmpList.data);
      } catch (e) {
        setList(null);
      }
    };

    getList();
  }, []);

  return (
    <Container>
      <List>
        {list &&
          list.map((data) => (
            <ListItemButton
              key={data._id}
              component={Link}
              to={`/pages/${data.title}`}
            >
              {data.title}
            </ListItemButton>
          ))}
      </List>
    </Container>
  );
};

export default HuggPageList;
