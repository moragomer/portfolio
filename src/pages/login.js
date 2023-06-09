import React from "react";
import { useFormik } from "formik";
import { Input, Snackbar, Alert } from "@mui/material";
import * as Yup from "yup";
import spacing from "../components/styles/spacing";
import { Button } from "../components/Buttons/buttons";
import colors from "../components/styles/colors";
import { userData } from "../components/data";
import { H2, P } from "../components/styles/typography";
import { Flex } from "../components/input";
import { useState } from "react";

const checkUser = (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.username === "omerm" && values.password === "helloworld")
        resolve(true);
      reject(false);
    }, 500);
  });
};

export const Login = (props) => {
  const [open, setOpen] = useState();
  const [error, setError] = useState();
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setError(false);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Must be at least 2 characters or more")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      formik.setSubmitting(true);
      checkUser(values)
        .then(() => {
          setOpen(true);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    },
  });
  return (
    <div>
      <Flex flexDirection={"column"} alignItems={"center"} gap={spacing.s}>
        <H2>Welcome</H2>
        <P>Please use your details to login</P>
      </Flex>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: spacing.lg,
          width: 450,
          border: `1 solid ${colors.action}`,
          borderRadius: 16,
          backgroundColor: colors.white,
          boxShadow: `1px 2px 9px rgba(0, 0, 0, 0.2)`,
          padding: 24,
          marginRight: "auto",
          marginTop: 32,
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: spacing.xs,
            maxWidth: 360,
          }}
        >
          <label htmlFor="name">User name</label>

          <Input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{ width: 360 }}
            color={formik.errors.username ? "error" : "primary"}
          />
          {formik.errors.username ? (
            <div style={{ color: "red" }}>{formik.errors.username}</div>
          ) : null}
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: spacing.xs,
            maxWidth: 360,
          }}
        >
          <label htmlFor="name">Password</label>

          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{ width: 360 }}
          />
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </section>
        <Button
          variant="primary"
          buttonSize="md"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
          style={{
            width: 360,
          }}
        >
          Login
        </Button>
      </form>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          //   message="Note archived"
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Logged-in
          </Alert>
        </Snackbar>
        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={handleClose}
          //   message="Note archived"
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            User name and password are incorrect{" "}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
