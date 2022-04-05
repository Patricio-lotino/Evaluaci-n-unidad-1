class AnnualIntController {
  constructor () {
    this.renderAnnualIntBank = this.renderAnnualIntBank.bind(this)
  }

  calculateAnnualInt (capital, interes, year) {
    const AnnualInt = capital * (interes / 100) * year
    return AnnualInt
  }

  renderAnnualInt (req, res) {
    res.render('AnnualInt')
  }

  renderAnnualIntBank (req, res) {
    const payload = req.body

    const annualInt = [
      payload.capital,
      payload.tasa,
      payload.años
    ]

    const numberAnnualInt = annualInt.map(annualInt => parseInt(annualInt))

    res.render('AnnualInt', { annualInt: this.calculateAnnualInt(numberAnnualInt) })
  }
}
module.exports = AnnualIntController
