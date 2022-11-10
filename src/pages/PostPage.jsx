import Btn from "../Components/Btn/Btn";
import Nav from "../Components/Navigation/Nav";
import PostForm from "../Components/Posts/PostForm";
import '../styles/PostPage.scss'
export default function PostPage() {
    return (
        <div>
            <div className="post-page">
                <PostForm option1="Options" option2="Exercise" option3="Food"/>
                <div className="food-log">
                    <h2>Logging Food</h2>
                    <p>Here you're able to log what you ate today and it will submit to our API to calculate to track your nutrition and store it into our server for your to keep track of! You will be able to see if you're hitting your macros each day!</p>
                        <form action="">
                            <label htmlFor=""></label>
                            <input type="text" />
                            <label htmlFor=""></label>
                            <input type="text" />
                            <label htmlFor=""></label>
                            <input type="text" />
                            <Btn/>
                        </form>
                </div>
                <div className="exercise-log">
                    <PostForm option1="Upper body" option2="Lower body" option3="Cardio & Abs"/>
                    <div>

                    </div>
                </div>

            </div>

        <Nav/>
        </div>
    )
}