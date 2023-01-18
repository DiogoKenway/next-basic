export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default (props) => 
    (
        <div>
            <span>Aleatório: {props.numero}</span>
        </div>
    )
