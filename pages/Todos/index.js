export const getStaticProps = async () => {
    
    const res = await fetch('http://localhost:8000/acts')
    const data = await res.json()

    return {
        props : {acts : data}
    }
}

const Todos = ({ acts }) => {

    return (
        <div>
            { acts.map(act => (
                <div key={act.id}>
                    <p>{act.act}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Todos;