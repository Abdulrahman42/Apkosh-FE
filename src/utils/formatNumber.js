export default (number) => {
    const NumberFormat = new Intl.NumberFormat("id-ID")
    return NumberFormat.format(number)
}