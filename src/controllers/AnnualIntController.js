class AnnualIntController {
calculateAnnualInt (capital, interes, year){
    const AnnualInt = capital * (interes/100) * year
    return AnnualInt
}

renderAnnualInt (req, res) {
    res.render ('AnnualInt')
}

renderAnnualIntBank (req, res){
    res.render('AnnualInt', {
        AnnualInt: 20
    })
}        
    


}





module.exports = AnnualIntController