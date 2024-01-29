import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ItemContext } from '../context/ItemContext';
import * as Yup from 'yup';

const addItemSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  photo: Yup.string().required('Photo URL is required').url('Photo must be a valid URL'),
  price: Yup.number().required('Price is required').positive('Price must be a positive number'),
  description: Yup.string().required('Description is required'),
  quantity: Yup.number().required('Quantity is required').integer('Quantity must be an integer').min(0, 'Quantity cannot be negative'),
  shipping1: Yup.boolean(),
  shipping2: Yup.boolean().oneOf([true], 'Shipping Option 2 must be enabled'),
});

const AddItemForm = () => {
  const { addItem } = useContext(ItemContext);

  return (
    <Formik
        initialValues={{
        name: '',
        category: '',
        photo: '',
        price: '',
        description: '',
        quantity: '',
        shipping1: false,
        shipping2: true
      }}
      validationSchema={addItemSchema}
      onSubmit={async (values, { resetForm }) => {
        await addItem(values);
        resetForm();
      }}
    >
      {formik => (
        <Form className="space-y-4">
          <div>
            <Field name="name" type="text" placeholder="Name" className="px-3 py-2 border rounded-md w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field name="category" type="text" placeholder="Category" className="px-3 py-2 border rounded-md w-full" />
            <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field name="photo" type="text" placeholder="Photo URL" className="px-3 py-2 border rounded-md w-full" />
            <ErrorMessage name="photo" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field name="price" type="number" placeholder="Price" className="px-3 py-2 border rounded-md w-full" />
            <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field name="description" as="textarea" placeholder="Description" className="px-3 py-2 border rounded-md w-full" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field name="quantity" type="number" placeholder="Quantity" className="px-3 py-2 border rounded-md w-full" />
            <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-1">
              <Field name="shipping1" type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span>Shipping Option 1</span>
            </label>

            <label className="flex items-center space-x-1">
              <Field name="shipping2" type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span>Shipping Option 2</span>
            </label>
          </div>
          <ErrorMessage name="shipping2" component="div" className="text-red-500 text-sm mt-1" />

          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Item</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddItemForm;

