inThisBuild(
    List(
        version := "0.1.0-SNAPSHOT",
       scalaVersion := "3.6.0",
        name := "bop-tool"
    )
)

lazy val bopTool = (project in file("."))
    .settings(
        libraryDependencies ++= Seq(
            "org.scalatest" %% "scalatest" % "3.2.19" % Test,
            "dev.zio" %% "zio-http" % "3.0.1"
            )
    )

run / fork := true
