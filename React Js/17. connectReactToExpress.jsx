import './App.css'
import { useForm } from "react-hook-form"

function App() { 
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()

    console.log(data, res)
  }

  return (
    <> 
       <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        
          <input placeholder='username' {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Min length is 3"}, maxLength: {value: 8, message: "Max length is 8"} })} type="text"   />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />

          <input placeholder='password' {...register("password")} type="password"/>
          <br />

          {isSubmitting && <div>Submitting...</div>}
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
       </div>
    </>
  )
}

export default App