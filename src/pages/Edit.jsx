import React, { createRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../Component/Text';
import Button from 'react-bootstrap/Button'; // Correct import for Button from react-bootstrap
import {exportComponentAsPNG } from 'react-component-export-image';
import '../App.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Edit() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
    console.log(count);
  };

  const memref = createRef();
  return (
    <>
      <div className='meme mt-5 mb-5'>
        <div ref= {memref} style={{width: "500px", border:"1px solid", }}>
          <img src={params.get('url')} style={{height:"250px", width: '250px' }} alt="image" />
          {Array(count)
            .fill(0)
            .map((_, index) => (
              <Text key={index} />
            ))}
        </div>
        <Button onClick={addText}>Add text</Button>
        <Button onClick={(e)=>{
            exportComponentAsPNG(memref)
        }} variant='success' style={{margin: "10px"}}>Save</Button>
      </div>
    </>
  );
}
