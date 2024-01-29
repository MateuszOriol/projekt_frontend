import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ItemContext } from '../context/ItemContext';

const ShippingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(10, 'Address too short')
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  postalCode: Yup.string()
    .required('Required'),
  country: Yup.string()
    .required('Required')
});

const ShippingForm = () => {
  const { calculateTotalPrice } = useContext(ItemContext);
  const totalPrice = calculateTotalPrice();

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Shipping Details</h1>
      <p className="mb-4">Total Price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
      <Formik
        initialValues={{ name: '', address: '', city: '', postalCode: '', country: '' }}
        validationSchema={ShippingSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <Field name="name" placeholder="Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-4">
              <Field name="address" placeholder="Address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="address" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-4">
              <Field name="city" placeholder="City" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="city" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-4">
              <Field name="postalCode" placeholder="Postal Code" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="postalCode" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-6">
              <Field name="country" placeholder="Country" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="country" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShippingForm;
