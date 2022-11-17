export default function PostForm(props) {
  const handleSelect = (event) => {};

  return (
    <section className="flex justify-center">
      <p className="mb-2 mr-6">What are you logging?</p>
      <select
        className="mb-6 py-1 pl-2 italic rounded-xl"
        onSelect={handleSelect}
        name="selectList"
        id="selectList"
      >
        <option value="" disabled selected>
          Options
        </option>
        <option value="option 1">{props.option1}</option>
        <option value="option 2">{props.option2}</option>
        <option value="option 3">{props.option3}</option>
      </select>
    </section>
  );
}
// Option 1
// what are you submiting? food log, exercise, progress pic,

// goes to next option

//food log
//
