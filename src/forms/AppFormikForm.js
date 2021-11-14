/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import { Formik } from 'formik'

export default function AppFormikForm({children, initialValues, onSubmit}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                {children}
              </>
            )}
          </Formik>
    )
}
