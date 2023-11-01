import React from "react";
import { LocationOnIcon } from "@material-ui/icons";
import {
  Box,
  Typography,
  Card,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Chip
} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from '@material-ui/lab';
import useStyles from "./styles";

const PlaceDetails = ({ place,selected,refProp}) => {
  const classes = useStyles();
  if(selected) refProp ?.current ?. scrollIntoView(false)
  
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
          <Rating  value={Number(place.rating)} readOnly={true} />
          <Box display='flex' justifyContent='space between'>
          <Typography variant="subtitle1">Out of {place.num_reviews} reviews</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
          </Box>
          {
  place.address && (
    <Typography
      
      gutterBottom
      variant="subtitle2"
      color="textSecondary"
      className={classes.spacing}
    >
      <LocationOnOutlined />
      {place.address}
    </Typography>
  )
}
       
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>

    </Card>
  );
};
export default PlaceDetails;
