import OutputScreenRow from './OutputScreenRow'

export default function OutputScreen({props}){
    const [question, answer] = props;
    return (
        <>
        <OutputScreenRow value={question} />
        <OutputScreenRow value={answer}/>
        </>
    )
}