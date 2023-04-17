const Total = ({ parts }) => {
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((acc, current) => acc + current)
    return (
        <>
            <b>Total number of exercises: {total}</b>
        </>
    )
}

export default Total