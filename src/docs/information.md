# Documentation

## Technologies

The solution was implemented using vite, react and typescript.
For linting and formatting, eslint, prettier and SonarLint were used.
No state management library was used, as the application is simple enough to use useState and useEffect hooks.

## Design decisions

I decided to divide the app into two main components: `PatientList` and `PatientCard`.
`PatientList` is responsible for fetching the data from the API and rendering the `PatientCard` components, the Edit `Modal` and the Add patient `Modal`.
`PatientCard` is responsible for rendering the patient data.
`Modal` is a generic component that can be used to edit or add a patient. I decided to create
the modal using the Open/Closed principle, so it can be used for any other purpose in the future.

I decided to use a simple form validation, checking if the fields are empty or not.
If the application were to be used in a real-world scenario, I would use a more robust form validation library, such as Formik or React Hook Form, with Yup for schema validation.

I decided to use a similar color palette to the one used in the light-it website, as I believe it is a good practice to keep the colors consistent with the company's branding.
