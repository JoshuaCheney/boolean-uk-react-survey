import { useState } from "react";
// import AnswersList from './AnswersList'

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [colourRating, setColourRating] = useState("");
  const [timeWithDuck, setTimeWithDuck] = useState();
  const [duckComments, setDuckComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("State: ", { name, email });

  const handleNameInput = (event) => {
    console.log("Inside handleNameInput: ", event.target.value);

    setName(event.target.value);
  };

  const handleEmailInput = (event) => {
    console.log("Inside handleEmailInput: ", event.target.value);

    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      colour,
      name,
      email
    };
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        {/* <AnswersList /> */}
      </section>
      <section className="main__form">
        {/* a form should be here */}
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" />
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" />
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" />
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" />I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleNameInput}
              value={name}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleEmailInput}
              value={email}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
