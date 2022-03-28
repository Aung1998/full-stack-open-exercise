import React from 'react';

const PhoneForm = (props) => {
    return (
      <div>
        <h1>Phone Form</h1>
        <form onSubmit={props.onSubmitHandler}>
          <div>
            name: <input value={props.nameValue} onChange={props.onNameChangeHandler}/>
          </div>
          <div>
            phone: <input value={props.phoneValue} onChange={props.onPhoneChangeHandler}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
}

export default PhoneForm