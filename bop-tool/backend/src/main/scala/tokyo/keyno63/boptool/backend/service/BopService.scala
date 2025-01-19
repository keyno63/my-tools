package tokyo.keyno63.boptool.backend.service

final case class BopService(repository: BopRepository) {
    def selectByRange(startAt: Int, end: Int): BopRecord = repository.selectByRange(startAt, end)

}
