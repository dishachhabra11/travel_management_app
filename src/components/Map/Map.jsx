import React, { useState} from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates ,places,setChildClicked}) => {
  const classes = useStyles();
 


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDPiqkiCJ_RPZTjVRNvaOEbW94i-Bs0W-0" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
        }}
        onChildClick={(child)=>setChildClicked(child)}
      >
        {places?.length && places.map((places,i)=>(
          <div className={classes.markerContainer}
          lat={Number(places.latitude)}
          lng={Number(places.longitude)}
          key={i}
          
          >
     
      (
        <LocationOnOutlinedIcon color="primary" fontSize="large"/>
      ):(
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.typography} variant="subtitle2" gutterBottom>
            {places.name}
          </Typography>
          <img 
          className={classes.pointer} src={ places.photo
            ? places.photo.images.large.url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvvk4IR-x_g9VYXLQJUtSbhdM6J5zFVuC-Q&usqp=CAU"}
            alt={places.name}/>
            <Rating size="small" value={Number(places.rating)} readOnly={true} />
        </Paper>
      )
     
             

              
            

          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
