'use client'
import styles from "./styles.module.css"
import React from "react";
import { jsPDF} from "jspdf";
import { toPng } from "html-to-image";

interface  Props {
  username: string
  course: string
  phase: string
  classRoom: string
  html: React.MutableRefObject<HTMLDivElement>;

};

const GeneratePdf = ({ html, username, classRoom, course, phase,  }: Props) => {


  const generateImage=async ()=>{
    const fileName = username + '-' + course + '-' + phase + '-' + classRoom
    const image = await toPng(html.current,{quality:1, cacheBust: true})
    const doc = new jsPDF();

      doc.addImage(image,'JPEG',5,22,200,160);
      doc.save(fileName);


  }
  return (

    <div className= { styles['button-container']}>
      <button className={ styles.btn} onClick={generateImage}>
        Gerar Pdf
      </button>
    </div>

  );
};

export default GeneratePdf;