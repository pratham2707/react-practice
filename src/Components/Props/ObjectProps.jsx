function ObjectProps(props) {
    return (
        <>
            <h4>The nation passed is {props.nation.name} who's capital is {props.nation.capital}. {props.nation.language} is widely spoken language. The current prime minister of {props.nation.name} is {props.nation.pm}</h4>
        </>
    )
}

export default ObjectProps;