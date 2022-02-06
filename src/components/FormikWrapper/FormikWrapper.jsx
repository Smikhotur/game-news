import { Formik, useFormik } from 'formik';
import React from 'react';

const FormikWrapper = ({
  initialValues,
  validationSchema,
  Component,
  handleSubmit,
  ...rest
}) => {
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleSubmit,
  });

  return (
    <Formik>
      <Component formik={formik} options={rest.options} {...rest} />
    </Formik>
  );
};

export default FormikWrapper;
