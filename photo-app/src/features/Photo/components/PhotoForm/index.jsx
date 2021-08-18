import { Button, FormGroup, Label } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import React from 'react';

import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import "./styles.scss";


function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
  };
    return (
        <Formik initialValues={initialValues}>
          {formikProps => {
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

                <FormGroup>
                  <Label for="categoryId">Photo</Label>
                  <div>
                    <Button type="button" outline color="primary">
                      Random a photo
                    </Button>
                  </div>
                  <div>
                    <img width="200px" height="200px" src={Images.RD_1} />
                  </div>
                </FormGroup>

                <FormGroup>
                  <Button color="primary">Add to album</Button>
                </FormGroup>
              </Form>
            );
          }}
        </Formik>
    );
};
export default PhotoForm;