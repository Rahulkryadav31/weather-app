import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image_test from "/vite.svg";
import "./infoBox.css";
import { convertLength } from "@mui/material/styles/cssUtils";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1673191898498-9bac443b2407?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1633191581245-b417549a5d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxjb2xkJTIwd2VhdGhlcnxlbnwwfHwwfHx8Mg%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1429277158984-614d155e0017?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1429552054921-018e433d7d34?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const { city, feelsLike, humidity, temp, tempMax, tempMin, weather, image } =
    info;

  const imageUrl =
    info.humidity > 80 ? RAIN_URL : temp > 15 ? HOT_URL : COLD_URL;

  console.log("Selected Image URL:", imageUrl);

  return (
    <>
      <div className="InfoBox">
        <div className="cardcontainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              style={{ height: 30, width: 30, paddingTop: "56.25%" }}
              sx={{ height: 140 }}
              image={imageUrl}
              title="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature={temp}&deg;C</p>
                <p>Humidity={humidity}</p>
                <p>Min Temp={tempMin}&deg;C</p>
                <p>Max Temp={tempMax}&deg;C</p>
                <p>
                  The weather can be described as <i>{info.weather}</i> and
                  feels Like {info.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
