package tokyo.keyno63.boptool.backend

import zio.*
import zio.http.*
import zio.http.Method

object Main extends ZIOAppDefault {

    private val routes = Routes(
        Method.GET / Root -> handler(Response.text("Root")),
        Method.GET / "hello" -> handler(Response.text("Hello, World!"))
    )

    def run = Server.serve(routes).provide(Server.default)
}
