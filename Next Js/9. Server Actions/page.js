"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef() // use to reset the form after submit
  return (
    <div>
      <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" />
        </div>
        
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" type="text" />
        </div>
        <div>

        <button>Submit</button>
        </div>
      </form>
    </div>
  );
}