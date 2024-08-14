// npm install react-hook-formimport { React } from 'react';
import { useForm } from "react-hook-form"

const App = () => {
  const {
    register, // When you want to add conditions in Form Input
    handleSubmit, // Pass a function you want to do while submitting
    setError, // setting Custome error message
    formState: { errors, isSubmitting }, // errors - shows error messages, isSubmitting - true when form submitted
  } = useForm();

  // Submit form after 2sec delay
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve()
      }, d*1000)
    })
  }

  const onSubmit =  async (data) => {
    await delay(2) // Simulating network delay
    console.log(data)
    
    // Set custome message when username is not 'Aditya'
    if(data.username!=="Aditya")
      setError("myForm", {message: "No Aditya No Submit"})
    return
  };

  return (
    <>
      <div className='container'>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value:3, message: "Min length is 3"}, maxLength: {value:8, message: "Max length is 8"}})} type='text' />

          {errors.username && <div>{errors.username.message}</div>}
          <br/>

          <input placeholder='password' {...register("password")} type='password'/>
          <br/>
          {isSubmitting && <div>Submitting...</div>}

          <input disabled={isSubmitting} type='submit' value='Submit' />
          
          {errors.myForm && <div>{errors.myForm.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App