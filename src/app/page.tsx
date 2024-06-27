'use client';
import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";

export default function Home() {
    const [showMe, setShowMe] = useState(false);

    function toggle(){
        setShowMe(!showMe);
    }

  return (
    <div className="div">
        <button onClick={toggle} className="btn btn-primary mt-3 mb-5 mx-auto d-block">Change</button>
        <div style={{display: showMe?"block":"none"}}>
            <Form2></Form2>
        </div>
        <div style={{display: showMe?"none":"block"}}>
            <Form1></Form1>
        </div>
    </div>
  );
}
