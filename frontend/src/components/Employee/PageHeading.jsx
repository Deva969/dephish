import './PageHeading.css'

function PageHeading({path})
{
    const pageheadings = {"dashboard":"DEPHISH","quiz":"QUIZ","game":"TRAINING","slipups":"SLIP-UPS"}
    return(
        <>
            <h1 className={`pageheading ${path}`}>{pageheadings[path]}</h1>
        </>
    )
}

export default PageHeading