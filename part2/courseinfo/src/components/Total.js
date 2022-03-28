const Total = ({parts}) =>{
    return (
      <div>Number of exercises {parts.reduce((sum, part)=>{
          sum = sum + part.exercises         
          return sum;
      },0)}
        </div>
    )
}

export default Total;