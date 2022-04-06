class InterestController {
  constructor () {
    this.renderInterestResult = this.renderInterestResult.bind(this)
  }

  calculateInterest (parameter) {
    return parameter.capital * (parameter.interest / 100) * parameter.year
  }

  renderInterestForm (req, res) {
    res.render('interest')
  }

  renderInterestResult (req, res) {
    const { capital, interest, year } = req.body

    const parameter = {
      capital: parseInt(capital),
      interest: parseFloat(interest),
      year: parseInt(year)
    }

    const totalInterest = this.calculateInterest(parameter)

    res.render('interest', {
      capital,
      interest,
      year,
      totalInterest
    })
  }
}
module.exports = InterestController
