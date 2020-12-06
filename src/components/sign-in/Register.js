import React, { useCallback } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link as CustomLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase-config";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Register(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      email: "rampritsahani@gmail.com",
      password: "ramprit@1234",
    },
  });
  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-icon.png", width: 40 },
    header: "Create a new account",
    terms: "I agree to the terms of use and privacy policy.",
    "01_primary-action": "Sign up",
    "01_secondary-action": "Already have an account? Sign in",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  const onSubmit = useCallback(
    (data) => {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((response) => {
          createUserProfileDocument(response.user, {
            firstName: data.firstName,
            lastName: data.lastName,
          });
          history.push("/");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [history]
  );

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {content["header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    error={!!errors.firstName}
                    fullWidth
                    name="firstName"
                    inputRef={register({ required: true })}
                    id="firstName"
                    label="First name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    error={!!errors.lastName}
                    required
                    fullWidth
                    name="lastName"
                    id="lastName"
                    inputRef={register({ required: true })}
                    label="Last name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.email}
                    name="email"
                    inputRef={register({ required: true })}
                    id="email"
                    label="Email address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.password}
                    name="password"
                    id="password"
                    label="Password"
                    inputRef={register({ required: true })}
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox name="terms" value="1" color="primary" />
                    }
                    label={content["terms"]}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {content["01_primary-action"]}
                </Button>
              </Box>
              <Box textAlign="right">
                <Link component={CustomLink} to="/login" variant="body2">
                  {content["01_secondary-action"]}
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
