const Total = ({ parts }) => {
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((acc, current) => acc + current)
    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}

export default Total