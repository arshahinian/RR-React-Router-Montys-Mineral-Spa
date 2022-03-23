

export default function Packages(props) {
    const displayPackages = props.packages.map((eachItem,index) => <li key={index}>{eachItem}</li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
            </div>
        </div>
    )
}