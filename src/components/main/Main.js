import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Category from "../category/Category";
import { ApiService } from "../../service/api_service";
import Videos from "../../video/Videos";
import Loader from "../loader/Loader";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      ApiService.fetching(`search?part=snippet&q=${selectedCategory}`).then(
        (data) => {
          setVideos(data.items);
          setLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [selectedCategory]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Stack>
          <Category
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Box p={2} sx={{ height: "90vh" }}>
            <Container maxWidth={"90%"}>
              <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
                {selectedCategory} <span style={{ color: "red" }}>videos</span>
              </Typography>

              <Videos videos={videos} />
            </Container>
          </Box>
        </Stack>
      )}
    </div>
  );
};

export default Main;
