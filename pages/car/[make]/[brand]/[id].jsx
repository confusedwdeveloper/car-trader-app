import ConnectToDB from "../../../../database/db";
import Car from "../../../../database/models/Car";
import connectToDB from "../../../../database/db";
import Layout from "../../../../src/components/Layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },

  img: {
    width: "100%",
  },
}));

export default function CarDetails({ car }) {
  const classes = useStyles();
  if (!car) {
    return <h1>Sorry, car not found!</h1>;
  }
  return (
    <Layout title={`${car.make} | ${car.model}` || "Car Details"}>
      <Box mt={3} component="article">
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={5} item>
              <img className={classes.img} alt={car.make} src={car.photoUrl} />
            </Grid>
            <Grid item xs={12} sm={6} md={7} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="h5">
                    {car.make + " " + car.model}
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    ${car.price}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                  >
                    Year: {car.year}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                  >
                    KMs: {car.kilometers}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                  >
                    Fuel: {car.fuelType}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="textSecondary"
                  >
                    Details: {car.details}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  await connectToDB;
  let car;
  try {
    car = await Car.findById(id).lean();
  } catch (err) {
    return {
      props: {
        car: null,
      },
    };
  }
  return {
    props: {
      car: JSON.parse(JSON.stringify(car)),
    },
  };
};
