import React, { useState } from "react";
import { Button, Card, CardContent, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    color: "white",
    backgroundColor: "green",
    "&.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.26)",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      justifyContent: "normal",
      cursor: "pointer"
    }
  },
  root: {
    flexGrow: 1,
    padding: "20px"
  },
  cardClass: {
    display: "flex",
    width: "200px",
    height: "160px"
  }
}))
function CreateExercises(props) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { name } = props;
  const [cityEntityID, setCityEntityID] = useState("");
  const [eateryList, setEateryList] = useState([]);
  const URL1 = "https://developers.zomato.com/api/v2.1/cities?q="
  const URL2 = "https://developers.zomato.com/api/v2.1/search?entity_id="
  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleClick = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "user-key": "573bacb6fd7f3d8f239310f05e92c123"
      }
    };
    let cityID;
    await fetch(URL1 + text, requestOptions).then(response => response.json())
      .then((data) => { cityID = data.location_suggestions; setCityEntityID(cityID[0].id); });
    //console.log("***cityEntityID", cityEntityID);
  }

  const findResults = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "user-key": "573bacb6fd7f3d8f239310f05e92c123"
      }
    };
    await fetch(URL2 + cityEntityID + "&entity_type=city&q=" + text, requestOptions)
      .then(response => response.json())
      .then(data => { setEateryList(data.restaurants); console.log("****", data.restaurants[0].restaurant.name) });
  }

  const returnList = () => {
    console.log("***earteryList:-", eateryList[0])
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {eateryList.map((item, index) => (
            //console.log(index, item.restaurant.name)
            <Grid item xs>
              <Card key={index} className={classes.cardClass}>
                <CardContent>
                  {item.restaurant.name}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

  return (
    <div>
      <h3>HELLO {name}</h3>
      <input placeholder="enter city name here" onChange={handleChange} />
      <Button variant="contained"
        color="primary"
        className={classes.buttonStyle}
        onClick={handleClick}
        disabled={text ? false : true}>
        Click me!!!
         </Button>
      <p>{cityEntityID}</p>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonStyle}
        onClick={findResults}
        disabled={cityEntityID ? false : true}>
        Find Restaurants!!
        </Button>
      {returnList()}
    </div>
  );
}
export default CreateExercises;
