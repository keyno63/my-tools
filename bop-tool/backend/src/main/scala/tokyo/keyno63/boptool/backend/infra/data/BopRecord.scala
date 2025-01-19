package tokyo.keyno63.boptool.backend.infra.data

final case class BopRecord(
    // 日付
    date: Int,
    // 受付番号
    number: Int,
    // 通番
    number2: Int,
    // 場名
    raceCourse: String,
    // 曜日
    dayOfWeek: String,
    // レース番号
    raceNumber: Int,
    // 式別
    betType: String,
    // 馬/組番
    resultDetail: String,
    // 購入金額
    payment: Int,
    // 的中/返還
    result: String,
    // 払戻単価
    unitPrice: Int,
    // 払戻/返還金
    sumPrice: Int
)
