import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import { Formik, useFormik } from "formik";
import { ModalClose } from "@mui/joy";
import MuiInput from "../MuiComponents/MuiInput";
import { MuiButton } from "../MuiComponents/MuiButton";

export default function AddFamilyModal({ open, setOpen, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      spouse: "",
      location: "",
      year: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log({ values });
      onSubmit(values);
    },
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        sx={{
          maxWidth: 500,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
        color="success"
        layout="center"
        size="lg"
        variant="outlined"
      >
        <ModalClose />
        <Typography
          id="basic-modal-dialog-title"
          component="h2"
          level="inherit"
          fontSize="1.25em"
          mb="1em"
        >
          Add new family
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit();
            setOpen(false);
          }}
        >
          <Stack spacing={2}>
            <MuiInput
              label={"Name"}
              name={"name"}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <MuiInput
              label={"Spouse"}
              name={"spouse"}
              onChange={formik.handleChange}
              value={formik.values.spouse}
            />
            <MuiInput
              label={"Location"}
              name={"location"}
              onChange={formik.handleChange}
              value={formik.values.location}
            />
            <MuiInput
              label={"Birth Year"}
              type={"number"}
              name={"year"}
              onChange={formik.handleChange}
              value={formik.values.year}
            />
            <MuiInput
              label={"Address"}
              name={"address"}
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <Button type="submit" sx={{ border: "1px #CBD5E1 solid" }}>
              Add Family
            </Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
}
