import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api_service";
import { Box, Container, Typography } from "@mui/material";
import Videos from "../../video/Videos";
import Loader from "../loader/Loader";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Box p={2} sx={{ height: "90vh" }}>
          <Container maxWidth={"90%"}>
            <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
              Search result for <span style={{ color: "brown" }}>{id} </span>
              videos
            </Typography>
            <Videos videos={videos} />
          </Container>
        </Box>
      )}
    </div>
  );
};

export default Search;
