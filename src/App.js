import React, { useState } from 'react';

const Matrix = () => {
  // APPROACH TO DO THIS 
  //Step 1: create a matrix[3*3] with intail value=white which reflected its background color
  //Step 2: using map mathod display this matrix in grid formate 
  //Step 3: create a funtion which change the color of matrix postion(this done by taking row index ,col index )
  //  step 4: storing all click postion in array ,whenever array length==9 , then change color and display in order formate 

  // vector<vector> for matrix creation 
  const initialmat = Array(3).fill().map(() => Array(3).fill('white'));// matrix is created with white background
  const [mat, setmat] = useState(initialmat);// intiale array ,matrix in usestate to ,disaply change reflect make matrix as state variable 
  const [order, setorder] = useState([]);

  const handleClick = (row, col) => {
    if (mat[row][col] === 'orange') {
      return;
    }
    const newmat = mat.map(arr => arr.slice());
    
    newmat[row][col] = 'green';// at i,j index set elememnt value is greeen rest are remaine same 
    setmat(newmat);// now put new matrix in given matrix

    const neworder = [...order, [row, col]];// this is way to 
    setorder(neworder);
    // neworder.map((ele)=>{
    //   console.log(" row value ",ele[0]);
    // })
    if (neworder.length === 9) {
        neworder.forEach(([r, c], index) => {
          setTimeout(() => {
            setmat(prevMat => {
              const updatemat = prevMat.map(arr => arr.slice());
              updatemat[r][c] = 'orange';
              return updatemat;
            });
          }, index * 400);
  
          })
  };
 
}
const Restart=()=>{
  setTimeout(() => {
    alert("Re-directed to intial state");
  const finalmat = mat.map(arr=>arr.slice());
   for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      finalmat[i][j]='white';
    }
   }
   setorder([])
   setmat(finalmat);
  }, 200);
 
}

  return (
    <>
   
    <div style={{display:'flex',justifyContent:'center'}}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px' }}>
      {/* rendering of matrix element  */}
      {mat.map((row, rowIndex) =>// traversal in row
        row.map((ele, colIndex) => (// map method apply on array and return a component , traversal in col
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleClick(rowIndex, colIndex)}
            style={{ 
              width: '100px',
              height: '100px',
              backgroundColor: ele,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid black',
              cursor: 'pointer'
            }}
          >
            {rowIndex},{colIndex}
          </div>
        ))
      )}
    </div>
  
    </div>
    <div className='container' style={{display:'flex',justifyContent:'center',padding:'25px'}}>
      <button  style={{border:'solid 3px', borderRadius:'6px', backgroundColor:'blue'}} onClick={Restart}>Restart</button>
    </div>
    </>
  );
};
export default Matrix;