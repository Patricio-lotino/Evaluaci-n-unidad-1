class AnnualInterestController {
  constructor () {
    this.renderAnnualInterestBank = this.renderAnnualInterestBank.bind(this)
  }

  calculateAnnualInterest (capital, interest, year) {
    const AnnualInterest = capital * (interest / 100) * year
    return AnnualInterest
  }

  renderAnnualInterest (req, res) {
    res.render('AnnualInterest')
  }

  renderAnnualInterestBank (req, res) {
    const payload = req.body

    const annualInterest = [
      payload.capital,
      payload.interest,
      payload.year
    ]

    const numberAnnualInterest = annualInterest.map((capital, interest, year) => parseInt(annualInterest))

    res.render('annualInterest', {
      annualInterest: this.calculateAnnualInterest(numberAnnualInterest)
    })
  }
}
module.exports = AnnualInterestController
