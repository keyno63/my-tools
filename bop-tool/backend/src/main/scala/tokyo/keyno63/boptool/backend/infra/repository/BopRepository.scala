package tokyo.keyno63.boptool.backend.infra.repository

import tokyo.keyno63.boptool.backend.infra.data.BopRecord

final case class BopRepository() {
    def selectByRange(startAt: Int, end: Int): BopRecord = ???
}
