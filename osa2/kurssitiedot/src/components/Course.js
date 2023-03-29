import Content from "./Content"
import Header from "./Header"
import Total from "./Total"


const Course = ({ course }) => {
    const parts = course.parts
    return (
        <div>
            <Header name="Half Stack application development" />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default Course