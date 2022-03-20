import { useState } from "react";

const Button = ({fun, text}) => (
<div>
  <button onClick={fun}>{text}</button>
</div>
)

const StatisticLine = (props) => (
  <div>
    {props.text}: {props.value}
  </div>
)

const Review = (props) => {
  const good = props.review.good
  const normal = props.review.normal
  const bad = props.review.bad
  const all = props.review.all
  
  if(all === 0){
    return (
      <div>You still need to review!</div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="normal" value={normal}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="avenge" value={(Math.abs(good-bad)/all).toFixed(4)}/>
      <StatisticLine text="postive" value={(good/all).toFixed(4)}/>
    </div>
  )
}

const App = () => {

  const[reviews, setReview] = useState({
    good:0, 
    normal:0,
    bad: 0,
    all: 0,
  })

  const addGoodReview = () => { 
    setReview({...reviews, good: reviews.good + 1, all: reviews.all + 1})
  }

  const addNormalReview = () => { 
    setReview({...reviews, normal: reviews.normal + 1, all: reviews.all + 1})
  }

  const addBadReview = () => { 
    setReview({...reviews, bad: reviews.bad + 1, all: reviews.all + 1})
  }
  
  return (
    <div>
      <Button fun={addGoodReview} text="good"/>
      <Button fun={addNormalReview} text="normal"/>
      <Button fun={addBadReview} text="bad"/>
      <Review review={reviews}/>
    </div>
  );
}

export default App;
