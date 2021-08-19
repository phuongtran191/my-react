import { Button, FormGroup, Label } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import React from 'react';
import * as Yup from "yup";

import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";

import "./styles.scss";


function PhotoForm(props) {
  const { initialValues, isAddMode } = props;
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required!"),
    categoryId: Yup.number().required("This field is required!").nullable(),
    photo: Yup.string().required("This field is required!")
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        // do something ...
        const { values, errors, touched } = formikProps;

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              type="text"
              label="Title"
              placeholder="Enter any title ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              options={PHOTO_CATEGORY_OPTIONS}
              label="Category"
              placeholder="What's your photo category ?"
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isAddMode ? "Add to album" : "Update photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};
export default PhotoForm;