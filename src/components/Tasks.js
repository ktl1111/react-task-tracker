const tasks = [
    {
        id: 1,
        text: 'Shopping',
        day: 'Feb 1 th at 10:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5 th at 11:00am',
        reminder: true,
    },
      {
        id: 3,
        text: 'Walk dog',
        day: 'Feb 6 th at 10:00pm',
        reminder: false,
    },
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
                ))}
        </>
    )
}

export default Tasks