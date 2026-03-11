function DefaultValues({ actress, actor, verdict = "ATB", ...rest }) {
    return (
        <p>It is truly an {verdict} and that's all because of {actress}!</p>
    )
}
export default DefaultValues;