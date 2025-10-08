import './BackgroundEmp.css'

function BackgroundEmp({path})
{
    return(
        <>
            <div className='backgroundemp'></div>
            <div className={`transparency ${path}`}></div>
        </>
    )
}

export default BackgroundEmp;