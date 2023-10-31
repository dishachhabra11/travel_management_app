import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvvk4IR-x_g9VYXLQJUtSbhdM6J5zFVuC-Q&usqp=CAU"
        }
        title={place.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='space between'>
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
          </Box>

          <Box display='flex' justifyContent='space between'>
          <Typography variant="subtitle1">Rating</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
          </Box>

          {
            place ?.awards ?.map(
              (award)=>{
<Box display='flex' justify='space-between'>
  <img src={award.images.small} alt={award.display_name}/>
</Box>
              }
            )
          }

      </CardContent>
    </Card>
  );
};
export default PlaceDetails;
