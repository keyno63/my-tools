inThisBuild(
    List(
        version := "0.1.0-SNAPSHOT",
       scalaVersion := "3.6.0",
        name := "bop-tool-backend"
    )
)

lazy val bopTool = (project in file("."))
    .settings(
        assembly / mainClass := Some("tokyo.keyno63.boptool.backend.Main"),
        assembly / assemblyJarName := "bop-tool-backend.jar",
        libraryDependencies ++= Seq(
            "org.scalatest" %% "scalatest" % "3.2.19" % Test,
            "dev.zio" %% "zio-http" % "3.0.1"
            )
    )

assembly / assemblyMergeStrategy := {
  case PathList("META-INF", _*) => MergeStrategy.discard
  case _                        => MergeStrategy.first
}

run / fork := true
