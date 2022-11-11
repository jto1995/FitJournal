export default function PostForm (props) {
    const handleSelect = (event) => {
        
    }

    return (
        <section>
            <p>What are you logging?</p>
            <select onSelect={handleSelect} name="selectList" id="selectList">
                <option value="option 1">{props.option1}</option>
                <option value="option 2">{props.option2}</option>
                <option value="option 3">{props.option3}</option>
            </select>
        </section>
    )
}
// Option 1 
// what are you submiting? food log, exercise, progress pic, 

// goes to next option 

//food log
//